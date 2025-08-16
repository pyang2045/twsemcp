# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an MCP (Model Context Protocol) server that provides access to Taiwan Stock Exchange (TWSE) market data. It exposes 22 tools for accessing real-time stock data, financial reports, and market indices through a standardized MCP interface.

## Essential Commands

### Development
```bash
npm install        # Install dependencies
npm run build      # Compile TypeScript to dist/
npm run dev        # Run in development mode with tsx (hot reload)
npm start          # Run compiled version from dist/
```

### Testing
```bash
# Test MCP server locally with stdio
node dist/index.js

# Test with MCP protocol messages
echo '{"jsonrpc":"2.0","method":"tools/list","params":{},"id":1}' | node dist/index.js

# Create local package for testing
npm pack
npm install -g ./twse-mcp-1.1.0.tgz
twse-mcp
```

### Publishing
```bash
npm run build      # Build before publishing
npm version patch  # Bump version (patch/minor/major)
npm publish        # Publish to npm registry
```

## Architecture

### Core Structure
The server follows a two-layer architecture:

1. **MCP Layer** (`src/index.ts`): 
   - Implements MCP protocol using `@modelcontextprotocol/sdk`
   - Registers 22 tools via `ListToolsRequestSchema`
   - Handles tool calls via `CallToolRequestSchema`
   - Uses stdio transport for Claude Desktop integration

2. **API Layer** (`src/api/twse-client.ts`):
   - Wraps TWSE OpenAPI endpoints (https://openapi.twse.com.tw)
   - Provides TypeScript interfaces for all data structures
   - Handles HTTP requests with axios
   - Returns data with Chinese field names (as per TWSE API)

### Tool Categories
- **Market Data** (6 tools): Daily stocks, P/E ratios, indices, averages, monthly stats, search
- **Trading Analysis** (3 tools): Top 20 volume, margin trading, 5-second stats
- **Foreign Investment** (2 tools): Top holdings, category holdings
- **Company Info** (2 tools): New listings, suspended stocks
- **ETF & Index** (2 tools): ETF rankings, index history
- **Financial Reports** (6 tools): Revenue, income statements, balance sheets, EPS, profit analysis, financial search
- **Utilities** (1 tool): Holiday schedule

### Key Implementation Details

**Tool Handler Pattern**: Each tool in `CallToolRequestSchema` follows this pattern:
```typescript
case 'toolName': {
  const data = await twseClient.methodName();
  return {
    content: [{
      type: 'text',
      text: JSON.stringify(data.slice(0, 100), null, 2) // Limit large datasets
    }]
  };
}
```

**Search Tools**: `searchStock` and `searchFinancials` filter data client-side:
```typescript
const filtered = allData.filter(item => item.公司代號 === stockCode);
```

**Binary Entry Point**: The `bin/twse-mcp.js` wrapper enables npx execution.

## TWSE API Integration

The server connects to TWSE OpenAPI v1 endpoints. Key endpoints include:
- `/exchangeReport/*` - Market data
- `/fund/*` - Foreign investment
- `/opendata/t187ap*` - Financial reports
- `/company/*` - Listings
- `/ETFReport/*` - ETF data
- `/indicesReport/*` - Index history
- `/holidaySchedule/*` - Trading calendar

All responses use Traditional Chinese field names which are preserved in the output.

## Adding New Tools

To add a new TWSE endpoint:

1. Add interface to `src/api/twse-client.ts`
2. Add method to `TWSEClient` class
3. Register tool in `ListToolsRequestSchema` 
4. Add handler case in `CallToolRequestSchema`
5. Update version in `package.json`
6. Document in README.md

## MCP Protocol Notes

- Server runs on stdio transport (required for Claude Desktop)
- Tools return JSON strings in `content[0].text`
- Large datasets are sliced to first 100 records
- Error handling uses `McpError` with `ErrorCode.InternalError`
- Version in server constructor should match package.json

## Testing with Claude Desktop

Configure in `~/Library/Application Support/Claude/claude_desktop_config.json`:
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

For local development, use absolute path to `node dist/index.js` instead of npx.