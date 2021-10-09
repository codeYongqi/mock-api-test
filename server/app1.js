const axios = require('axios')
const express = require('express');
const app = express()
const port = 3000

app.use(express.json());
app.get('/', (req, res) => {

  let res2;

  (async () => {
    res2 = await axios.get('http://localhost:5000/');
  res.send({
    res1: 'res1',
    res2: res2.data
  })
  })();

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})