const jwtConfig = {
  accessToken: {
    secret: process.env.ACCESS_TOKEN_SECRET || "your_access_token_secret",
    expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || "1h", // 1 hour
  },
  refreshToken: {
    secret: process.env.REFRESH_TOKEN_SECRET || "your_refresh_token_secret",
    expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN || "7d", // 7 days
  },
  resetToken: {
    secret: process.env.RESET_TOKEN_SECRET || "your_reset_token_secret",
    expiresIn: process.env.RESET_TOKEN_EXPIRES_IN || "1h", // 1 hour
  },
};

export default jwtConfig;
