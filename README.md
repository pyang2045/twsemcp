# TWSE MCP Server

[![npm version](https://img.shields.io/npm/v/twse-mcp.svg)](https://www.npmjs.com/package/twse-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/node/v/twse-mcp.svg)](https://nodejs.org)

A Model Context Protocol (MCP) server that provides real-time access to Taiwan Stock Exchange (TWSE) market data, financial reports, and trading analytics through Claude Desktop.

## 🚀 Quick Start

```bash
npx twse-mcp
```

No installation required! The server connects directly to TWSE's official API to provide comprehensive market data.

## 📋 Features

### Market Data & Analytics
- 📊 **Real-time Trading Data** - Daily stock prices, volumes, and OHLC data
- 📈 **Market Indices** - TAIEX and sector indices with real-time updates
- 💹 **Technical Indicators** - P/E ratios, dividend yields, price-to-book values
- 📉 **Trading Analytics** - Top volume stocks, margin trading, 5-second bid/ask stats

### Financial Intelligence
- 💰 **Financial Statements** - Quarterly income statements and balance sheets
- 📊 **Revenue Reports** - Monthly revenue with YoY/MoM comparisons
- 🎯 **Profitability Metrics** - ROE, ROA, profit margins by company
- 🏭 **Industry Analysis** - EPS statistics and comparisons by sector

### Investment Insights
- 🌍 **Foreign Investment** - Top foreign holdings and sector preferences
- 📈 **ETF Rankings** - Most popular ETFs by investor accounts
- 🏢 **Corporate Actions** - New IPOs and delisted companies
- 📅 **Market Calendar** - Trading holidays and market schedules

## 🛠️ Installation

### Option 1: NPX (Recommended)
```bash
# Run directly without installation
npx twse-mcp
```

### Option 2: Global Installation
```bash
# Install globally
npm install -g twse-mcp

# Run the server
twse-mcp
```

### Option 3: Local Development
```bash
# Clone repository
git clone https://github.com/pyang2045/twsemcp.git
cd twse-mcp

# Install dependencies
npm install

# Build and run
npm run build
npm start
```

## 🔧 Claude Desktop Configuration

### macOS
Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "twse": {
      "command": "npx",
      "args": ["twse-mcp"],
      "env": {}
    }
  }
}
```

### Windows
Add to `%APPDATA%\Claude\claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "twse": {
      "command": "npx",
      "args": ["twse-mcp"],
      "env": {}
    }
  }
}
```

## 📚 Available Tools

### Market Data (6 tools)
| Tool | Description | Example Query |
|------|-------------|---------------|
| `getStockDaily` | Daily trading data for all stocks | "Show today's stock prices" |
| `getStockPERatios` | Valuation metrics | "Find undervalued stocks" |
| `getMarketIndex` | Market indices (TAIEX, etc.) | "How's the market today?" |
| `getStockDayAvg` | Daily close vs monthly average | "Show price averages" |
| `getMonthlyStats` | Monthly trading statistics | "Get monthly highs and lows" |
| `searchStock` | Search specific stock | "Find TSMC stock data" |

### Financial Reports (6 tools)
| Tool | Description | Example Query |
|------|-------------|---------------|
| `getMonthlyRevenue` | Monthly revenue reports | "Show revenue growth" |
| `getIncomeStatement` | Quarterly P&L statements | "Get earnings data" |
| `getBalanceSheet` | Quarterly balance sheets | "Check debt levels" |
| `getIndustryEPS` | EPS by industry | "Compare sector earnings" |
| `getProfitAnalysis` | ROE, ROA, margins | "Find profitable companies" |
| `searchFinancials` | Company-specific financials | "Get TSMC financial reports" |

### Trading Analysis (3 tools)
| Tool | Description | Example Query |
|------|-------------|---------------|
| `getTop20Volume` | Most traded stocks | "What's hot today?" |
| `getMarginTrading` | Margin/short data | "Show leverage levels" |
| `getFiveSecondStats` | Real-time bid/ask | "Get order flow" |

### Investment Research (7 tools)
| Tool | Description | Example Query |
|------|-------------|---------------|
| `getTopForeignHoldings` | Top foreign holdings | "What are foreigners buying?" |
| `getForeignCategoryHoldings` | Foreign investment by sector | "Foreign sector preferences" |
| `getNewListings` | Recent IPOs | "Show new stocks" |
| `getSuspendedListings` | Delisted companies | "Which stocks were delisted?" |
| `getETFRanking` | Popular ETFs | "Top ETF choices" |
| `getIndexHistory` | Historical index data | "TAIEX history" |
| `getHolidaySchedule` | Market calendar | "When is market closed?" |

## 💡 Example Usage

### Basic Market Check
```
You: "How's the Taiwan stock market doing today?"
Claude: [Uses getMarketIndex to show TAIEX and major indices]

You: "What are the most active stocks?"
Claude: [Uses getTop20Volume to display top traded stocks]
```

### Company Research
```
You: "Analyze TSMC's financial performance"
Claude: [Uses searchFinancials("2330", "income") for earnings]
        [Uses searchFinancials("2330", "balance") for financial position]
        [Uses searchFinancials("2330", "profit") for profitability metrics]
```

### Investment Screening
```
You: "Find high dividend yield stocks"
Claude: [Uses getStockPERatios to filter for high dividend yields]

You: "Show me what foreign investors are buying"
Claude: [Uses getTopForeignHoldings for top 20 foreign picks]
```

## 🔍 Search Functions

### searchStock
Search for specific stock data:
```javascript
{
  "query": "2330",        // Stock code or name
  "dataType": "daily"     // "daily" | "peratio" | "monthly"
}
```

### searchFinancials
Search company financial reports:
```javascript
{
  "stockCode": "2330",    // Company stock code
  "reportType": "income"  // "revenue" | "income" | "balance" | "profit"
}
```

## 📊 Data Sources

- **Official API**: Taiwan Stock Exchange OpenAPI
- **Base URL**: https://openapi.twse.com.tw/
- **Update Frequency**: 
  - Real-time: 5-second stats during market hours
  - Daily: After market close (~14:30 TST)
  - Monthly: Financial reports on 10th of each month
  - Quarterly: Financial statements 45 days after quarter end

## 🔧 Development

### Prerequisites
- Node.js >= 18.0.0
- TypeScript 5.0+

### Build from Source
```bash
# Install dependencies
npm install

# Development mode (with hot reload)
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

### Project Structure
```
twse-mcp/
├── src/
│   ├── index.ts           # MCP server implementation
│   └── api/
│       └── twse-client.ts # TWSE API client
├── dist/                  # Compiled JavaScript
├── bin/                   # CLI executable
└── examples/              # Configuration examples
```

## 📝 API Response Format

All tools return JSON data with Traditional Chinese field names:

```json
{
  "公司代號": "2330",
  "公司名稱": "台積電",
  "收盤價": "595.00",
  "本益比": "25.83",
  "殖利率": "2.02"
}
```

## ⚠️ Limitations

- **Rate Limits**: TWSE API may have rate limiting
- **Data Delay**: Some data has 15-20 minute delay
- **Language**: Field names in Traditional Chinese
- **Market Hours**: Real-time data only during TSE trading hours (09:00-13:30 TST)
- **Data Volume**: Large queries return first 100 records

## 🤝 Contributing

Contributions are welcome! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📜 License

MIT License - see [LICENSE](LICENSE) file for details

## 🆘 Support

- **Issues**: [GitHub Issues](https://github.com/pyang2045/twsemcp/issues)
- **Discussions**: [GitHub Discussions](https://github.com/pyang2045/twsemcp/discussions)
- **Documentation**: [Full Documentation](https://github.com/pyang2045/twsemcp/wiki)

## 🙏 Acknowledgments

- Taiwan Stock Exchange for providing the OpenAPI
- Anthropic for the MCP SDK
- Contributors and users of this project

---

Made with ❤️ for Taiwan's investment community