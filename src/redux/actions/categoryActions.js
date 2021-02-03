import * as actionTypes from './actionTypes'

export function changeCategory(category)
{
    return{type:actionTypes.CHANGE_CATEGORY,payload:category}
}

export function getCategoriesSuccess(categories)
{
    return {type:actionTypes.GET_CATEGORIES_SUCCES,payload:categories}
}


export function getCategories()
{
    return function(dispatch)
    {
        let url = "http://localhost:8080/getAllCategory"
        return fetch(url).then(response=>response.json())
        .then(result=>dispatch(getCategoriesSuccess(result)))
    }
}