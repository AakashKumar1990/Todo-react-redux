import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './Components/App';
import rootReducer from './Reducers'
import {composeWithDevTools,devToolsEnhancer} from 'redux-devtools-extension'


let store=createStore(rootReducer,devToolsEnhancer())

const Entrypoint=()=>{
return(
    <Provider store={store}>
        <App />
    </Provider>
)
}

// export default Entrypoint;

ReactDOM.render(<Entrypoint />,document.getElementById('root'));


