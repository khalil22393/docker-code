const express = require("express")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 4000;
const app = express();
const DB_USER = 'root'
const DB_PSW = 'example'
const DB_HOST = '172.28.0.2'
const URI = `mongodb://${DB_USER}:${DB_PSW}@${DB_HOST}:27017`;
mongoose.connect(URI).then(() => console.log('connect')).catch((err) => console.log('can not',err));
app.get('/',(req, res) => res.send('<h1>--222-Hello mr.Khalil-444--</h1>'))
app.listen(PORT,() => console.log(`App is app and running on port ${PORT}`))