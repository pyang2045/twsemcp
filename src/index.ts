#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ErrorCode,
  ListToolsRequestSchema,
  McpError,
} from '@modelcontextprotocol/sdk/types.js';
import { TWSEClient } from './api/twse-client.js';

const server = new Server(
  {
    name: 'twse-mcp',
    version: '0.1.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

const twseClient = new TWSEClient();

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'getStockDaily',
        description: 'Get daily trading information for all listed stocks on TWSE',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'getStockPERatios',
        description: 'Get P/E ratios, dividend yields, and price-to-book ratios for all stocks',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'getMarketIndex',
        description: 'Get daily market index statistics including TAIEX and other indices',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'getTopForeignHoldings',
        description: 'Get top 20 foreign and mainland investor stock holdings',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'getMonthlyStats',
        description: 'Get monthly stock trading statistics including high/low prices and volumes',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'searchStock',
        description: 'Search for specific stock information by code or name',
        inputSchema: {
          type: 'object',
          properties: {
            query: {
              type: 'string',
              description: 'Stock code (e.g., 2330) or partial name to search',
            },
            dataType: {
              type: 'string',
              enum: ['daily', 'peratio', 'monthly'],
              description: 'Type of data to retrieve',
              default: 'daily',
            },
          },
          required: ['query'],
        },
      },
      {
        name: 'getStockDayAvg',
        description: 'Get daily closing prices and monthly average prices for all stocks',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'getMarginTrading',
        description: 'Get margin trading and short selling statistics',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'getTop20Volume',
        description: 'Get top 20 stocks by daily trading volume',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'getFiveSecondStats',
        description: 'Get real-time 5-second bid/ask and transaction statistics',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'getHolidaySchedule',
        description: 'Get TWSE market holiday schedule and trading days',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'getNewListings',
        description: 'Get recently listed companies on TWSE',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'getSuspendedListings',
        description: 'Get companies that have been delisted or suspended',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'getETFRanking',
        description: 'Get top ETFs by regular investment accounts',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'getForeignCategoryHoldings',
        description: 'Get foreign investor holdings by industry category',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'getIndexHistory',
        description: 'Get historical TAIEX index data (open, high, low, close)',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'getMonthlyRevenue',
        description: 'Get monthly revenue reports for all listed companies',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'getIncomeStatement',
        description: 'Get quarterly income statements for all listed companies (general industry)',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'getBalanceSheet',
        description: 'Get quarterly balance sheets for all listed companies (general industry)',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'getIndustryEPS',
        description: 'Get earnings per share (EPS) statistics by industry',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'getProfitAnalysis',
        description: 'Get comprehensive profitability analysis including ROE, ROA, profit margins',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'searchFinancials',
        description: 'Search financial reports for specific company',
        inputSchema: {
          type: 'object',
          properties: {
            stockCode: {
              type: 'string',
              description: 'Stock code to search (e.g., 2330)',
            },
            reportType: {
              type: 'string',
              enum: ['revenue', 'income', 'balance', 'profit'],
              description: 'Type of financial report',
              default: 'revenue',
            },
          },
          required: ['stockCode'],
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case 'getStockDaily': {
        const data = await twseClient.getStockDayAll();
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data.slice(0, 100), null, 2),
            },
          ],
        };
      }

      case 'getStockPERatios': {
        const data = await twseClient.getStockPERatios();
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data.slice(0, 100), null, 2),
            },
          ],
        };
      }

      case 'getMarketIndex': {
        const data = await twseClient.getMarketIndex();
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      }

      case 'getTopForeignHoldings': {
        const data = await twseClient.getTopForeignHoldings();
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      }

      case 'getMonthlyStats': {
        const data = await twseClient.getMonthlyStats();
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data.slice(0, 100), null, 2),
            },
          ],
        };
      }

      case 'searchStock': {
        const query = (args?.query as string)?.toUpperCase() || '';
        const dataType = (args?.dataType as string) || 'daily';
        
        let data: any[] = [];
        
        switch (dataType) {
          case 'daily':
            const dailyData = await twseClient.getStockDayAll();
            data = dailyData.filter(stock => 
              stock.Code.includes(query) || 
              stock.Name.includes(query)
            );
            break;
          case 'peratio':
            const peData = await twseClient.getStockPERatios();
            data = peData.filter(stock => 
              stock.Code.includes(query) || 
              stock.Name.includes(query)
            );
            break;
          case 'monthly':
            const monthlyData = await twseClient.getMonthlyStats();
            data = monthlyData.filter(stock => 
              stock.Code.includes(query) || 
              stock.Name.includes(query)
            );
            break;
        }
        
        return {
          content: [
            {
              type: 'text',
              text: data.length > 0 
                ? JSON.stringify(data, null, 2)
                : `No stocks found matching "${query}"`,
            },
          ],
        };
      }

      case 'getStockDayAvg': {
        const data = await twseClient.getStockDayAvg();
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data.slice(0, 100), null, 2),
            },
          ],
        };
      }

      case 'getMarginTrading': {
        const data = await twseClient.getMarginTrading();
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      }

      case 'getTop20Volume': {
        const data = await twseClient.getTop20Volume();
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      }

      case 'getFiveSecondStats': {
        const data = await twseClient.getFiveSecondStats();
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      }

      case 'getHolidaySchedule': {
        const data = await twseClient.getHolidaySchedule();
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      }

      case 'getNewListings': {
        const data = await twseClient.getNewListings();
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      }

      case 'getSuspendedListings': {
        const data = await twseClient.getSuspendedListings();
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      }

      case 'getETFRanking': {
        const data = await twseClient.getETFRanking();
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      }

      case 'getForeignCategoryHoldings': {
        const data = await twseClient.getForeignCategoryHoldings();
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      }

      case 'getIndexHistory': {
        const data = await twseClient.getIndexHistory();
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      }

      case 'getMonthlyRevenue': {
        const data = await twseClient.getMonthlyRevenue();
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data.slice(0, 100), null, 2),
            },
          ],
        };
      }

      case 'getIncomeStatement': {
        const data = await twseClient.getIncomeStatement();
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data.slice(0, 100), null, 2),
            },
          ],
        };
      }

      case 'getBalanceSheet': {
        const data = await twseClient.getBalanceSheet();
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data.slice(0, 100), null, 2),
            },
          ],
        };
      }

      case 'getIndustryEPS': {
        const data = await twseClient.getIndustryEPS();
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      }

      case 'getProfitAnalysis': {
        const data = await twseClient.getProfitAnalysis();
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data.slice(0, 100), null, 2),
            },
          ],
        };
      }

      case 'searchFinancials': {
        const stockCode = (args?.stockCode as string)?.toUpperCase() || '';
        const reportType = (args?.reportType as string) || 'revenue';
        
        let data: any[] = [];
        
        switch (reportType) {
          case 'revenue':
            const revenue = await twseClient.getMonthlyRevenue();
            data = revenue.filter(item => 
              item.公司代號 === stockCode
            );
            break;
          case 'income':
            const income = await twseClient.getIncomeStatement();
            data = income.filter(item => 
              item.公司代號 === stockCode
            );
            break;
          case 'balance':
            const balance = await twseClient.getBalanceSheet();
            data = balance.filter(item => 
              item.公司代號 === stockCode
            );
            break;
          case 'profit':
            const profit = await twseClient.getProfitAnalysis();
            data = profit.filter(item => 
              item.公司代號 === stockCode
            );
            break;
        }
        
        return {
          content: [
            {
              type: 'text',
              text: data.length > 0 
                ? JSON.stringify(data, null, 2)
                : `No financial data found for stock ${stockCode}`,
            },
          ],
        };
      }

      default:
        throw new McpError(
          ErrorCode.MethodNotFound,
          `Unknown tool: ${name}`
        );
    }
  } catch (error) {
    throw new McpError(
      ErrorCode.InternalError,
      `Error executing tool ${name}: ${error}`
    );
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  
  process.stderr.write('TWSE MCP Server running on stdio\\n');
}

main().catch((error) => {
  console.error('Server error:', error);
  process.exit(1);
});