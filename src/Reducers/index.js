import React, { Component } from 'react';
import {combineReducers} from 'redux';
import AddItem from './AddItem'

const rootReducer =combineReducers({
    AddTodoItem:AddItem
})

export default rootReducer;
// import {DisplayTitle} from '../Actions' 
// import Data from '../Datafiles/Data.json'

// const initialState={
//     title:''

// };

// const rootReducer= (state={title:Data[0].title},action)=>{
    
// switch(action.type){
//     case 'Display-Title': 
//         return {
//             ...state,
//             title:action.payload
//         }
//     default:
//         return state;
    
//  }
  
// // return state;
// }
    
// export default rootReducer;


// case DisplayTitle: {
    //     return [...state,{
    //         title:action.title
    //     }
    // ]
    // }
    // case DisplayUserId: {
    //     return[...state, {
    //         userid:action.userid
    //     }
    // ]
    // }