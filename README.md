# ApexLoop OS · Autonomous Agent Payment Platform

> Production-grade implementation of **Google AP2 (Agent Payments Protocol)** cryptographic mandates and **x402 (HTTP 402 Payment Required)** autonomous machine-to-machine settlement on **Base Sepolia L2**.

---

## 🌟 Key Capabilities

1. **Google AP2 Intent & Cart Mandates**:
   - Living cryptographic policy bounds (W3C Verifiable Credentials / EIP-712).
   - Strict transaction ceilings (e.g. ₹5,000 cap).
   - Over-budget items (e.g. Nike Alphafly 3 @ ₹22,795) are automatically blocked by the policy circuit breaker before any purchase request is signed.

2. **x402 Protocol Settlement**:
   - Standard HTTP 402 handshake between autonomous client agents and merchant endpoints.
   - Dual-rail settlement:
     - **Base Sepolia (ChainID: 84532)**: Real on-chain ECDSA transactions broadcast directly to the Ethereum L2 blockchain via `ethers.js` with verifiable BaseScan explorer receipts.
     - **Simulated EVM Engine**: Sub-second cryptographic proof generation for zero-latency presentation environments.

3. **Live Web Reconnaissance**:
   - Integrated with DuckDuckGo real-time scraping to evaluate live vendor catalogs and reviews without static assumptions.

4. **Live CoinGecko Crypto Pricing**:
   - Continuous real-time ETH/INR and ETH/USD rate synchronization.

5. **Multi-Theme Interface**:
   - Instant toggle between **Light Theme** (clean academic / high-contrast presentation mode) and **Dark Mode** (fintech terminal).

---

## 🚀 Live Demos

- **Cloudflare Global Live Tunnel**: [ApexLoop OS on Cloudflare](https://bumper-asylum-boc-consequence.trycloudflare.com)
- **GitHub Pages Static Showcase**: [ApexLoop OS on GitHub Pages](https://aswathas.github.io/apex-agent-platform/)

---

## 🛠 Local Setup & Installation

```bash
git clone https://github.com/aswathas/apex-agent-platform.git
cd apex-agent-platform
npm install
node server.js
```

Open `http://localhost:3000` in your browser.

---

## 📜 Agent Public Signer

- **Address**: `0x64367e3e4A0A7bDb0A05b7286fea5f276F0c2Bf4`
- **Network**: Base Sepolia (`https://sepolia.base.org`)
- **Explorer**: [BaseScan Contract/Address](https://sepolia.basescan.org/address/0x64367e3e4A0A7bDb0A05b7286fea5f276F0c2Bf4)
