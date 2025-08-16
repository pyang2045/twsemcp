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

export interface MonthlyRevenue {
  出表日期: string;
  資料年月: string;
  公司代號: string;
  公司名稱: string;
  產業別: string;
  營業收入_當月營收: string;
  營業收入_上月營收: string;
  營業收入_去年當月營收: string;
  營業收入_上月比較增減: string;
  營業收入_去年同月增減: string;
  累計營業收入_當月累計營收: string;
  累計營業收入_去年累計營收: string;
  累計營業收入_前期比較增減: string;
  備註: string;
}

export interface IncomeStatement {
  年度_季度: string;
  公司代號: string;
  公司名稱: string;
  營業收入: string;
  營業成本: string;
  營業毛利: string;
  營業費用: string;
  營業利益: string;
  營業外收入及支出: string;
  稅前淨利: string;
  所得稅費用: string;
  本期淨利: string;
  每股盈餘: string;
}

export interface BalanceSheet {
  年度_季度: string;
  公司代號: string;
  公司名稱: string;
  流動資產: string;
  非流動資產: string;
  資產總額: string;
  流動負債: string;
  非流動負債: string;
  負債總額: string;
  股本: string;
  權益總額: string;
  負債及權益總額: string;
}

export interface IndustryEPS {
  產業別: string;
  公司家數: string;
  平均每股盈餘: string;
  最高每股盈餘: string;
  最低每股盈餘: string;
  產業平均本益比: string;
}

export interface ProfitAnalysis {
  年度季別: string;
  公司代號: string;
  公司名稱: string;
  毛利率: string;
  營業利益率: string;
  稅前純益率: string;
  稅後純益率: string;
  資產報酬率: string;
  權益報酬率: string;
  每股盈餘: string;
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

  async getMonthlyRevenue(): Promise<MonthlyRevenue[]> {
    try {
      const response = await this.client.get('/opendata/t187ap05_L');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch monthly revenue: ${error}`);
    }
  }

  async getIncomeStatement(): Promise<IncomeStatement[]> {
    try {
      const response = await this.client.get('/opendata/t187ap06_L_ci');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch income statements: ${error}`);
    }
  }

  async getBalanceSheet(): Promise<BalanceSheet[]> {
    try {
      const response = await this.client.get('/opendata/t187ap07_L_ci');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch balance sheets: ${error}`);
    }
  }

  async getIndustryEPS(): Promise<IndustryEPS[]> {
    try {
      const response = await this.client.get('/opendata/t187ap14_L');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch industry EPS: ${error}`);
    }
  }

  async getProfitAnalysis(): Promise<ProfitAnalysis[]> {
    try {
      const response = await this.client.get('/opendata/t187ap17_L');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch profit analysis: ${error}`);
    }
  }

  async getFinancialIncomeStatement(): Promise<IncomeStatement[]> {
    try {
      const response = await this.client.get('/opendata/t187ap06_L_basi');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch financial income statements: ${error}`);
    }
  }

  async getFinancialBalanceSheet(): Promise<BalanceSheet[]> {
    try {
      const response = await this.client.get('/opendata/t187ap07_L_basi');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch financial balance sheets: ${error}`);
    }
  }
}