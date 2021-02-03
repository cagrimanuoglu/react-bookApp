import React , {Component} from 'react'
import { connect } from 'react-redux'
import { Badge, ListGroup, ListGroupItem } from 'reactstrap'
import {bindActionCreators} from 'redux'
import * as categoryActions from '../../redux/actions/categoryActions'
import * as productActions from '../../redux/actions/productActions'
class CategoryList extends Component
{
    componentDidMount() // uygulama açıldıgında direk çalısıcak fonk.
    {
        this.props.actions.getCategories()
    }

    selectCategory = (category)=>
    {   
        this.props.actions.changeCategory(category)
        this.props.actions.changeProduct(category.id)
    }

    render()
    {
        return(
            <div>
                <h3><Badge color="warning">Categories</Badge></h3>
                <ListGroup>
                    {
                        this.props.categories.map(category=>(
                            <ListGroupItem active={category.id===this.props.currentCategory.id} key={category.id} onClick={()=>this.selectCategory(category)} >
                                
                                {category.categoryName}
                                
                            </ListGroupItem>
                        ))
                    }
                   
                </ListGroup>
               
            </div>
        )
    }
}
function mapStateToProps(state)
{
    return{
        currentCategory:state.changeCategoryReducer,
        categories:state.categoryListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions:{
            getCategories:bindActionCreators(categoryActions.getCategories,dispatch),
            changeCategory:bindActionCreators(categoryActions.changeCategory,dispatch),
            changeProduct:bindActionCreators(productActions.getProductsByCategory,dispatch)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList)
