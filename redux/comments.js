import * as ActionTypes from './ActionTypes';

export const comments = (state ={
    errMsg:null,
    comments :[]

}, action)=> {
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS :
            return {...state , errMsg :null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
                return {...state , errMsg :action.payload, comments :[]};

        default:
            return state;        
        
    }
     
}