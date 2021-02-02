import * as actionTypes from './actionTypes'

export function getProductSuccess(products)
{
    return {type:actionTypes.GET_PRODUCTS_SUCCESS,payload:products}
}

export function getProductSuccessByCategory(products)
{
    return {type:actionTypes.GET_PRODUCTS_BY_CATEGORY,payload:products}
}

export function getProducts()
{
    return function (dispatch) {
        let url = 'http://localhost:8080/getAllBook'
        return fetch(url)
        .then(response=>response.json())
        .then(result=>dispatch(getProductSuccess(result)))
    }
}

export function getProductsByCategory(id)
{
    return function(dispatch)
    {
        let url = "http://localhost:8080/getCategory";
        if(id)
        {
           url+="/"+id;
        }
        return fetch(url)
        .then(response=>response.json())
        .then(result=>dispatch(getProductSuccessByCategory(result.book)))
    }
}