define(['jsx!./Todo'], function(Todo) {
    var React = require('react');

    var TodoList = React.createClass({
        render: function() {
            return (
                <ul>
                    {this.props.todoItems.map(function(todo) {
                        return (<Todo/>);
                    })}
                </ul>
            );
        }
    });

    return React.createFactory(TodoList);
});
