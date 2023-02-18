let accessToken = require('./accessToken.json').accessToken
var requestModule = require("request");

exports.placeOrder = function orderEntry(trailingStopAction, trailingStopPrice, symbol, orderAction, quantity, accountSpec, accountId, price) {
    let oso = {
        "action": trailingStopAction,
        "orderType": "TrailingStop",
        "stopPrice": trailingStopPrice,
    }
    
    let initial = {
        "accountSpec": accountSpec,
        "accountId": accountId,
        "symbol": symbol,
        "action": orderAction,
        "orderQty": quantity,
        "orderType": "Limit",
        "price": price,
        "isAutomated": true,
        "bracket1": oso
    }

    let options = {
        url: "https://live.tradovateapi.com/v1/order/placeOSO",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify(initial)
    };
     
    requestModule.post(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Tradovate Status: ${res.statusCode}`);
        console.log(body);
    });
};