import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function changeCategoryReducer(state=initialState.currentCategory,action)
{
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
            
            return action.payload //state döndürüyor.
    
        default:
            return state
    }
}