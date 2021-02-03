import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function productListReducer(state=initialState.products,action)
{
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return action.payload
        
        case actionTypes.GET_PRODUCTS_BY_CATEGORY:
            return action.payload
    
        default:
            return state
    }
}
