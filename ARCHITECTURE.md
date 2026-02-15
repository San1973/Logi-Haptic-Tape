# System Architecture: Logi Haptic-Tape

## 1. High-Level System Design
The system operates as a low-latency feedback loop between the browser's DOM and the hardware's tactile drivers.



## 2. Technical Components

### A. Data Ingestion (The Shim)
* **Language:** TypeScript
* **Function:** Hooks into TradingView’s WebSocket stream. It filters raw tick data and pushes serialized JSON packets to the local bridge.

### B. The Local Bridge (Socket.io)
* **Role:** Acts as the "Traffic Controller." It prevents the C# plugin from being blocked by I/O tasks. 
* **Performance:** Maintains a steady < 5ms internal latency.

### C. Logic Engine (C# / .NET 8)
* **Volatility Mapping:** Calculates intensity $(I)$ based on the standard deviation of price over a rolling window:
    $$I = \min\left(1, \frac{\sigma_{60s}}{\text{Threshold}}\right)$$
* **Haptic Interface:** Calls `Logi.Haptics.PlayWaveform` to trigger transient pulses on the MX Master 4.
* **LCD Buffer Management:** Manages the RGB state of the MX Creative Console's 3x3 grid based on sentiment scores.

### D. Storage & Security
* **Database:** SQLite handles local user profiles and haptic intensity preferences.
* **Security:** API keys for broker execution are stored in the **Logi Options+ Secure Vault**, ensuring hardware-level encryption.

## 3. Data Flow Metrics
* **Sampling Rate:** 100Hz (10ms intervals).
* **Hardware Response Time:** ~12-15ms (End-to-End).
* **Resource Footprint:** < 45MB RAM / < 1.5% CPU.
