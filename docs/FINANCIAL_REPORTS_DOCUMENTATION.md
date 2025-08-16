# TWSE Financial Reports MCP Tools Documentation

## Overview
The TWSE MCP Server now includes 6 comprehensive financial reporting tools for accessing company financial statements, revenue data, and profitability metrics.

---

## Financial Report Tools

### 1. getMonthlyRevenue
**Description**: Get monthly revenue reports for all listed companies

**Endpoint**: `/opendata/t187ap05_L`

**Input Schema**:
```json
{
  "type": "object",
  "properties": {}
}
```

**Response Fields** (in Chinese):
- `出表日期`: Report date
- `資料年月`: Data year/month
- `公司代號`: Company code
- `公司名稱`: Company name
- `產業別`: Industry category
- `營業收入_當月營收`: Current month revenue
- `營業收入_上月營收`: Previous month revenue
- `營業收入_去年當月營收`: Same month last year revenue
- `營業收入_上月比較增減`: Month-over-month change (%)
- `營業收入_去年同月增減`: Year-over-year change (%)
- `累計營業收入_當月累計營收`: YTD revenue
- `累計營業收入_去年累計營收`: Previous year YTD revenue
- `累計營業收入_前期比較增減`: YTD change (%)
- `備註`: Notes

**Example Usage**:
```
"Show monthly revenue for all companies"
"Get revenue growth data"
"Which companies have revenue growth?"
```

---

### 2. getIncomeStatement
**Description**: Get quarterly income statements for all listed companies (general industry)

**Endpoint**: `/opendata/t187ap06_L_ci`

**Input Schema**:
```json
{
  "type": "object",
  "properties": {}
}
```

**Response Fields** (in Chinese):
- `年度_季度`: Year/Quarter
- `公司代號`: Company code
- `公司名稱`: Company name
- `營業收入`: Operating revenue
- `營業成本`: Operating costs
- `營業毛利`: Gross profit
- `營業費用`: Operating expenses
- `營業利益`: Operating income
- `營業外收入及支出`: Non-operating income/expenses
- `稅前淨利`: Income before tax
- `所得稅費用`: Income tax expense
- `本期淨利`: Net income
- `每股盈餘`: Earnings per share (EPS)

**Example Usage**:
```
"Show quarterly income statements"
"Get company earnings data"
"Which companies are profitable?"
```

---

### 3. getBalanceSheet
**Description**: Get quarterly balance sheets for all listed companies (general industry)

**Endpoint**: `/opendata/t187ap07_L_ci`

**Input Schema**:
```json
{
  "type": "object",
  "properties": {}
}
```

**Response Fields** (in Chinese):
- `年度_季度`: Year/Quarter
- `公司代號`: Company code
- `公司名稱`: Company name
- `流動資產`: Current assets
- `非流動資產`: Non-current assets
- `資產總額`: Total assets
- `流動負債`: Current liabilities
- `非流動負債`: Non-current liabilities
- `負債總額`: Total liabilities
- `股本`: Share capital
- `權益總額`: Total equity
- `負債及權益總額`: Total liabilities and equity

**Example Usage**:
```
"Show balance sheet data"
"Get company asset information"
"Check debt levels"
```

---

### 4. getIndustryEPS
**Description**: Get earnings per share (EPS) statistics by industry

**Endpoint**: `/opendata/t187ap14_L`

**Input Schema**:
```json
{
  "type": "object",
  "properties": {}
}
```

**Response Fields** (in Chinese):
- `產業別`: Industry category
- `公司家數`: Number of companies
- `平均每股盈餘`: Average EPS
- `最高每股盈餘`: Highest EPS
- `最低每股盈餘`: Lowest EPS
- `產業平均本益比`: Industry average P/E ratio

**Example Usage**:
```
"Show EPS by industry"
"Which industry has highest earnings?"
"Get industry profitability comparison"
```

---

### 5. getProfitAnalysis
**Description**: Get comprehensive profitability analysis including ROE, ROA, profit margins

**Endpoint**: `/opendata/t187ap17_L`

**Input Schema**:
```json
{
  "type": "object",
  "properties": {}
}
```

**Response Fields** (in Chinese):
- `年度季別`: Year/Quarter
- `公司代號`: Company code
- `公司名稱`: Company name
- `毛利率`: Gross profit margin (%)
- `營業利益率`: Operating profit margin (%)
- `稅前純益率`: Pre-tax profit margin (%)
- `稅後純益率`: Net profit margin (%)
- `資產報酬率`: Return on assets (ROA) (%)
- `權益報酬率`: Return on equity (ROE) (%)
- `每股盈餘`: Earnings per share (EPS)

**Example Usage**:
```
"Show profitability metrics"
"Get ROE and ROA data"
"Which companies have best margins?"
```

---

### 6. searchFinancials
**Description**: Search financial reports for specific company

**Input Schema**:
```json
{
  "type": "object",
  "properties": {
    "stockCode": {
      "type": "string",
      "description": "Stock code to search (e.g., 2330)"
    },
    "reportType": {
      "type": "string",
      "enum": ["revenue", "income", "balance", "profit"],
      "description": "Type of financial report",
      "default": "revenue"
    }
  },
  "required": ["stockCode"]
}
```

**Parameters**:
- `stockCode`: Company stock code (e.g., "2330" for TSMC)
- `reportType`: Type of report to retrieve
  - `"revenue"`: Monthly revenue data
  - `"income"`: Quarterly income statement
  - `"balance"`: Quarterly balance sheet
  - `"profit"`: Profitability analysis

**Example Usage**:
```
"Get TSMC financial reports" (stockCode: "2330")
"Show 2317 income statement" (stockCode: "2317", reportType: "income")
"Get Hon Hai balance sheet" (stockCode: "2317", reportType: "balance")
"Show 2330 profitability" (stockCode: "2330", reportType: "profit")
```

---

## Common Use Cases

### Fundamental Analysis
```
1. searchFinancials("2330", "revenue") - Check revenue trend
2. searchFinancials("2330", "income") - Review earnings
3. searchFinancials("2330", "balance") - Analyze financial position
4. searchFinancials("2330", "profit") - Evaluate profitability
```

### Industry Comparison
```
1. getIndustryEPS() - Compare industry earnings
2. getProfitAnalysis() - Compare profit margins
3. getMonthlyRevenue() - Compare revenue growth
```

### Screening for Value
```
1. getProfitAnalysis() - Find high ROE companies
2. getIncomeStatement() - Find growing earnings
3. getBalanceSheet() - Find low debt companies
```

### Revenue Monitoring
```
1. getMonthlyRevenue() - Track monthly changes
2. searchFinancials(code, "revenue") - Specific company tracking
```

---

## Important Notes

### Data Language
- All field names are in Traditional Chinese
- Numeric values are universal
- Dates follow Taiwan calendar format

### Data Frequency
- **Monthly Revenue**: Updated monthly (around 10th of each month)
- **Quarterly Reports**: Updated quarterly
  - Q1: May
  - Q2: August
  - Q3: November
  - Q4: March (following year)

### Data Limitations
- Returns first 100 records for large datasets
- Financial industry uses different endpoints (not included in general industry tools)
- Some companies may have missing data

### Financial Metrics Key Terms
- 營業收入 = Operating Revenue
- 營業成本 = Operating Costs
- 毛利 = Gross Profit
- 營業利益 = Operating Income
- 淨利 = Net Income
- 每股盈餘 (EPS) = Earnings Per Share
- 資產報酬率 (ROA) = Return on Assets
- 權益報酬率 (ROE) = Return on Equity
- 本益比 (P/E) = Price-to-Earnings Ratio

---

## Example Analysis Workflow

### Complete Company Analysis for TSMC (2330)
```javascript
// 1. Check recent revenue trend
searchFinancials("2330", "revenue")

// 2. Review latest income statement
searchFinancials("2330", "income")

// 3. Analyze balance sheet strength
searchFinancials("2330", "balance")

// 4. Evaluate profitability metrics
searchFinancials("2330", "profit")

// 5. Compare with industry
getIndustryEPS()  // Find semiconductor industry metrics
```

### Find High-Quality Companies
```javascript
// 1. Get profitability metrics
getProfitAnalysis()  // Look for high ROE (>15%)

// 2. Check revenue growth
getMonthlyRevenue()  // Look for consistent YoY growth

// 3. Review balance sheets
getBalanceSheet()  // Look for low debt/equity ratios

// 4. Verify earnings quality
getIncomeStatement()  // Check operating margin trends
```