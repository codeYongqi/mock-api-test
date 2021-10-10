const axios = require('axios').default;
const express = require('express');
const app1 = express()
const port = 3000

app1.use(express.json());

const user = {
  getUserInfo: function () {
    return new Promise((resolve, reject) => {
      axios
      .get('http://localhost:5000/userInfo')
      .then(function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        reject(err);
      })
    })
  }
}

app1.get('/', async (req, res) => {
  if (
    req.body.name === 'admin' 
    && req.body.passwd === 'root'
  ) {
    const userInfo = await user.getUserInfo();
    res.json({
      userInfo  
    })
  } else {
    res.json({
      msg: 'wrong username or password'
    })
  }
})

app1.listen(port, () => {
  console.log(`Example app1 listening at http://localhost:${port}`)
})

module.exports = { app1, user };

