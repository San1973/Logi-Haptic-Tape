// Logic

const io = require('socket.io')(3000, {
  cors: { origin: "*" } // Allows the browser extension to connect
});

console.log("Logi Haptic-Tape Bridge active on port 3000...");

io.on('connection', (socket) => {
  // 1. Listen for data coming FROM the TradingView Browser Extension
  socket.on('MARKET_DATA', (data) => {
    /* Data format: { price: 50200, volatility: 0.85, sentiment: "bullish" } 
    */
    
    // 2. Broadcast it INSTANTLY to the C# Logitech Plugin
    io.emit('HARDWARE_TRIGGER', data);
    
    console.log(`Pulse sent: Volatility ${data.volatility}`);
  });
});
