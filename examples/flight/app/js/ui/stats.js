/*global define */
'use strict';

define([
	'flight/lib/component',
	'./with_filters',
	//'text!templates/stats.html',
	'jsx!app/components/Stats',
	'app/utils'
], function (defineComponent, withFilters, Stats, utils) {
	function stats() {
		//var template = utils.tmpl(statsTmpl);
		var ReactDom = require('react-dom');

		this.attributes({
			clearCompletedSelector: '#clear-completed'
		});

		this.render = function (e, data) {
			var toggle = data.all > 0;

			//this.$node.html(template(data));
			ReactDom.render(Stats({
				completed: data.completed,
				remaining: data.remaining,
				onClearCompleted: this.clearCompleted
			}), this.$node[0]);
			this.$node.toggle(toggle);
			this.markSelected(data.filter);
		};

		this.clearCompleted = function () {
			this.trigger('uiClearRequested');
		};

		this.after('initialize', function () {
			this.$node.hide();
			this.on(document, 'dataStatsCounted', this.render);
			//this.on('click', { 'clearCompletedSelector': this.clearCompleted });
		});
	}

	return defineComponent(stats, withFilters);
});
