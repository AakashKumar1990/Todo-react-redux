import React from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>{this.props.title} </h1>
            </div>
        );
    }
}

const mapStateToProps= state => {
    return{
        title:state.title
    }
}



export default connect(mapStateToProps)(Display);
