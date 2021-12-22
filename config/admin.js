module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7e7046511de7d105ccc765df4178aa53'),
  },
});
