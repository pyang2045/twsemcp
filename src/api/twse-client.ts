import axios, { AxiosInstance } from 'axios';

export interface StockDaily {
  Code: string;
  Name: string;
  TradeVolume: string;
  TradeValue: string;
  OpeningPrice: string;
  HighestPrice: string;
  LowestPrice: string;
  ClosingPrice: string;
  Change: string;
  Transaction: string;
}

export interface StockPERatio {
  Code: string;
  Name: string;
  DividendYield: string;
  PERatio: string;
  PriceBookRatio: string;
}

export interface MarketIndex {
  Date: string;
  Code: string;
  Name: string;
  ClosingIndex: string;
  Change: string;
  ChangePercent: string;
}

export interface ForeignHolding {
  Rank: string;
  Code: string;
  Name: string;
  SharesHeld: string;
  Percentage: string;
}

export interface MonthlyStock {
  Month: string;
  Code: string;
  Name: string;
  HighestPrice: string;
  LowestPrice: string;
  AveragePrice: string;
  TradeVolume: string;
}

export interface StockDayAvg {
  Code: string;
  Name: string;
  ClosingPrice: string;
  MonthlyAveragePrice: string;
}

export interface MarginTrading {
  Date: string;
  MarginBuy: string;
  MarginSell: string;
  MarginBalance: string;
  ShortSell: string;
  ShortCover: string;
  ShortBalance: string;
}

export interface Top20Volume {
  Rank: string;
  Code: string;
  Name: string;
  TradeVolume: string;
  TradeValue: string;
}

export interface FiveSecondStats {
  Time: string;
  BidVolume: string;
  BidOrders: string;
  AskVolume: string;
  AskOrders: string;
  TransactionVolume: string;
  TransactionAmount: string;
}

export interface HolidaySchedule {
  Date: string;
  Name: string;
  Description: string;
}

export interface NewListing {
  Date: string;
  Code: string;
  Name: string;
  Market: string;
  Industry: string;
}

export interface SuspendedListing {
  Date: string;
  Code: string;
  Name: string;
  Reason: string;
}

export interface ETFRanking {
  Rank: string;
  Code: string;
  Name: string;
  Accounts: string;
}

export interface ForeignCategoryHolding {
  Category: string;
  SharesHeld: string;
  Percentage: string;
  Change: string;
}

export interface IndexHistory {
  Date: string;
  Open: string;
  High: string;
  Low: string;
  Close: string;
}

export class TWSEClient {
  private client: AxiosInstance;
  private baseURL = 'https://openapi.twse.com.tw/v1';

  constructor() {
    this.client = axios.create({
      baseURL: this.baseURL,
      timeout: 30000,
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'TWSE-MCP-Server/1.0'
      }
    });
  }

  async getStockDayAll(): Promise<StockDaily[]> {
    try {
      const response = await this.client.get('/exchangeReport/STOCK_DAY_ALL');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch daily stock data: ${error}`);
    }
  }

  async getStockPERatios(): Promise<StockPERatio[]> {
    try {
      const response = await this.client.get('/exchangeReport/BWIBBU_ALL');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch P/E ratios: ${error}`);
    }
  }

  async getMarketIndex(): Promise<MarketIndex[]> {
    try {
      const response = await this.client.get('/exchangeReport/MI_INDEX');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch market index: ${error}`);
    }
  }

  async getTopForeignHoldings(): Promise<ForeignHolding[]> {
    try {
      const response = await this.client.get('/fund/MI_QFIIS_sort_20');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch foreign holdings: ${error}`);
    }
  }

  async getMonthlyStats(): Promise<MonthlyStock[]> {
    try {
      const response = await this.client.get('/exchangeReport/FMSRFK_ALL');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch monthly stats: ${error}`);
    }
  }

  async getStockDayAvg(): Promise<StockDayAvg[]> {
    try {
      const response = await this.client.get('/exchangeReport/STOCK_DAY_AVG_ALL');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch stock day average: ${error}`);
    }
  }

  async getMarginTrading(): Promise<MarginTrading[]> {
    try {
      const response = await this.client.get('/exchangeReport/MI_MARGN');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch margin trading data: ${error}`);
    }
  }

  async getTop20Volume(): Promise<Top20Volume[]> {
    try {
      const response = await this.client.get('/exchangeReport/MI_INDEX20');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch top 20 volume: ${error}`);
    }
  }

  async getFiveSecondStats(): Promise<FiveSecondStats[]> {
    try {
      const response = await this.client.get('/exchangeReport/MI_5MINS');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch 5-second stats: ${error}`);
    }
  }

  async getHolidaySchedule(): Promise<HolidaySchedule[]> {
    try {
      const response = await this.client.get('/holidaySchedule/holidaySchedule');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch holiday schedule: ${error}`);
    }
  }

  async getNewListings(): Promise<NewListing[]> {
    try {
      const response = await this.client.get('/company/newlisting');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch new listings: ${error}`);
    }
  }

  async getSuspendedListings(): Promise<SuspendedListing[]> {
    try {
      const response = await this.client.get('/company/suspendListingCsvAndHtml');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch suspended listings: ${error}`);
    }
  }

  async getETFRanking(): Promise<ETFRanking[]> {
    try {
      const response = await this.client.get('/ETFReport/ETFRank');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch ETF ranking: ${error}`);
    }
  }

  async getForeignCategoryHoldings(): Promise<ForeignCategoryHolding[]> {
    try {
      const response = await this.client.get('/fund/MI_QFIIS_cat');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch foreign category holdings: ${error}`);
    }
  }

  async getIndexHistory(): Promise<IndexHistory[]> {
    try {
      const response = await this.client.get('/indicesReport/MI_5MINS_HIST');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch index history: ${error}`);
    }
  }
}