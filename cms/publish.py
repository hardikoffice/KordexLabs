import streamlit as st
import requests
import datetime
import os
from dotenv import load_dotenv

load_dotenv()

# Configuration — support both local and remote backends
DEFAULT_API_URL = "https://kordexlabs.onrender.com/api/blogs"
API_URL = os.getenv("CMS_API_URL", DEFAULT_API_URL)

# Optional ImgBB Setup
IMGBB_API_KEY = os.getenv("IMGBB_API_KEY")
IMGBB_AVAILABLE = bool(IMGBB_API_KEY) and IMGBB_API_KEY != "<your_imgbb_api_key>"

if not IMGBB_AVAILABLE:
    if IMGBB_API_KEY == "<your_imgbb_api_key>":
        st.error("⚠️ You are using the placeholder ImgBB API key. Please replace it with your real key in `.env`.")
    else:
        st.warning("ImgBB credentials not found in environment variables. Image uploads will fall back to URLs only.")

st.set_page_config(page_title="KordexLabs CMS", layout="wide")

st.title("🚀 KordexLabs Content Management System")
st.write("Publish daily AI news directly to the website.")

# --- Sidebar ---
st.sidebar.title("⚙️ Settings")

# API URL toggle
use_local = st.sidebar.toggle("Use Local Backend", value=False)
if use_local:
    API_URL = "http://localhost:8000/api/blogs"
    st.sidebar.success(f"🟢 Using: Local (`{API_URL}`)")
else:
    st.sidebar.info(f"🌐 Using: Remote (`{API_URL}`)")

# Connection check
st.sidebar.markdown("---")
st.sidebar.subheader("🔗 Connection Status")
try:
    health = requests.get(API_URL.replace("/blogs", "").rstrip("/").rsplit("/api", 1)[0], timeout=10)
    if health.status_code == 200:
        st.sidebar.success("✅ Backend is online")
    else:
        st.sidebar.warning(f"⚠️ Backend returned status {health.status_code}")
except requests.exceptions.ConnectionError:
    st.sidebar.error("❌ Cannot connect to backend — is it running?")
except Exception as e:
    st.sidebar.error(f"❌ Connection error: {e}")

# Existing blogs
st.sidebar.markdown("---")
st.sidebar.subheader("📰 Published Articles")
try:
    existing = requests.get(API_URL, timeout=10)
    if existing.status_code == 200:
        blogs = existing.json()
        if blogs:
            for b in blogs:
                col_text, col_del = st.sidebar.columns([0.8, 0.2])
                with col_text:
                    st.markdown(f"• **{b.get('title', 'Untitled')}**")
                with col_del:
                    if st.button("🗑️", key=f"del_{b.get('id')}", help="Delete this article"):
                        # Use session state to confirm deletion
                        st.session_state[f"confirm_delete_{b.get('id')}"] = True
                
                # Show confirmation if button clicked
                if st.session_state.get(f"confirm_delete_{b.get('id')}", False):
                    st.sidebar.warning("Are you sure?")
                    c1, c2 = st.sidebar.columns(2)
                    with c1:
                        if st.button("Yes", key=f"yes_{b.get('id')}"):
                            try:
                                # Call backend DELETE endpoint
                                del_url = f"{API_URL}/{b.get('id')}"
                                del_res = requests.delete(del_url, timeout=10)
                                if del_res.status_code == 200:
                                    st.sidebar.success("Deleted!")
                                    st.rerun()
                                else:
                                    st.sidebar.error(f"Failed: {del_res.status_code}")
                            except Exception as e:
                                st.sidebar.error(f"Error: {e}")
                    with c2:
                        if st.button("No", key=f"no_{b.get('id')}"):
                            st.session_state[f"confirm_delete_{b.get('id')}"] = False
                            st.rerun()
        else:
            st.sidebar.caption("No articles published yet.")
    else:
        st.sidebar.caption("Could not fetch articles.")
except Exception:
    st.sidebar.caption("Could not connect to fetch articles.")

if not IMGBB_AVAILABLE:
    st.warning("⚠️ IMGBB_API_KEY not found in `.env`. Image uploads are disabled.")

# --- Publish Form ---
with st.form("blog_form"):
    title = st.text_input("Blog Title", placeholder="Enter a catchy title...")
    author = st.text_input("Author Name", value="Hardik")
    
    col1, col2 = st.columns(2)
    with col1:
        read_time = st.number_input("Read Time (minutes)", min_value=1, value=5)
    with col2:
        published_at = st.date_input("Publish Date", value=datetime.date.today())
    
    tags_str = st.text_input("Tags (comma separated)", placeholder="AI, Machine Learning, Trending")
    
    hero_image = st.file_uploader("Header Image", type=["jpg", "jpeg", "png", "webp", "gif"], disabled=not IMGBB_AVAILABLE)
    image_url_input = st.text_input("Or Image URL", placeholder="https://images.unsplash.com/...")
    
    content = st.text_area("Content (Markdown)", height=400, placeholder="Write your blog content here using markdown...")
    
    submit = st.form_submit_button("🚀 Publish Blog")

if submit:
    if not title or not content:
        st.error("Title and Content are required!")
    else:
        with st.spinner("Publishing..."):
            final_image_url = image_url_input
            
            # Handle Upload to ImgBB if file provided
            if hero_image and IMGBB_AVAILABLE:
                try:
                    # Upload file to ImgBB
                    st.info("Uploading image to ImgBB...")
                    
                    import base64
                    image_base64 = base64.b64encode(hero_image.read()).decode('utf-8')
                    
                    upload_response = requests.post(
                        "https://api.imgbb.com/1/upload",
                        data={
                            "key": IMGBB_API_KEY,
                            "image": image_base64
                        },
                        timeout=30
                    )
                    
                    if upload_response.status_code == 200:
                        upload_result = upload_response.json()
                        final_image_url = upload_result["data"]["url"]
                        st.success("Image uploaded successfully!")
                    else:
                        st.error(f"Image upload failed with status {upload_response.status_code}: {upload_response.text}")
                except Exception as e:
                    st.error(f"Image upload error: {e}")
            elif hero_image and not IMGBB_AVAILABLE:
                st.error("Cannot upload image because 'IMGBB_API_KEY' is missing.")
            
            payload = {
                "title": title,
                "author": author,
                "read_time_minutes": read_time,
                "hero_image_url": final_image_url,
                "tags": [t.strip() for t in tags_str.split(",") if t.strip()],
                "published_at": str(published_at),
                "content_markdown": content
            }
            
            try:
                response = requests.post(API_URL, json=payload, timeout=15)
                if response.status_code == 200:
                    st.success(f"✅ Successfully published: **{title}**")
                    st.balloons()
                else:
                    st.error(f"Failed to publish: {response.status_code} — {response.text}")
            except requests.exceptions.ConnectionError:
                st.error("❌ Cannot connect to backend. Make sure it is running.")
            except requests.exceptions.Timeout:
                st.error("❌ Request timed out. The backend may be waking up (Render free tier). Try again in 30 seconds.")
            except Exception as e:
                st.error(f"Error: {e}")
