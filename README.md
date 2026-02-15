# 🖋️ Logi Synapse: Feel the Market. Trade the Pulse.

**Logi Synapse** is a surgical-grade Mixed Reality (MR) workstation that transforms the **Logitech MX Ink** into a bio-haptic sensor. By bridging the gap between high-frequency financial data and physical sensation, we enable traders to literally **feel** market liquidity and commit to trades with **physical intent.**

---

## 🚀 Overview

In high-stakes trading, "one-click" interfaces lead to impulsive decisions, "fat-finger" errors, and emotional burnout. **Logi Synapse** introduces **"Mindful Friction"**—a system where the market has physical weight, and every trade is a deliberate, pressured act. By utilizing the spatial precision of the MX Ink, we move finance from 2D glass screens into a 3D tactile workspace.

---

## ✨ Key Features

* **The Synaptic Gate (Pressure-Locked Execution):** A physical fail-safe where a trade only executes when a user applies a specific analog pressure curve ($P \ge 85\%$) against the MX Mat.
* **Tactile Liquidity Mapping:** Real-time Order Book depth is translated into haptic frequencies ($60Hz$ to $200Hz$). Feel "resistance" when moving through sell walls and "viscosity" in high-liquidity zones.
* **6DoF Spatial Charting:** Use the physical desk as a stabilizing datum to draw 3D technical analysis and annotations with sub-millimeter precision.
* **Risk Pulse:** Biological feedback loop that triggers irregular haptic vibrations if a trade exceeds pre-set risk-to-reward parameters.

---

## 🛠️ Technical Stack

| Category | Technology |
| :--- | :--- |
| **Game Engine** | Unity 2022.3 LTS |
| **Primary Language** | C# (Frontend), Python (Mock Data Server) |
| **Platforms** | Meta Quest 3 / Pro (Meta Horizon OS V69+) |
| **Hardware** | Logitech MX Ink + Logitech MX Mat |
| **SDKs** | Logitech MX Ink OpenXR SDK, Meta XR Core (V68.0.2+), Meta Haptics SDK |
| **APIs/Data** | WebSockets (L2 Market Depth), Finnhub, Polygon.io |
| **Cloud/DB** | AWS Lambda (Auth), MongoDB Atlas (Spatial Snapshots) |

---

## 🏗️ How We Built It

1. **Sensory Translation Layer (STL):** We developed a custom C# framework to map "Order Density" to haptic amplitude and "Market Volatility" to frequency modulation.
2. **Pressure-Gate Logic:** Leveraged the MX Ink's analog tip sensors to create a non-linear trigger. The system treats the MX Mat as a "Safety Lock"—execution only occurs upon a conscious physical "stamp" action.
3. **Spatial Anchoring:** Utilized **Meta Passthrough** and **MRUK (Mixed Reality Utility Kit)** to anchor 3D "Liquidity Mountains" to the user's real-world desk, turning the office into a live war room.

---

## 🚧 Challenges We Ran Into

* **Haptic Fatigue:** Continuous vibration causes sensory numbness. We engineered a "Proximity-Pulse" algorithm to provide tactile feedback only when the stylus is actively "piercing" a data zone.
* **Input-to-Data Latency:** Matching a haptic "thump" to millisecond price movements required deep optimization of WebSocket buffers and OpenXR frame-timing.
* **Stability:** Ensuring that 3D drawings remained persistent and didn't "drift" from the physical surface of the MX Mat during high-intensity sessions.

---

## 🏆 Accomplishments That We're Proud Of

* **Physicalizing Data:** Successfully turning abstract numbers into a tangible "viscosity" that gives traders a "gut feeling" based on real math.
* **Zero-Error Interface:** Proving that hardware-level friction acts as a "Biological Circuit Breaker" to prevent panic-selling.
* **Design-to-Data Pipeline:** Creating a seamless flow where a high-end consumer stylus (MX Ink) feels like a professional-grade medical instrument.

---

## 💡 What We Learned

We learned that **Friction is a Feature.** In an era of frictionless addiction, adding physical resistance creates **Intentionality.** We also discovered that haptic feedback acts as a "cognitive offloader," freeing up the trader's visual focus by allowing their hands to "read" the market depth.

---

## 🗺️ Roadmap & Next Steps

* **Bio-Adaptive Resistance:** Linking the "Synaptic Gate" to heart-rate sensors; if the system detects high stress, it increases the physical pressure required to trade.
* **The Multi-User "War Room":** Shared MR environments where teams can "touch" and annotate the same market volume in real-time.
* **Institutional Integration:** Direct API partnerships with brokers like **Zerodha** and **Groww** for native MX Ink support.

---

## 📝 Installation

1. **Clone the Repository:** `git clone https://github.com/username/logi-synapse.git`
2. **Unity Setup:** Open project in Unity 2022.3 LTS. Import the **Logitech MX Ink Unity Package**.
3. **API Keys:** Add your Polygon.io/Finnhub API keys to the `Config.js` file.
4. **Build:** Set platform to Android (Quest) and ensure "Passthrough" is enabled in the OVRManager settings.

---

**Logi Synapse: Rewiring the market’s pulse into your fingertips.**
