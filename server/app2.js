const express = require('express')
const app = express()
const port = 5000

app.use(express.json());
app.get('/', (req, res) => {
  res.json({
    msg: 'hello, server2',
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;
