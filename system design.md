Project: KordexLabs
Focus: Database and API Specs for Rich Features

1. Enhanced Database Schema

Users Table: id, email, password_hash, theme_preference (dark/light), dashboard_layout_config (JSON field to remember how they arranged their bento-box).

Blogs Table: id, title, content_markdown, author, read_time_minutes, hero_image_url, tags (Array).

AITools Table: id, name, category, pros (Array), cons (Array), pricing_tier, logo_url.

Stocks Table: ticker, company_name, exchange (e.g., NASDAQ, NSE), asset_type (Stock/Index).

2. API Endpoints (FastAPI)

Standard REST (For static/slow-changing data):

GET /api/blogs/trending (Populates the homepage blog cards)

GET /api/tools/matrix?compare=ToolA,ToolB (Returns structured JSON for the side-by-side UI)

WebSocket Endpoints (For the "Amazing" real-time feel):

WS /ws/market-data/{ticker}

Behavior: When a user opens the NVDA or Nifty stock page, the Next.js frontend connects to this WebSocket. The Python backend streams live price ticks to the frontend, allowing the Framer Motion-powered chart to update smoothly in real-time.

3. UI Asset Delivery

All heavy images (blog headers, tool logos) will be served via a CDN (Content Delivery Network) like Cloudinary to ensure the frontend loads instantly, preserving the premium feel.