# TWSE MCP Tools Complete Documentation

## Overview
The TWSE MCP Server provides 16 comprehensive tools for accessing Taiwan Stock Exchange market data through the Model Context Protocol. All tools return JSON-formatted data.

---

## 1. getStockDaily
**Description**: Get daily trading information for all listed stocks on TWSE

**Endpoint**: `/exchangeReport/STOCK_DAY_ALL`

**Input Schema**:
```json
{
  "type": "object",
  "properties": {}
}
```

**Response Fields**:
- `Code`: Stock code
- `Name`: Stock name
- `TradeVolume`: Trading volume (shares)
- `TradeValue`: Trading value (TWD)
- `OpeningPrice`: Opening price
- `HighestPrice`: Day's high
- `LowestPrice`: Day's low
- `ClosingPrice`: Closing price
- `Change`: Price change
- `Transaction`: Number of transactions

**Example Usage**:
```
"Get today's stock market data"
"Show me all stock prices"
"What's the trading volume today?"
```

---

## 2. getStockPERatios
**Description**: Get P/E ratios, dividend yields, and price-to-book ratios for all stocks

**Endpoint**: `/exchangeReport/BWIBBU_ALL`

**Input Schema**:
```json
{
  "type": "object",
  "properties": {}
}
```

**Response Fields**:
- `Code`: Stock code
- `Name`: Stock name
- `DividendYield`: Dividend yield percentage
- `PERatio`: Price-to-earnings ratio
- `PriceBookRatio`: Price-to-book value ratio

**Example Usage**:
```
"Show P/E ratios for all stocks"
"Which stocks have high dividend yields?"
"Get value metrics for stocks"
```

---

## 3. getMarketIndex
**Description**: Get daily market index statistics including TAIEX and other indices

**Endpoint**: `/exchangeReport/MI_INDEX`

**Input Schema**:
```json
{
  "type": "object",
  "properties": {}
}
```

**Response Fields**:
- `Date`: Trading date
- `Code`: Index code
- `Name`: Index name (e.g., TAIEX)
- `ClosingIndex`: Closing index value
- `Change`: Point change
- `ChangePercent`: Percentage change

**Example Usage**:
```
"What's the TAIEX index today?"
"Show all market indices"
"How did the market perform?"
```

---

## 4. getStockDayAvg
**Description**: Get daily closing prices and monthly average prices for all stocks

**Endpoint**: `/exchangeReport/STOCK_DAY_AVG_ALL`

**Input Schema**:
```json
{
  "type": "object",
  "properties": {}
}
```

**Response Fields**:
- `Code`: Stock code
- `Name`: Stock name
- `ClosingPrice`: Today's closing price
- `MonthlyAveragePrice`: 30-day average price

**Example Usage**:
```
"Show monthly average prices"
"Compare closing vs average prices"
"Get price averages for stocks"
```

---

## 5. getMonthlyStats
**Description**: Get monthly stock trading statistics including high/low prices and volumes

**Endpoint**: `/exchangeReport/FMSRFK_ALL`

**Input Schema**:
```json
{
  "type": "object",
  "properties": {}
}
```

**Response Fields**:
- `Month`: Trading month
- `Code`: Stock code
- `Name`: Stock name
- `HighestPrice`: Monthly high
- `LowestPrice`: Monthly low
- `AveragePrice`: Monthly average
- `TradeVolume`: Monthly volume

**Example Usage**:
```
"Show monthly trading statistics"
"Get monthly highs and lows"
"What's the monthly volume?"
```

---

## 6. getTop20Volume
**Description**: Get top 20 stocks by daily trading volume

**Endpoint**: `/exchangeReport/MI_INDEX20`

**Input Schema**:
```json
{
  "type": "object",
  "properties": {}
}
```

**Response Fields**:
- `Rank`: Volume ranking (1-20)
- `Code`: Stock code
- `Name`: Stock name
- `TradeVolume`: Trading volume
- `TradeValue`: Trading value

**Example Usage**:
```
"What are the most traded stocks?"
"Show top 20 by volume"
"Which stocks are most active?"
```

---

## 7. getMarginTrading
**Description**: Get margin trading and short selling statistics

**Endpoint**: `/exchangeReport/MI_MARGN`

**Input Schema**:
```json
{
  "type": "object",
  "properties": {}
}
```

**Response Fields**:
- `Date`: Trading date
- `MarginBuy`: Margin buy volume
- `MarginSell`: Margin sell volume
- `MarginBalance`: Net margin balance
- `ShortSell`: Short sell volume
- `ShortCover`: Short cover volume
- `ShortBalance`: Net short balance

**Example Usage**:
```
"Show margin trading data"
"What's the short interest?"
"Get leverage statistics"
```

---

## 8. getFiveSecondStats
**Description**: Get real-time 5-second bid/ask and transaction statistics

**Endpoint**: `/exchangeReport/MI_5MINS`

**Input Schema**:
```json
{
  "type": "object",
  "properties": {}
}
```

**Response Fields**:
- `Time`: Timestamp
- `BidVolume`: Total bid volume
- `BidOrders`: Number of bid orders
- `AskVolume`: Total ask volume
- `AskOrders`: Number of ask orders
- `TransactionVolume`: Executed volume
- `TransactionAmount`: Transaction value

**Example Usage**:
```
"Show real-time market depth"
"Get current bid/ask spread"
"What's the order flow?"
```

---

## 9. getTopForeignHoldings
**Description**: Get top 20 foreign and mainland investor stock holdings

**Endpoint**: `/fund/MI_QFIIS_sort_20`

**Input Schema**:
```json
{
  "type": "object",
  "properties": {}
}
```

**Response Fields**:
- `Rank`: Holding rank (1-20)
- `Code`: Stock code
- `Name`: Stock name
- `SharesHeld`: Total shares held
- `Percentage`: Ownership percentage

**Example Usage**:
```
"What stocks do foreign investors prefer?"
"Show top foreign holdings"
"Which stocks attract foreign capital?"
```

---

## 10. getForeignCategoryHoldings
**Description**: Get foreign investor holdings by industry category

**Endpoint**: `/fund/MI_QFIIS_cat`

**Input Schema**:
```json
{
  "type": "object",
  "properties": {}
}
```

**Response Fields**:
- `Category`: Industry category
- `SharesHeld`: Total shares held
- `Percentage`: Category ownership %
- `Change`: Daily change

**Example Usage**:
```
"Show foreign investment by sector"
"Which industries attract foreign money?"
"Get sector allocation of foreign funds"
```

---

## 11. getNewListings
**Description**: Get recently listed companies on TWSE

**Endpoint**: `/company/newlisting`

**Input Schema**:
```json
{
  "type": "object",
  "properties": {}
}
```

**Response Fields**:
- `Date`: Listing date
- `Code`: Stock code
- `Name`: Company name
- `Market`: Market segment
- `Industry`: Industry classification

**Example Usage**:
```
"Show recent IPOs"
"What companies just went public?"
"Get new stock listings"
```

---

## 12. getSuspendedListings
**Description**: Get companies that have been delisted or suspended

**Endpoint**: `/company/suspendListingCsvAndHtml`

**Input Schema**:
```json
{
  "type": "object",
  "properties": {}
}
```

**Response Fields**:
- `Date`: Suspension date
- `Code`: Stock code
- `Name`: Company name
- `Reason`: Suspension reason

**Example Usage**:
```
"Show delisted companies"
"Which stocks were suspended?"
"Get trading halt information"
```

---

## 13. getETFRanking
**Description**: Get top ETFs by regular investment accounts

**Endpoint**: `/ETFReport/ETFRank`

**Input Schema**:
```json
{
  "type": "object",
  "properties": {}
}
```

**Response Fields**:
- `Rank`: Popularity rank
- `Code`: ETF code
- `Name`: ETF name
- `Accounts`: Number of investor accounts

**Example Usage**:
```
"Show most popular ETFs"
"Which ETFs have most investors?"
"Get ETF rankings"
```

---

## 14. getIndexHistory
**Description**: Get historical TAIEX index data (open, high, low, close)

**Endpoint**: `/indicesReport/MI_5MINS_HIST`

**Input Schema**:
```json
{
  "type": "object",
  "properties": {}
}
```

**Response Fields**:
- `Date`: Trading date
- `Open`: Opening index
- `High`: Day's high
- `Low`: Day's low
- `Close`: Closing index

**Example Usage**:
```
"Show TAIEX historical data"
"Get index OHLC chart data"
"What's the index trend?"
```

---

## 15. getHolidaySchedule
**Description**: Get TWSE market holiday schedule and trading days

**Endpoint**: `/holidaySchedule/holidaySchedule`

**Input Schema**:
```json
{
  "type": "object",
  "properties": {}
}
```

**Response Fields**:
- `Date`: Holiday date
- `Name`: Holiday name
- `Description`: Holiday description

**Example Usage**:
```
"When is the market closed?"
"Show trading holidays"
"Get market calendar"
```

---

## 16. searchStock
**Description**: Search for specific stock information by code or name

**Input Schema**:
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "Stock code (e.g., 2330) or partial name to search"
    },
    "dataType": {
      "type": "string",
      "enum": ["daily", "peratio", "monthly"],
      "description": "Type of data to retrieve",
      "default": "daily"
    }
  },
  "required": ["query"]
}
```

**Parameters**:
- `query`: Stock code or name to search (case-insensitive)
- `dataType`: Type of data to retrieve
  - `"daily"`: Daily trading data (default)
  - `"peratio"`: P/E ratio and dividend data
  - `"monthly"`: Monthly statistics

**Response**: Filtered results based on query and data type

**Example Usage**:
```
"Search for TSMC stock" (query: "2330" or "TSMC")
"Find stock 2317 P/E ratio" (query: "2317", dataType: "peratio")
"Get monthly data for Hon Hai" (query: "Hon Hai", dataType: "monthly")
```

---

## Common Use Cases

### Market Overview
```
1. getMarketIndex() - Check overall market performance
2. getTop20Volume() - See most active stocks
3. getFiveSecondStats() - Monitor real-time activity
```

### Stock Analysis
```
1. searchStock("2330") - Find specific stock
2. getStockPERatios() - Check valuation metrics
3. getStockDayAvg() - Compare to averages
```

### Foreign Investment Tracking
```
1. getTopForeignHoldings() - Top foreign picks
2. getForeignCategoryHoldings() - Sector preferences
3. getMarginTrading() - Leverage indicators
```

### Portfolio Research
```
1. getNewListings() - Find new opportunities
2. getETFRanking() - Popular ETF choices
3. getMonthlyStats() - Long-term trends
```

### Trading Planning
```
1. getHolidaySchedule() - Plan around holidays
2. getStockDaily() - Daily price action
3. getIndexHistory() - Historical context
```

---

## Error Handling

All tools follow consistent error handling:

**Success Response**:
```json
{
  "content": [
    {
      "type": "text",
      "text": "[JSON data]"
    }
  ]
}
```

**Error Response**:
```json
{
  "error": {
    "code": "InternalError",
    "message": "Error executing tool [name]: [details]"
  }
}
```

---

## Rate Limiting

The TWSE API may have rate limits. The MCP server includes:
- 30-second timeout per request
- Automatic retry on network errors
- Graceful error messages

---

## Data Freshness

- **Real-time data**: getFiveSecondStats (5-second updates)
- **Intraday data**: Most endpoints update during market hours
- **Daily data**: Updated after market close (around 14:30 TST)
- **Monthly data**: Updated monthly

---

## Language Support

- Stock names are in Traditional Chinese
- Numeric data is universal
- Dates follow YYYY-MM-DD format
- Currency values in TWD (Taiwan Dollar)