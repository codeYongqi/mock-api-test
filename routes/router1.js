const axios = require('axios').default;
const express = require('express');
const router1 = express.Router();

const user = {
  getUserInfo: function () {
    return new Promise((resolve, reject) => {
      axios
      .get('http://localhost:3000/userInfo')
      .then(function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        reject(err);
      })
    })
  }
}

router1.post('/', async (req, res) => {
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

module.exports = { router1, user };

