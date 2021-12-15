const path = require('path');
module.exports = {
    dbUrl: "mongodb+srv://rahff:knYD8qcU8fDcfQnS@cluster0.8uowz.mongodb.net/ardev?retryWrites=true&w=majority",
    PORTHTTP: 3000,
    PORTHTTPS:3001,
    key: path.join(__dirname, "../ssl/local.key"),
    cert: path.join(__dirname, "../ssl/local.crt"),
    client: "localhost:3000",
    whiteList: ['http://localhost:3000', "https://localhost:3001"]
}

