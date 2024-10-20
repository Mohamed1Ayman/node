const express = require('express')
const app = express()
const port = 300

app.get('/', (req, res) => {
  res.sendFile("./views/modle.html", {root: __dirname})
})

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})