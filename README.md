# 📈 Logi Haptic-Tape: The Tactile Trading Terminal

![Logi Haptic-Tape Dashboard](https://path-to-your-screenshot.png)

> **"Feel the Breakout. Rule the Tape."**
> A professional-grade, full-stack integration for the Logitech MX Creative Ecosystem, transforming market data into physical intuition.

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

## 🛠️ Setup
1.  **Plugin:** Install `LogiHapticTape.lplugin` via Logi Options+.
2.  **Bridge:** Run the local Node.js bridge (`npm start`).
3.  **Extension:** Load the "Logi-Tape" extension in Chrome/Edge.
