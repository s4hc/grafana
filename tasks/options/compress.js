module.exports = function(config) {
  return {
    zip: {
      options: {
        archive: '<%= tempDir %>/<%= pkg.name %>-latest.zip'
      },
      files : [
        {
          expand: true,
          cwd: '<%= destDir %>',
          src: ['**/*'],
          dest: '<%= pkg.name %>/',
        },
        {
          expand: true,
          dest: '<%= pkg.name %>/',
          src: ['LICENSE.md', 'README.md', 'NOTICE.md'],
        }
      ]
    },
    tgz: {
      options: {
        archive: '<%= tempDir %>/<%= pkg.name %>-latest.tar.gz'
      },
      files : [
        {
          expand: true,
          cwd: '<%= destDir %>',
          src: ['**/*'],
          dest: '<%= pkg.name %>/',
        },
        {
          expand: true,
          src: ['LICENSE.md', 'README.md', 'NOTICE.md'],
          dest: '<%= pkg.name %>/',
        }
      ]
    },
    zip_release: {
      options: {
        archive: '<%= targetDir %>/<%= pkg.name %>-<%= pkg.version %>.zip'
      },
      files : [
        {
          expand: true,
          cwd: '<%= destDir %>',
          src: ['**/*'],
          dest: '<%= pkg.name %>-<%= pkg.version %>/',
        },
        {
          expand: true,
          src: ['LICENSE.md', 'README.md', 'NOTICE.md'],
          dest: '<%= pkg.name %>-<%= pkg.version %>/',
        }
      ]
    },
    tgz_release: {
      options: {
        archive: '<%= targetDir %>/<%= pkg.name %>-<%= pkg.version %>.tar.gz'
      },
      files : [
        {
          expand: true,
          cwd: '<%= destDir %>',
          src: ['**/*'],
          dest: '<%= pkg.name %>-<%= pkg.version %>/',
        },
        {
          expand: true,
          src: ['LICENSE.md', 'README.md', 'NOTICE.md'],
          dest: '<%= pkg.name %>-<%= pkg.version %>/',
        }
      ]
    }
  };
};