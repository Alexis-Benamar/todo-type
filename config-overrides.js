const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: { 
      '~components': path.resolve(__dirname, 'src/components'),
      '~providers': path.resolve(__dirname, 'src/providers'),
      '~styles': path.resolve(__dirname, 'src/styles'),
    },
  };
  return config;
};