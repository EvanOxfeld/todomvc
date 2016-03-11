define(function() {
    var React = require('react');

    var Todo = React.createClass({
        render: function() {
            return (
                <li>Todo</li>
            );
        }
    });

    return React.createFactory(Todo);
});
