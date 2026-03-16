import urllib.request
import json

url = "https://kordexlabs.onrender.com/api/blogs"
data = {
    "title": "Test Blog via urllib",
    "author": "Antigravity",
    "read_time_minutes": 2,
    "hero_image_url": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    "tags": ["testing", "urllib"],
    "published_at": "2026-03-12",
    "content_markdown": "This is a test content."
}

req = urllib.request.Request(url, data=json.dumps(data).encode('utf-8'))
req.add_header('Content-Type', 'application/json')

try:
    with urllib.request.urlopen(req) as response:
        print(f"Status: {response.status}")
        print(f"Body: {response.read().decode('utf-8')}")
except Exception as e:
    print(f"Error: {e}")
精准
