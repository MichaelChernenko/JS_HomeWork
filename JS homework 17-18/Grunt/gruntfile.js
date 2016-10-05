module.exports = function(grunt) {

  grunt.initConfig({
    concat_css: {
    options: {
    },
    all: {
      src: ["dev/css/*.css"],
      dest: "css/style.main.css"
    },
  },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['dev/js/*.js'],
        dest: 'js/script.main.js'
      }
    },
    uglify: {
      dist: {
        src: 'js/script.main.js',
        dest: 'js/script.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-css');

  grunt.registerTask('default', ['concat', 'uglify', 'concat_css']);

};