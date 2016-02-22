'use strict';

module.exports = function(gulp, args, config) {

    gulp.task('tasks', function() {
        console.log('List of all available tasks for ' + config.name + ':');
    });
};
