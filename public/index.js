const express = require('express')
const path = require("path")
const app = express()
const port = 3000

app.get('/css', (req, res) => {
  const filePath = path.join(__dirname,"css", "style.css")
  res.sendFile(filePath)
})

app.get('/', (req, res) => {
    const filePath = path.join(__dirname,"html", "index.html") 
    res.sendFile(filePath)
})

app.get('/sobre', (req, res) => {
  const filePath = path.join(__dirname,"html", "sobre.html") 
  res.sendFile(filePath)
})

app.get('/personalize', (req, res) => {
  const filePath = path.join(__dirname,"html", "personalize.html") 
  res.sendFile(filePath)
})

app.get('/LOGO', (req, res) => {
  const filePath = path.join(__dirname,"img", "NOVALOGO.png") 
  res.sendFile(filePath)
})

app.get('/favicon.ico', (req, res) => {
  const filePath = path.join(__dirname, 'img', 'icon.png');
  res.sendFile(filePath);
});

app.get('/img/gifaa.gif', (req, res) => {
  const filePath = path.join(__dirname, 'img', 'gifaa.gif');
  res.sendFile(filePath);
});

app.get('/fonte/TruenoBdIt.otf', (req, res) => {
  const filePath = path.join(__dirname, 'fonte', 'TruenoBdIt.otf');
  res.sendFile(filePath);
});

app.get('/JDMp', (req, res) => {
  const filePath = path.join(__dirname,"img", "projectJDM.png") 
  res.sendFile(filePath)
})

app.get('/s13site', (req, res) => {
  const filePath = path.join(__dirname,"img", "s13site.png") 
  res.sendFile(filePath)
})

app.get('/POLAROID2.png', (req, res) => {
  const filePath = path.join(__dirname,"img", "POLAROID 2.png") 
  res.sendFile(filePath)
})

app.get('/evox2.png', (req, res) => {
  const filePath = path.join(__dirname,"img", "evox2.png") 
  res.sendFile(filePath)
})

app.get('/projectJDMlogoloc.png', (req, res) => {
  const filePath = path.join(__dirname,"img", "projectJDMlogoloc.png") 
  res.sendFile(filePath)
})

app.get('/subaru.png', (req, res) => {
  const filePath = path.join(__dirname,"img", "subaru.png") 
  res.sendFile(filePath)
})

app.get('/POLAROID.png', (req, res) => {
  const filePath = path.join(__dirname,"img", "POLAROID.png") 
  res.sendFile(filePath)
})

app.get('/POLAROID3.png', (req, res) => {
  const filePath = path.join(__dirname,"img", "POLAROID 3.png") 
  res.sendFile(filePath)
})

app.get('/img/wallcelular.jpg', (req, res) => {
  const filePath = path.join(__dirname,"img", "wallcelular.jpg") 
  res.sendFile(filePath)
})

app.get('/script.js', (req, res) => {
  const filePath = path.join(__dirname,"js", "script.js") 
  res.sendFile(filePath)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})