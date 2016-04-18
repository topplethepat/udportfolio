'use strict';

module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	
       

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    imagemin: {
       
       minify: {
        src: ['img/*.{png,jpg}','views/images/*.{png,jpg}'],
        dest: 'dist/'
     
       },
    },
   
    
    
  }); 

     
     grunt.registerTask('default', ['imagemin']);
};
