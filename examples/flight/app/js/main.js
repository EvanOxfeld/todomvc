/*global DEBUG */
'use strict';

require.config({
	baseUrl: './',
	paths: {
		jquery: 'node_modules/jquery/dist/jquery',
		es5shim: 'node_modules/es5-shim/es5-shim',
		es5sham: 'node_modules/es5-shim/es5-sham',
		text: 'node_modules/requirejs-text/text',
		flight: 'node_modules/flight',
		depot: 'node_modules/depot/depot',
		app: 'app/js',
		templates: 'app/templates',
		ui: 'app/js/ui',
		data: 'app/js/data',
		babel: 'node_modules/requirejs-react-jsx/babel-5.8.34.min',
		jsx: 'node_modules/requirejs-react-jsx/jsx',
		react: 'node_modules/react/dist/react-with-addons',
		'react-dom': 'node_modules/react-dom/dist/react-dom'
	},
	shim: {
		'app/page/app': {
			deps: ['jquery', 'es5shim', 'es5sham']
		},
		react: {
			exports: 'React'
		}
	}
});

require(['flight/lib/debug'], function (debug) {
	debug.enable(true);
	DEBUG.events.logAll();
	require(['app/page/app'],function(App){
		App.initialize();
	});
});
