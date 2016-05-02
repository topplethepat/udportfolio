'use strict';

module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	
       

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    imagemin: {
       
       minify: {
        src: ['views/images/pizzeria.jpg'],
        dest: 'views'
     
       },
    },
   
    
    
  }); 

     
     grunt.registerTask('default', ['imagemin']);
};
