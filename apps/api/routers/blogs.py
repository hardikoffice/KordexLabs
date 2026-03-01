from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter()


class BlogOut(BaseModel):
    id: str
    title: str
    author: str
    read_time_minutes: int
    hero_image_url: str
    tags: List[str]
    published_at: str
    content_markdown: str


BLOGS = [
    BlogOut(
        id="1",
        title="GPT-5 is Here: What It Means for Developers",
        author="Sarah Chen",
        read_time_minutes=8,
        hero_image_url="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
        tags=["LLM", "OpenAI", "Trending"],
        published_at="2026-02-28",
        content_markdown="Full article content here...",
    ),
    BlogOut(
        id="2",
        title="Claude 4 vs GPT-5: The Ultimate Comparison",
        author="Marcus Rivera",
        read_time_minutes=12,
        hero_image_url="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
        tags=["Comparison", "LLM", "Anthropic"],
        published_at="2026-02-25",
        content_markdown="Full article content here...",
    ),
    BlogOut(
        id="3",
        title="Building AI Agents with LangGraph: A Complete Guide",
        author="Priya Sharma",
        read_time_minutes=15,
        hero_image_url="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
        tags=["Tutorial", "Agents", "LangChain"],
        published_at="2026-02-22",
        content_markdown="Full article content here...",
    ),
]


@router.get("/blogs/trending", response_model=List[BlogOut])
def get_trending_blogs():
    return BLOGS[:3]


@router.get("/blogs/{blog_id}", response_model=BlogOut)
def get_blog(blog_id: str):
    for b in BLOGS:
        if b.id == blog_id:
            return b
    return {"error": "Not found"}
