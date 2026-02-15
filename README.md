# 📈 Logi Haptic-Tape: The Tactile Trading Terminal

![Logi Haptic-Tape Dashboard](https://path-to-your-screenshot.png)

> **"Feel the Breakout. Rule the Tape."**
> A professional-grade, multisensory integration for the Logitech MX Creative Ecosystem, transforming abstract market data into physical intuition.

---

## 💡 The Project Idea
**Logi Haptic-Tape** is designed to solve "Visual Overload" in high-stakes trading. Traditionally, traders rely 100% on their eyes to monitor price, volume, and sentiment. This creates a cognitive bottleneck.

Our solution offloads critical data to the **somatosensory system** (touch) and **peripheral vision** (color):
* **Touch:** Feel the "weight" of the market. Through the MX Master 4’s HD Haptics, volatility isn't just a line on a chart—it's a physical vibration in your palm.
* **Sense:** The MX Creative Console acts as a "Market Mood" barometer. By glowing in sync with live sentiment, it allows you to sense if the market is "Fearful" or "Greedy" without looking away from the candles.

By bridging the sensory gap, Logi Haptic-Tape allows for faster reaction times and higher emotional composure during volatile breakouts.

---

## 🚀 The Tech Stack
* **Logic:** C# / .NET 8 (Logitech Actions SDK)
* **Data Ingestion:** TypeScript (Browser Shim) via TradingView WebSocket API
* **Communication:** Socket.io (Localhost WebSocket Bridge)
* **Infrastructure:** Node.js, Logi Options+ Platform, SQLite (Local Profiling)
* **Telemetry:** Alternative.me Fear & Greed API & Binance API

## ✨ Key Features
* **Haptic Tape Reading:** Real-time volatility mapped to the MX Master 4 HD haptic engine.
* **Sentiment-Sync HUD:** 3x3 LCD heatmap on the MX Creative Console powered by the **Logi LCD SDK**.
* **Flick-to-Trade:** Sub-millisecond execution via the **Logi Overlay API**.
* **Precision Scrubbing:** Navigating historical charts using the Analog Dial with haptic detents.

## 🛠️ Setup
1.  **Plugin:** Install `LogiHapticTape.lplugin` via Logi Options+.
2.  **Bridge:** Run the local Node.js bridge (`npm start`).
3.  **Extension:** Load the "Logi-Tape" extension in Chrome/Edge.
