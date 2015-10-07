/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
    name: 'ember-cli-auto-complete',
    include: function include(app) {
	    if (app.app) {
	        app = app.app;
	    }
	    this.app = app;
	    //app.import(path.join('vendor', 'auto-complete.css'));
	    app.import('vendor/auto-complete.css');
	}
};
