module.exports = function(grunt) {
  // load npm modules that we require in package.js
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  // register our task/tasks we'd like to run below as our default (browserify and watch)
  grunt.registerTask('default', ['browserify', 'watch']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'), // points to package.json for reading
    // Browserify settings that set up where our source JS file is with our browserified code
    // and the file we'd like that to be built to
    browserify: {
      main: {
        src: 'js/index.js',
        dest: 'js/build.js'
      }
    },
    // Set up watch task to rerun browserify task on any js changes
    watch: {
      files: 'js/*',
      tasks: ['default']
    }
  });
}
