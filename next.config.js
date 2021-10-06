const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['unavatar.io', 'res.cloudinary.com'],
  },
  pwa: {
    dest: '.next',
    runtimeCaching,
  },
});
