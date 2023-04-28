module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'requirejs'],
    plugins: [
      require('karma-jasmine'),
      require('karma-jasmine-html-reporter'),
      require('karma-requirejs')
    ],
    files: [
      { pattern: "dist/**/*.js", included: false},
      "specs/karma-test-main.js"
    ],
    client: {
      jasmine: {
        
      }
    },
    reporters: ['kjhtml']
  });
};