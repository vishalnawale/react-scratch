import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import  {dishes} from '../shared/dishes';
import {comments} from '../shared/comments';
import {leaders} from '../shared/leaders';
import {promotions} from '../shared/promotions';


export const ConfigureStore =() =>{
const store=createStore (
    combineReducers({
        dishes,
        comments,
        leaders,
        promotions
    }),
    applyMiddleware(thunk, logger)
);

return store;
}
