import {clientnew} from '../action/actionTypes';
export default (
    state = {
        client: ""
    },
    action
 ) => {
     switch(action.type){
         case clientnew : 
         return {
             ...state,
             client: action.payload
         }
         default: return state;
     }
<<<<<<< HEAD
 }
=======
 }
>>>>>>> 56c421401794cc2cb49306e8fb50111fc1072d5b
