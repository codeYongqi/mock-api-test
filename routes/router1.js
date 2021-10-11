const got = require('got');
const express = require('express');
const router1 = express.Router();

const user = {
  getUserInfo: function () {
    return new Promise((resolve, reject) => {
      got('http://localhost:3000/userInfo')
      .then(function (response) {
        resolve(response.body)
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
    let userInfo = await user.getUserInfo();
		userInfo = JSON.parse(userInfo);

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

