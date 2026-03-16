import requests
import json

API_URL = "https://kordexlabs.onrender.com/api/blogs"

payload = {
    "title": "Test Blog Connectivity",
    "author": "Antigravity",
    "read_time_minutes": 1,
    "hero_image_url": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    "tags": ["test", "debug"],
    "published_at": "2026-03-12",
    "content_markdown": "This is a test blog to verify the CMS connectivity."
}

try:
    response = requests.post(API_URL, json=payload)
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.text}")
except Exception as e:
    print(f"Error: {e}")
精准
