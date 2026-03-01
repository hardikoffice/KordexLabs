export interface AITool {
    id: string;
    name: string;
    category: string;
    pros: string[];
    cons: string[];
    pricing_tier: string;
    logo_url: string;
    description: string;
    use_cases: string[];
    limitations: string[];
}

export const tools: AITool[] = [
    {
        id: "1",
        name: "ChatGPT",
        category: "LLM / Chatbot",
        pros: ["Versatile", "Large plugin ecosystem", "Strong code generation", "Multimodal support"],
        cons: ["Can hallucinate", "Expensive at scale", "Rate limits on free tier"],
        pricing_tier: "Freemium — $20/mo Pro",
        logo_url: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
        description: "OpenAI's flagship conversational AI model, powered by GPT-5.",
        use_cases: ["Content creation", "Code assistance", "Research"],
        limitations: ["No real-time data", "Context window limits"],
    },
    {
        id: "2",
        name: "Claude",
        category: "LLM / Chatbot",
        pros: ["Massive context window (500K)", "Excellent safety", "Strong reasoning", "Code analysis"],
        cons: ["Slower than GPT-5", "Smaller ecosystem", "No image generation"],
        pricing_tier: "Freemium — $20/mo Pro",
        logo_url: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg",
        description: "Anthropic's AI assistant focused on safety and helpfulness.",
        use_cases: ["Document analysis", "Long-form writing", "Code review"],
        limitations: ["No web browsing", "Limited tool use"],
    },
    {
        id: "3",
        name: "Midjourney",
        category: "Image Generation",
        pros: ["Stunning visual quality", "Strong artistic style", "Active community"],
        cons: ["Discord-only interface", "No API access", "Slow generation"],
        pricing_tier: "$10–$60/mo",
        logo_url: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png",
        description: "AI image generation tool known for its artistic and photorealistic outputs.",
        use_cases: ["Art creation", "Marketing visuals", "Concept design"],
        limitations: ["No text rendering", "Inconsistent hands/faces"],
    },
    {
        id: "4",
        name: "GitHub Copilot",
        category: "Code Assistant",
        pros: ["Deep IDE integration", "Multi-language support", "Workspace context", "Fast suggestions"],
        cons: ["Subscription required", "Can suggest insecure code", "Privacy concerns"],
        pricing_tier: "$10/mo Individual",
        logo_url: "https://github.githubassets.com/images/modules/site/copilot/copilot.png",
        description: "AI pair programmer integrated directly into your editor.",
        use_cases: ["Code completion", "Test generation", "Documentation"],
        limitations: ["Needs good context", "Language-dependent quality"],
    },
    {
        id: "5",
        name: "Runway ML",
        category: "Video Generation",
        pros: ["Text-to-video", "Motion brush", "Professional quality", "Web-based"],
        cons: ["Expensive credits", "Short clip length", "Watermarks on free tier"],
        pricing_tier: "Freemium — $12–$76/mo",
        logo_url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Runway_company_logo.png",
        description: "AI-powered creative tools for video generation and editing.",
        use_cases: ["Video production", "Special effects", "Prototyping"],
        limitations: ["4-second clips", "Limited control over output"],
    },
    {
        id: "6",
        name: "Hugging Face",
        category: "ML Platform",
        pros: ["Massive model hub", "Open source", "Great community", "Free inference API"],
        cons: ["Steep learning curve", "Variable model quality", "Compute costs for fine-tuning"],
        pricing_tier: "Free — Pro $9/mo",
        logo_url: "https://huggingface.co/front/assets/huggingface_logo.svg",
        description: "The GitHub of machine learning — hosting models, datasets, and spaces.",
        use_cases: ["Model hosting", "Fine-tuning", "Dataset management"],
        limitations: ["Requires ML knowledge", "Inference speed varies"],
    },
    {
        id: "7",
        name: "Notion AI",
        category: "Productivity",
        pros: ["Integrated with Notion workspace", "Writing assistance", "Summarization", "Easy to use"],
        cons: ["Limited to Notion ecosystem", "Basic compared to dedicated LLMs", "Add-on cost"],
        pricing_tier: "$10/mo add-on",
        logo_url: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
        description: "AI writing and brainstorming assistant built into the Notion workspace.",
        use_cases: ["Note-taking", "Document drafting", "Meeting summaries"],
        limitations: ["Notion-only", "No code generation", "No image creation"],
    },
    {
        id: "8",
        name: "Perplexity AI",
        category: "Search / Research",
        pros: ["Real-time web search", "Source citations", "Clean interface", "Focus modes"],
        cons: ["Limited free queries", "Can misinterpret complex queries", "No file upload on free"],
        pricing_tier: "Freemium — $20/mo Pro",
        logo_url: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Perplexity_AI_logo.png",
        description: "AI-powered answer engine that searches the web and cites its sources.",
        use_cases: ["Research", "Fact-checking", "Academic writing"],
        limitations: ["Rate limits", "Occasional outdated sources"],
    },
];
