# TWSE MCP Tools Quick Reference

## 🚀 Quick Start
```bash
npx twse-mcp
```

## 📊 Tool Summary Table

| Tool | Purpose | Key Data | Update Frequency |
|------|---------|----------|------------------|
| `getStockDaily` | All stocks daily trading | Price, volume, OHLC | Daily |
| `getStockPERatios` | Valuation metrics | P/E, dividend yield, P/B | Daily |
| `getMarketIndex` | Market indices | TAIEX, other indices | Real-time |
| `getStockDayAvg` | Price averages | Close vs 30-day avg | Daily |
| `getMonthlyStats` | Monthly statistics | Monthly high/low/avg | Monthly |
| `getTop20Volume` | Most traded stocks | Top 20 by volume | Real-time |
| `getMarginTrading` | Leverage data | Margin/short balances | Daily |
| `getFiveSecondStats` | Order flow | Bid/ask, transactions | 5 seconds |
| `getTopForeignHoldings` | Foreign favorites | Top 20 holdings | Daily |
| `getForeignCategoryHoldings` | Sector allocation | Industry breakdown | Daily |
| `getNewListings` | Recent IPOs | New companies | As listed |
| `getSuspendedListings` | Delisted stocks | Suspended companies | As delisted |
| `getETFRanking` | Popular ETFs | By investor accounts | Daily |
| `getIndexHistory` | Historical TAIEX | OHLC history | Daily |
| `getHolidaySchedule` | Market calendar | Trading holidays | Annual |
| `searchStock` | Find specific stock | Filtered results | Real-time |

## 🎯 Common Queries

### "What's the market doing?"
```javascript
getMarketIndex()        // TAIEX and indices
getTop20Volume()        // Most active stocks
getFiveSecondStats()    // Real-time flow
```

### "Show me TSMC (2330)"
```javascript
searchStock("2330")                          // Daily data
searchStock("2330", "peratio")              // P/E ratio
searchStock("2330", "monthly")              // Monthly stats
```

### "What are foreign investors buying?"
```javascript
getTopForeignHoldings()         // Top 20 stocks
getForeignCategoryHoldings()    // By sector
```

### "Find investment opportunities"
```javascript
getStockPERatios()      // Value stocks (low P/E)
getNewListings()        // New IPOs
getETFRanking()         // Popular ETFs
```

### "Technical analysis data"
```javascript
getStockDaily()         // OHLC for all stocks
getIndexHistory()       // Historical TAIEX
getMonthlyStats()       // Long-term trends
```

## 📝 Search Function Parameters

```javascript
searchStock(query, dataType)
```

| Parameter | Type | Options | Example |
|-----------|------|---------|---------|
| `query` | string | Stock code or name | "2330", "TSMC", "台積電" |
| `dataType` | string | "daily", "peratio", "monthly" | "daily" (default) |

## 🔄 Data Update Schedule

| Time (TST) | Updated Data |
|------------|--------------|
| **09:00-13:30** | Real-time during market hours |
| **Every 5 sec** | getFiveSecondStats |
| **14:30** | Daily closing data |
| **15:00** | Foreign holdings update |
| **Monthly** | Monthly statistics |

## 💡 Pro Tips

1. **Batch Analysis**: Combine tools for comprehensive view
   ```
   getMarketIndex() + getTop20Volume() + getForeignHoldings()
   ```

2. **Value Screening**: Find undervalued stocks
   ```
   getStockPERatios() - Look for low P/E + high dividend yield
   ```

3. **Momentum Trading**: Identify trending stocks
   ```
   getTop20Volume() + getMarginTrading() + getFiveSecondStats()
   ```

4. **Foreign Following**: Track smart money
   ```
   getTopForeignHoldings() + getForeignCategoryHoldings()
   ```

5. **Market Timing**: Plan entries/exits
   ```
   getIndexHistory() + getHolidaySchedule() + getMarketIndex()
   ```

## 🌐 API Response Format

All tools return JSON with this structure:
```json
{
  "content": [{
    "type": "text",
    "text": "[JSON data array]"
  }]
}
```

## ⚡ Performance Notes

- **Limited to 100 records**: Large datasets (daily stocks, P/E ratios) return first 100 items
- **Full data**: Indices, top 20s, and specialized queries return complete data
- **Search optimized**: Use `searchStock()` for specific stocks instead of filtering full datasets

## 🔗 Quick Examples

### Get Everything About One Stock
```javascript
// For Taiwan Semiconductor (2330)
searchStock("2330", "daily")     // Today's trading
searchStock("2330", "peratio")   // Valuation
searchStock("2330", "monthly")   // Monthly trend
```

### Daily Market Snapshot
```javascript
getMarketIndex()          // How's TAIEX?
getTop20Volume()          // What's hot?
getTopForeignHoldings()   // What are foreigners buying?
getMarginTrading()        // Leverage levels
```

### Find New Opportunities
```javascript
getNewListings()          // Fresh IPOs
getStockPERatios()        // Value plays
getETFRanking()           // Popular funds
```