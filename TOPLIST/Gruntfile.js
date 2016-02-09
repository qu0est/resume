 module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
              name: 'small',
              width: 320,
              height: 240,
          }, {
              name: '1x',
              width: 640,
          }, {
        	  name: "2x",
              width: 1024,
              
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{svg,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/fixed/*.{gif,jpg,png}',
          dest: 'images/'
        }]
      },
    },
  });

 jshint: {
	all: [
		'Gruntfile.js',
		]
}

  require('load-grunt-tasks')(grunt);
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images','jshint']);

};