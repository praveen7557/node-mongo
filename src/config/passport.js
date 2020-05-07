const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');
const config = require('./config');
const { User } = require('../models');

const jwtOptions = {
  secretOrKey: config.jwt.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload, done) => {
  try {
    const user = await User.findById(payload.sub);
    if (!user) {
      return done(null, false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

const googleStrategy = new GoogleStrategy(
  {
    clientID: config.google.clientId,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.callbackUrl,
  },
  async (token, refreshToken, profile, done) => {
    return done(null, {
      profile,
      token,
    });
  }
);

const facebookStrategy = new FacebookStrategy(
  {
    clientID: config.facebook.clientId,
    clientSecret: config.facebook.clientSecret,
    callbackURL: config.facebook.callbackUrl,
    profileFields: ['id', 'emails', 'name'],
  },
  async (token, refreshToken, profile, done) => {
    return done(null, {
      profile,
      token,
    });
  }
);

module.exports = {
  jwtStrategy,
  googleStrategy,
  facebookStrategy,
};
