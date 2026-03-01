from fastapi import APIRouter, Query
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter()


class ToolOut(BaseModel):
    id: str
    name: str
    category: str
    pros: List[str]
    cons: List[str]
    pricing_tier: str
    logo_url: str


TOOLS = [
    ToolOut(id="1", name="ChatGPT", category="LLM / Chatbot", pros=["Versatile", "Large plugin ecosystem"], cons=["Can hallucinate", "Expensive at scale"], pricing_tier="Freemium — $20/mo Pro", logo_url=""),
    ToolOut(id="2", name="Claude", category="LLM / Chatbot", pros=["Massive context window", "Excellent safety"], cons=["Slower than GPT-5", "Smaller ecosystem"], pricing_tier="Freemium — $20/mo Pro", logo_url=""),
    ToolOut(id="3", name="Midjourney", category="Image Generation", pros=["Stunning visual quality", "Strong artistic style"], cons=["Discord-only interface", "No API access"], pricing_tier="$10–$60/mo", logo_url=""),
    ToolOut(id="4", name="GitHub Copilot", category="Code Assistant", pros=["Deep IDE integration", "Multi-language support"], cons=["Subscription required", "Can suggest insecure code"], pricing_tier="$10/mo Individual", logo_url=""),
]


@router.get("/tools", response_model=List[ToolOut])
def get_tools():
    return TOOLS


@router.get("/tools/matrix", response_model=List[ToolOut])
def get_tools_matrix(compare: Optional[str] = Query(None)):
    if not compare:
        return TOOLS
    names = [n.strip().lower() for n in compare.split(",")]
    return [t for t in TOOLS if t.name.lower() in names]
