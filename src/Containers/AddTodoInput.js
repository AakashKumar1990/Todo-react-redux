import React from 'react';
import PropTypes from 'prop-types';

class AddTodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value:''
        };
        this.handleChange=this.handleChange.bind(this);
    }
handleChange(e){
    e.preventDefault();
    this.setState({value:e.target.value})
}
    render() {
        const {name,placeholder} =this.props;
        return (
            <div>
                <input name={name} 
                        vlaue={this.state.value} 
                        placeholder={placeholder} 
                        onChange={this.handleChange}
                />
            </div>
        );
    }
}

AddTodoInput.propTypes = {};

export default AddTodoInput;
