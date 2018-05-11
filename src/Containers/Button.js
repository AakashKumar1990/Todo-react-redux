import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const buttonstyle={
            width:100,
            height:30
        }
        return (
            <div>
                <button type='button' style={buttonstyle}>{this.props.label}</button>
            </div>
        );
    }
}

Button.propTypes = {};

export default Button;
