const express = require('express')
const router2 = express.Router();

router2.get('/userInfo', (req, res) => {
  res.json({
    age: 20,
    gender: 'male',
    hobbies: ['swimming'],
  })
});

module.exports = router2;
