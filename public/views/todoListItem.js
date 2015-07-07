define(['react'], function (React) {
    return React.createClass({
        getInitialState: function () {
            this.props.todo.on('change', function (model) {
                this.setState({ todo: _.clone(model.attributes) });
            });
            console.log(this.props.todo.attributes);
            return { todo: _.clone(this.props.todo.attributes) };
        },
        
        render: function () {
            return <li> == {this.state.todo.keyID } ==</li>;
        }
    });
});