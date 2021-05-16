export const development = {
  MONGODB_URI: process.env.MONGODB_URI,

  jwt: {
    JWT_AUTH_SECRET: process.env.JWT_AUTH_SECRET,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  },
};
