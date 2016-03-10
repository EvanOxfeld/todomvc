define(function() {
	var React = require('react');

	var Stats = React.createClass({

		handleClearClick: function () {
			this.props.onClearCompleted();
		},

		render: function () {
			var completed = this.props.completed;
			var remaining = this.props.remaining;
			return (
				<div>
				<span id="todo-count">
					<strong>{ remaining}</strong> { remaining == 1 ? 'item' : 'items'} left
				</span>
				<ul id="filters">
					<li>
						<a href="#/">All</a>
					</li>
					<li>
						<a href="#/active">Active</a>
					</li>
					<li>
						<a href="#/completed">Completed</a>
					</li>
				</ul>
				{completed ? (
					<button id="clear-completed" onClick={this.handleClearClick}>Clear completed</button>
				) : null}
				</div>
			);
		}
	});

	return React.createFactory(Stats);
});
