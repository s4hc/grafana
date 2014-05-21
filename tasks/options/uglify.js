module.exports = function(config) {
  return {
    dest: {
      expand: true,
        // S4HC AJ: Temporary added '!config.js'
      src: ['**/*.js','!config.js', '!config.sample.js', '!app/dashboards/*.js', '!app/dashboards/**/*.js',],
      dest: '<%= destDir %>',
      cwd: '<%= destDir %>',
      options: {
        quite: true,
        compress: true,
        preserveComments: false,
        banner: '<%= meta.banner %>'
      }
    }
  };
};