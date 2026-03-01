export interface Stock {
    ticker: string;
    company_name: string;
    exchange: string;
    asset_type: "Stock" | "Index";
    price: number;
    change: number;
    change_percent: number;
    history: number[];
}

export const stocks: Stock[] = [
    {
        ticker: "NVDA",
        company_name: "NVIDIA Corporation",
        exchange: "NASDAQ",
        asset_type: "Stock",
        price: 875.30,
        change: 12.45,
        change_percent: 1.44,
        history: [820, 835, 810, 845, 860, 850, 870, 855, 862, 875, 868, 880, 875, 890, 882, 895, 870, 865, 878, 875],
    },
    {
        ticker: "MSFT",
        company_name: "Microsoft Corporation",
        exchange: "NASDAQ",
        asset_type: "Stock",
        price: 452.18,
        change: -3.22,
        change_percent: -0.71,
        history: [440, 445, 450, 448, 455, 460, 458, 462, 457, 453, 450, 455, 458, 460, 456, 454, 452, 450, 453, 452],
    },
    {
        ticker: "GOOGL",
        company_name: "Alphabet Inc.",
        exchange: "NASDAQ",
        asset_type: "Stock",
        price: 178.92,
        change: 2.15,
        change_percent: 1.22,
        history: [165, 168, 170, 172, 169, 174, 176, 173, 175, 178, 176, 180, 177, 179, 175, 177, 176, 178, 180, 179],
    },
    {
        ticker: "META",
        company_name: "Meta Platforms Inc.",
        exchange: "NASDAQ",
        asset_type: "Stock",
        price: 612.47,
        change: 8.33,
        change_percent: 1.38,
        history: [580, 585, 590, 588, 595, 600, 598, 605, 610, 608, 612, 615, 610, 618, 614, 620, 616, 612, 610, 612],
    },
    {
        ticker: "AMZN",
        company_name: "Amazon.com Inc.",
        exchange: "NASDAQ",
        asset_type: "Stock",
        price: 198.65,
        change: -1.78,
        change_percent: -0.89,
        history: [190, 192, 195, 194, 198, 200, 197, 199, 201, 203, 200, 198, 196, 199, 201, 200, 198, 197, 199, 199],
    },
    {
        ticker: "AMD",
        company_name: "Advanced Micro Devices",
        exchange: "NASDAQ",
        asset_type: "Stock",
        price: 178.50,
        change: 5.20,
        change_percent: 3.0,
        history: [155, 160, 158, 165, 162, 168, 170, 172, 168, 175, 178, 174, 180, 176, 173, 178, 175, 180, 177, 179],
    },
    {
        ticker: "TSM",
        company_name: "Taiwan Semiconductor",
        exchange: "NYSE",
        asset_type: "Stock",
        price: 192.30,
        change: 3.80,
        change_percent: 2.01,
        history: [175, 178, 180, 182, 185, 183, 187, 190, 188, 192, 189, 191, 193, 190, 195, 192, 188, 190, 191, 192],
    },
    {
        ticker: "PLTR",
        company_name: "Palantir Technologies",
        exchange: "NYSE",
        asset_type: "Stock",
        price: 82.15,
        change: -2.45,
        change_percent: -2.90,
        history: [88, 86, 84, 87, 85, 83, 86, 84, 82, 85, 83, 81, 84, 82, 80, 83, 81, 84, 82, 82],
    },
    {
        ticker: "^NSEI",
        company_name: "Nifty 50",
        exchange: "NSE",
        asset_type: "Index",
        price: 22450.0,
        change: 145.30,
        change_percent: 0.65,
        history: [22000, 22100, 22050, 22200, 22150, 22300, 22250, 22400, 22350, 22450, 22380, 22500, 22420, 22550, 22480, 22350, 22400, 22300, 22420, 22450],
    },
    {
        ticker: "^IXIC",
        company_name: "NASDAQ Composite",
        exchange: "NASDAQ",
        asset_type: "Index",
        price: 18920.0,
        change: 78.50,
        change_percent: 0.42,
        history: [18500, 18600, 18550, 18700, 18650, 18800, 18750, 18850, 18780, 18900, 18850, 18950, 18880, 18920, 18860, 18800, 18850, 18900, 18880, 18920],
    },
];
