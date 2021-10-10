const express = require('express')
const app2 = express();
const port = 5000

app2.use(express.json());

app2.get('/userInfo', (req, res) => {
  res.json({
    age: 20,
    gender: 'male',
    hobbies: ['swimming'],
  })
});

app2.listen(port, () => {
  console.log(`Example app2 listening at http://localhost:${port}`)
})

module.exports = app2;
