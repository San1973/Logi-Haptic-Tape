# System Architecture: Logi Haptic-Tape

## 1. High-Level System Design
The system operates as a low-latency feedback loop between the browser's DOM and the hardware's tactile drivers.



## 2. Technical Components

### A. Data Ingestion (The Shim)
* **Language:** TypeScript
* **Function:** Hooks into TradingView’s WebSocket stream. It filters raw tick data and pushes serialized JSON packets to the local bridge.

### B. The Local Bridge (Socket.io)
* **Role:** Acts as the "Traffic Controller." It prevents the C# plugin from being blocked by I/O tasks. 

### C. Logic Engine (C# / .NET 8)
* **Volatility Mapping:** Calculates intensity ($I$) based on the standard deviation of price over a rolling window:
    $$I = \min\left(1, \frac{\sigma_{60s}}{\text{Threshold}}\right)$$
* **Haptic Interface:** Calls `Logi.Haptics.PlayWaveform` to trigger transient pulses on the MX Master 4.

### D. MX Creative Console Controller (The Display & Dial)
* **LCD Keypad Matrix:** * **Sentiment Mapping:** The plugin translates the "Fear & Greed" index into an RGB array. 
    * **Dynamic Rendering:** Uses the `Logi.LCD.DrawImage` and `Logi.LCD.SetKeyColor` methods to update the 3x3 grid. 
    * **Frame Rate:** Optimized at 15FPS to ensure smooth color transitions without saturated bus bandwidth.
* **The Analog Dial:** * **Input Handling:** Captures `DialRotateEvent`. 
    * **Haptic Detents:** Dynamically enables/disables physical detent resistance via the SDK to simulate "notches" for every 1% price movement on the chart.

### E. Storage & Security
* **Database:** SQLite handles local user profiles and haptic intensity preferences.
* **Security:** API keys for broker execution are stored in the **Logi Options+ Secure Vault**.

## 3. Data Flow Metrics
* **Sampling Rate:** 100Hz (10ms intervals).
* **Hardware Response Time:** ~12-15ms (End-to-End).
* **Resource Footprint:** < 45MB RAM / < 1.5% CPU.
