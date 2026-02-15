# System Architecture: Logi Haptic-Tape

## 1. High-Level Logic Flow
`TradingView Data -> WebSocket Bridge -> C# Plugin Logic -> Logi Hardware APIs`

## 2. Component Breakdown

### A. Sentiment-Sync Engine (MX Creative Console)
* **Logic:** The plugin calculates a `SentimentScore` $(\frac{BuyVolume}{SellVolume})$ and the Fear & Greed Index.
* **Implementation:** * The **Logi LCD SDK** maps the score to a HEX color gradient.
    * **Bullish (>60):** Emerald Green (#50C878)
    * **Bearish (<40):** Crimson Red (#DC143C)
    * Values are pushed to the 3x3 Keypad every 500ms for a "breathing" heatmap effect.

### B. Haptic Response Layer (MX Master 4)
* **Volatility Mapping:** Market volatility $(\sigma)$ is converted into haptic frequency. 
* **Execution Feedback:** Uses the `Logi.Haptics.Transient` call to provide a mechanical "click" sensation upon order confirmation, reducing the need for visual UI verification.

### C. The Actions Ring (UI/UX)
* **State Awareness:** Utilizing `Logi.Actions.Overlay`, the Ring changes its "Bubbles" based on the current TradingView tool (e.g., if Fibonacci is selected, the Ring surfaces level-adjustment controls).

## 3. Data Flow Diagram
1. **Ingest:** Chrome Extension scrapes live order book depth.
2. **Analyze:** Local C# Service determines trend strength.
3. **Display:** - **Visual:** Actions Ring pops up with BUY/SELL triggers.
    - **Peripheral:** Creative Console keys shift color (Sentiment-Sync).
    - **Tactile:** MX Master 4 vibrates on price-cross alerts.

## 4. Performance Metrics
* **End-to-End Latency:** < 15ms (from WebSocket event to Hardware response).
* **CPU Overhead:** < 1.2% on standard M-series or Intel i7 processors.
