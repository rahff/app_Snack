
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const env = require(`./env/${process.env.NODE_ENV}`)
app.use(cors({
  origin: env.whiteList,
   methods:"POST,GET,DELETE,PATCH",
   optionsSuccessStatus: 200
}));

require(`./database/app1/index`);
const indexRouter = require('./routes/app1/index');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './dist')));

app.use("/api", indexRouter);

app.get('*',(req, res) =>{
  res.sendFile(path.join(__dirname, './dist/index.html'))
})

module.exports = app;
