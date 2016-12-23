module.exports=function(grunt){
   grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        karma: {   options:{
                        configFile: 'karma.conf.js',
                        browsers: [ 'Chrome' ]
                    },
                    dev: {
                        singleRun: false,
                        reporters: [ 'progress', 'coverage' ],
                        coverageReporter: { type: 'html' }

                    },
                    ci:{
                        singleRun: true,
                        reporters: [ 'junit', 'coverage' ],
                        coverageReporter: { type: 'cobertura' },

                    }
        }
   });
    grunt.loadNpmTasks('grunt-karma');
};
