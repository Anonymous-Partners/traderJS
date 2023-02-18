# traderJS
Lightweight common nodejs module for placing orders through Tradovate's API.
# Installaton
1) Download the trader.js file and place it in your project directory
2) Import trader.js into any project files
3) Happy coding!
# Usage
```
//Import traderJS
const traderJS = require("./trader.js");

traderJS.placeOrder([TrailingStop side (Buy/Sell)], [TrailingStop price (Number)], [Symbol], [Order side (Buy/Sell], [Quantity], [accountSpec], [accountId], [Limit order price (Number)]);
```
# Features
+ Lightweight
+ Place limit orders with a trailingstop
+ Don't clutter up code
