'use strict';

module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-critical');
	
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    critical: {
    
      width: 1024,
      height: 1024
       
       
        src: 'css/min.css',
        dest: 'css/crit.css'
     
       },  
    
    
  }); 

     grunt.registerTask('default', ['critical']);
};
