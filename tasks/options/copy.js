module.exports = function(config) {
  return {
    // copy source to temp, we will minify in place for the dist build
    everything_but_less_to_temp: {
      cwd: '<%= srcDir %>',
      expand: true,
      // S4HC: Original line
      // src: ['**/*', '!**/*.less', '!config.js'],
      src: ['**/*', '!**/*.less', '!img/psd/*'],
      dest: '<%= tempDir %>'
    }
  };
};