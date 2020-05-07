const express = require('express');
const passport = require('passport');
const validate = require('../../middlewares/validate');
const authValidation = require('../../validations/auth.validation');
const authController = require('../../controllers/auth.controller');

const router = express.Router();

router.post('/register', validate(authValidation.register), authController.register);
router.post('/login', validate(authValidation.login), authController.login);
router.post('/refresh-tokens', validate(authValidation.refreshTokens), authController.refreshTokens);
router.post('/forgot-password', validate(authValidation.forgotPassword), authController.forgotPassword);
router.post('/reset-password', validate(authValidation.resetPassword), authController.resetPassword);
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'email'],
  })
);
router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/',
  }),
  authController.googleLogin
);
router.get(
  '/facebook',
  passport.authenticate('facebook', {
    scope: ['email'],
  })
);
router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/',
  }),
  authController.googleLogin
);

module.exports = router;
