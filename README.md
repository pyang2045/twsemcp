# TWSE MCP Server

An MCP (Model Context Protocol) server that provides access to Taiwan Stock Exchange (TWSE) market data through a standardized interface.

## Features

- Real-time access to TWSE market data
- Daily stock trading information
- P/E ratios and dividend yields
- Market indices (TAIEX and others)
- Foreign investor holdings
- Monthly trading statistics
- Stock search functionality
- **NEW: Complete financial reports (v1.1.0)**
  - Monthly revenue reports
  - Quarterly income statements
  - Balance sheets
  - Profitability analysis (ROE, ROA, margins)
  - Industry EPS comparisons

## Installation

### Using NPX (Recommended)
No installation required! Simply run:
```bash
npx twse-mcp
```

### Global Installation
```bash
npm install -g twse-mcp
```

### Local Development
```bash
git clone https://github.com/yourusername/twse-mcp.git
cd twse-mcp
npm install
npm run build
npm start
```

## Usage with Claude Desktop

Add the following configuration to your Claude Desktop config file:

### MacOS
Location: `~/Library/Application Support/Claude/claude_desktop_config.json`

### Windows
Location: `%APPDATA%\\Claude\\claude_desktop_config.json`

### Configuration

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

Or if globally installed:

```json
{
  "mcpServers": {
    "twse": {
      "command": "twse-mcp",
      "args": [],
      "env": {}
    }
  }
}
```

## Available Tools (22 Total)

### Core Market Data

#### 1. `getStockDaily`
Get daily trading information for all listed stocks.
- "Get today's stock market data"
- "Show me daily trading volumes"

#### 2. `getStockPERatios`
Retrieve P/E ratios, dividend yields, and price-to-book ratios.
- "What are the P/E ratios for stocks?"
- "Show dividend yields"

#### 3. `getMarketIndex`
Get market index statistics including TAIEX.
- "Show market indices"
- "What's the TAIEX index today?"

#### 4. `getStockDayAvg`
Get daily closing prices and monthly average prices.
- "Show monthly average prices"
- "Get closing price comparisons"

#### 5. `getMonthlyStats`
Get monthly trading statistics.
- "Show monthly trading data"
- "Get monthly high and low prices"

### Trading Analysis

#### 6. `getTop20Volume`
Get top 20 stocks by daily trading volume.
- "What are the most traded stocks today?"
- "Show top volume stocks"

#### 7. `getMarginTrading`
Get margin trading and short selling statistics.
- "Show margin trading data"
- "What's the short interest?"

#### 8. `getFiveSecondStats`
Get real-time 5-second bid/ask statistics.
- "Show current bid/ask spread"
- "Get real-time trading stats"

### Foreign Investment

#### 9. `getTopForeignHoldings`
View top 20 foreign investor holdings.
- "What stocks do foreign investors hold?"
- "Show top foreign holdings"

#### 10. `getForeignCategoryHoldings`
Get foreign holdings by industry category.
- "Show foreign investment by sector"
- "Which industries attract foreign investment?"

### Company Information

#### 11. `getNewListings`
Get recently listed companies.
- "Show new IPOs"
- "What companies just listed?"

#### 12. `getSuspendedListings`
Get delisted or suspended companies.
- "Show delisted stocks"
- "Which companies were suspended?"

### ETF & Index

#### 13. `getETFRanking`
Get top ETFs by regular investment accounts.
- "Show popular ETFs"
- "Which ETFs have most investors?"

#### 14. `getIndexHistory`
Get historical TAIEX index data.
- "Show TAIEX history"
- "Get index OHLC data"

### Market Calendar

#### 15. `getHolidaySchedule`
Get TWSE market holiday schedule.
- "When is the market closed?"
- "Show trading holidays"

### Financial Reports (NEW v1.1.0)

#### 16. `getMonthlyRevenue`
Get monthly revenue reports for all companies.
- "Show revenue growth trends"
- "Which companies have growing sales?"

#### 17. `getIncomeStatement`
Get quarterly income statements.
- "Show company earnings"
- "Get profit and loss data"

#### 18. `getBalanceSheet`
Get quarterly balance sheets.
- "Show company assets and debt"
- "Check financial position"

#### 19. `getIndustryEPS`
Get EPS statistics by industry.
- "Compare industry profitability"
- "Which sector has best earnings?"

#### 20. `getProfitAnalysis`
Get ROE, ROA, and profit margins.
- "Show profitability metrics"
- "Find high ROE companies"

#### 21. `searchFinancials`
Search financial reports for specific company.

**Parameters:**
- `stockCode`: Company code (e.g., "2330")
- `reportType`: "revenue", "income", "balance", or "profit"

**Examples:**
- "Get TSMC financials"
- "Show 2330 balance sheet"

### Search Function

#### 22. `searchStock`
Search for specific stock by code or name.

**Parameters:**
- `query`: Stock code (e.g., "2330") or name
- `dataType`: Type of data ("daily", "peratio", "monthly")

**Examples:**
- "Search for TSMC stock data"
- "Find stock 2330"
- "Show P/E ratio for stock 2317"

## Example Conversations

### Basic Market Overview
```
User: "Show me today's market index"
Assistant: *Uses getMarketIndex tool to fetch and display current indices*

User: "What are the top foreign holdings?"
Assistant: *Uses getTopForeignHoldings to show top 20 foreign-held stocks*
```

### Stock Research
```
User: "I want to research TSMC (2330)"
Assistant: *Uses searchStock with query="2330" to find TSMC data*

User: "Show me its P/E ratio"
Assistant: *Uses searchStock with query="2330" and dataType="peratio"*
```

### Market Analysis
```
User: "Show me stocks with high dividend yields"
Assistant: *Uses getStockPERatios and filters for high dividend yields*

User: "What stocks traded the most today?"
Assistant: *Uses getStockDaily and sorts by trading volume*
```

## API Data Source

This MCP server fetches data from the official Taiwan Stock Exchange OpenAPI:
- Base URL: https://openapi.twse.com.tw/
- Documentation: https://openapi.twse.com.tw/

## Development

### Building from Source
```bash
npm install
npm run build
```

### Running in Development Mode
```bash
npm run dev
```

### TypeScript Support
The project is written in TypeScript with full type definitions for all TWSE data structures.

## Publishing to NPM

1. Update version in `package.json`
2. Build the project: `npm run build`
3. Publish: `npm publish`

## Limitations

- Data is fetched in real-time from TWSE API
- API rate limits may apply
- Some data may have delays as per TWSE policies
- Currently supports Traditional Chinese stock names

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Support

For issues or questions, please open an issue on GitHub:
https://github.com/yourusername/twse-mcp/issues