/* Module for handling specific requests/routes for stock data */
const provider = require('./data-provider.js');
const stocks = provider.data;
// return all the stocks when a root request arrives
const handleAllStocks = (app) => {

};
// return just the requested stock
const handleSingleSymbol = (app) => {
    const matches = stocks.filter(obj =>
        symbolToFind === obj.symbol);
        // return the matching stock
        if (matches.length > 0) {
        resp.json(matches);
        } else {
        resp.json(jsonMessage(`Symbol ${symbolToFind} not found`));
        } 
};
// return all the stocks whose name contains the supplied text
const handleNameSearch = (app) => {
     // return the matching stocks
 if (matches.length > 0) {
    resp.json(matches);
    } else {
    resp.json(jsonMessage(
    `No symbol matches found for ${substring}`));
    } 
};

module.exports = {
 handleAllStocks,
 handleSingleSymbol,
 handleNameSearch
}; 

// error messages need to be returned in JSON format
const jsonMessage = (msg) => {
    return { message : msg };
   }; 