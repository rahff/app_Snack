const path = require('path');

module.exports = {
    dbUrl: "mongodb+srv://rahff:knYD8qcU8fDcfQnS@cluster0.8uowz.mongodb.net/ardev?retryWrites=true&w=majority",
    PORTHTTP: 80,
    PORTHTTPS:443,
    key: "/etc/letsencrypt/live/www.ardevelopment.website/privkey.pem",
    cert: "/etc/letsencrypt/live/www.ardevelopment.website/fullchain.pem",
    client: "tacosnack.site",
    whiteList: ['https://www.tacosnack.site', "http://www.tacosnack.site"]
}