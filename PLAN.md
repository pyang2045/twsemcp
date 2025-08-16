# TWSE MCP Server Implementation Plan

## Overview
Create an MCP (Model Context Protocol) server that provides access to Taiwan Stock Exchange (TWSE) market data through a standardized interface, packaged as an npx-executable Node.js package.

## Architecture

### Core Components

1. **MCP Server Core**
   - Built using `@modelcontextprotocol/sdk/server/index.js`
   - Handles client connections via stdio transport
   - Manages tool registration and execution

2. **TWSE API Client**
   - Wrapper around TWSE OpenAPI endpoints
   - Handles HTTP requests to https://openapi.twse.com.tw
   - Implements caching for rate limiting compliance

3. **Tools Implementation**
   - `getStockDaily`: Fetch daily trading data for all stocks
   - `getStockPERatio`: Get P/E ratios and dividend yields
   - `getMarketIndex`: Retrieve market index statistics
   - `getTopForeignHoldings`: Top 20 foreign investor holdings
   - `getMonthlyStats`: Monthly stock trading information
   - `searchStock`: Search for specific stock by code or name

## Project Structure

```
twse-mcp/
├── src/
│   ├── index.ts           # MCP server entry point
│   ├── server.ts           # Server implementation
│   ├── tools/              # Tool implementations
│   │   ├── stock-daily.ts
│   │   ├── pe-ratio.ts
│   │   ├── market-index.ts
│   │   └── ...
│   ├── api/
│   │   └── twse-client.ts # TWSE API client
│   └── types/
│       └── index.ts        # TypeScript definitions
├── bin/
│   └── twse-mcp.js        # CLI executable
├── package.json
├── tsconfig.json
├── README.md
└── examples/
    └── claude-config.json  # Example Claude Desktop config

## Implementation Details

### 1. Dependencies
```json
{
  "dependencies": {
    "@modelcontextprotocol/sdk": "^0.5.0",
    "axios": "^1.6.0",
    "commander": "^11.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0",
    "tsx": "^4.0.0",
    "prettier": "^3.0.0"
  }
}
```

### 2. NPX Support
- Add `bin` field in package.json pointing to CLI executable
- Create shebang script that starts the MCP server
- Support both global installation and npx execution

### 3. Tool Definitions

Each tool will include:
- **Input Schema**: JSON Schema for parameters
- **Description**: Clear explanation of functionality
- **Response Format**: Structured data output

Example tool definition:
```typescript
{
  name: "getStockDaily",
  description: "Get daily trading information for all listed stocks",
  inputSchema: {
    type: "object",
    properties: {
      date: {
        type: "string",
        description: "Trading date (YYYYMMDD format)",
        pattern: "^\\d{8}$"
      }
    }
  }
}
```

### 4. Data Transformation

- Convert Chinese field names to English
- Format numbers (prices, volumes) consistently
- Add calculated fields (e.g., price changes, percentages)
- Support both JSON and tabular output formats

### 5. Error Handling

- Network timeout handling
- API rate limit management
- Invalid parameter validation
- Graceful degradation for missing data

## Usage Examples

### NPX Execution
```bash
npx twse-mcp
```

### Claude Desktop Configuration
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

### Example Queries
- "Get today's stock market data"
- "Show me the P/E ratios for TSMC"
- "What are the top foreign holdings?"
- "Get market index for this week"

## Publishing Strategy

1. **Package Name**: `@twse/mcp-server` or `twse-mcp`
2. **Version**: Start with 0.1.0
3. **License**: MIT
4. **Registry**: npm public registry
5. **Documentation**: Comprehensive README with examples

## Testing Plan

1. Unit tests for API client
2. Integration tests for MCP tools
3. End-to-end test with MCP client
4. Manual testing with Claude Desktop

## Future Enhancements

- Real-time WebSocket support
- Historical data aggregation
- Technical indicators calculation
- Multi-language support (English/Chinese)
- Caching layer with Redis
- Rate limiting and quota management