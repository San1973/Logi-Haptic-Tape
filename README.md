# 📈 Logi Haptic-Tape: The Tactile Trading Terminal

> **"Feel the Breakout. Rule the Tape."**
> A professional-grade, multisensory integration for the Logitech MX Creative Ecosystem, transforming abstract market data into physical intuition.

---

## 💡 The Project Idea
**Logi Haptic-Tape** is designed to solve "Visual Overload" in high-stakes trading. Traditionally, traders rely 100% on their eyes to monitor price, volume, and sentiment. This creates a cognitive bottleneck.

Our solution offloads critical data to the **somatosensory system** (touch) and **peripheral vision** (color):
* **Touch:** Feel the "weight" of the market. Through the MX Master 4’s HD Haptics, volatility isn't just a line on a chart—it's a physical vibration in your palm.
* **Sense:** The MX Creative Console acts as a "Market Mood" barometer. By glowing in sync with live sentiment, it allows you to sense if the market is "Fearful" or "Greedy" without looking away from the candles.

---

## 🚀 The Tech Stack
* **Logic:** C# / .NET 8 (Logitech Actions SDK)
* **Data Ingestion:** TypeScript (Browser Shim) via TradingView WebSocket API
* **Communication:** Socket.io (Localhost WebSocket Bridge)
* **Infrastructure:** Node.js, Logi Options+ Platform, SQLite (Local Profiling)

## ✨ Key Features

### 🎛️ MX Creative Console Integration
* **Sentiment Heatmap:** The 3x3 LCD keypad displays a real-time color gradient (Red to Green) based on the **Fear & Greed Index** and volume delta.
* **Live Telemetry:** Contextual keys display live RSI, MACD, and P&L data directly on the hardware.
* **Analog Timeline Scrubbing:** The Dial allows for millisecond-precision chart navigation with **Adaptive Haptic Detents** that resist movement as you approach live price action.

### 🖱️ MX Master 4 Haptics
* **Tape Reading:** Real-time price volatility $(\sigma)$ mapped to variable haptic frequencies.
* **Support/Resistance "Snapping":** Feel a tactile "click" when your cursor crosses major price levels.

### ⭕ Actions Ring HUD
* **Flick-to-Trade:** Sub-millisecond execution via a transparent, on-screen overlay.
* **Contextual Tools:** Dynamic bubble menus that change based on your active TradingView tool.

## 🛠️ Setup
1.  **Plugin:** Install `LogiHapticTape.lplugin` via Logi Options+.
2.  **Bridge:** Run the local Node.js bridge (`npm start`).
3.  **Extension:** Load the "Logi-Tape" extension in Chrome/Edge.
