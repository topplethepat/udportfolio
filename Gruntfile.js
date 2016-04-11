'use strict';

module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
       

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    cssmin: {
       
       minify: {
        src: ['css/style.css','css/print.css'],
        dest: 'css/dist.css'
     
       },
    },
   
    
    
  }); 

     
     grunt.registerTask('default', ['cssmin']);
};
