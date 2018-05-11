import React, {Component}from 'react';
import  ReactDOM  from 'react-dom';
import AddTodoInput from '../Containers/AddTodoInput';
import Button from '../Containers/Button'
//  import {connect} from 'react-redux'
// import rootReducer from '../Reducers'


// function handleChange(e){
//     e.preventDefault();
    
// }
class App extends Component{
    constructor(props){
        super(props);

        // this.state={
        //     value:''
        // }

        // this.handleChange=this.handleChange.bind(this);
    }
    
    // handleChange(event){
    //     // e.preventDefault();
    //     this.setState({value:event.target.value})
    // }
    render(){
    return (
        <div>
            <h1>This is really Working!!!</h1>
            <AddTodoInput   name="AddTodo" 
                            placeholder='Add-Item' 
                            // value={this.state.value}
                            // onChange={this.handleChange}
                            />
            <Button label='Add Item'></Button>
        </div>
    );
};
}


export default App;

