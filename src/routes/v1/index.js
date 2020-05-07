const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');

const router = express.Router();

router.get('/', (req, res) =>
  res.send({
    msg: 'Success',
  })
);
router.use('/auth', authRoute);
router.use('/users', userRoute);

module.exports = router;
