module.exports = function(grunt) {

  grunt.initConfig({
    concat_css: {
    options: {
    },
    all: {
      src: ["css/src/*.css"],
      dest: "css/dest/style.main.css"
    },
  },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dib/script.main.js'
      }
    },
    uglify: {
      dist: {
        src: 'js/dib/script.main.js',
        dest: 'js/dib/script.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-css');

  grunt.registerTask('default', ['concat', 'uglify', 'concat_css']);

};