const express  = require('express')
const mongoose = require('mongoose')
const path = require('path')

const app = express();
const port = process.env.PORT || 5500;
mongoose.connect('mongodb://localhost:27017/Shop').then(
  console.log(`🟢 Mongo Connected`)
).catch(()=>{
  console.error()
})

app.use(express.static(__dirname + "/public"));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use('/js', express.static(__dirname + 'public/js'))

app.set('views', './views');
app.set('view engine', 'ejs');

app.get("/", (req,res)=>{
  res.render("index")
})

app.get("/config", (req,res)=>{
  res.render("config")
})

app.get("*", (req,res)=>{
  res.render("404")
})


app.listen(process.env.PORT || 5500, () => {
  console.log(`🟢 Server running http://localhost:${port}`);
});
