const express = require("express")
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const app = express();


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));



mongoose.connect('mongodb://127.0.0.1:27017/api', {
    useNewUrlParser: true
})


const articleSchema = new mongoose.Schema({
    name: String,
    title: String
});
const Mymodel = mongoose.model('items', articleSchema)

app.get('/articels', function(req, res) {
Mymodel.find({})
    res.send(R)
})




app.listen(3000, function() {
    console.log("server is ready!!!!!!")
})