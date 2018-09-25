// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const config = require('./config/index');
class Coin {
    constructor(http, apiKey) {
        this.apiKey = apiKey;
        this.http = http;
    }

    async run() {
        return await this.http
            .get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
                method: 'get',
                params: {
                    start: 1,
                    limit: 10,
                    convert: 'USD',
                },
                headers: {
                    'X-CMC_PRO_API_KEY': this.apiKey,
                },
            });
    }   
}
module.exports = new Coin(require('axios'), config.coinMarketCapApiKey);