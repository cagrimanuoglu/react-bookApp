import React , {Component} from 'react'
import { connect } from 'react-redux'
import { Badge } from 'reactstrap'
import { Table } from 'reactstrap';
import { bindActionCreators } from 'redux'
import * as productAction from '../../redux/actions/productActions'


class ProductList extends Component
{
    componentDidMount()
    {
        this.props.actions.getProducts()
    }

    render()
    {
        return(
            <div>
            
            <h3><Badge color="warning">Products</Badge> <Badge color="success">{this.props.currentCategory.categoryName}</Badge> </h3>
            <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Book Name</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
          {this.props.products.map(product=>(
             <tr>
             <th scope="row">{product.id}</th>
             <td>{product.bookName}</td>
             <td>{product.author}</td>
           </tr>
          ))}
       
      </tbody>
    </Table>
            </div>
        )
    }
}

function mapStateToProps(state)
{
    return{
        currentCategory:state.changeCategoryReducer,
        products:state.productListReducer
    }
}

function mapDispatchToProps(dispatch)
{
    return {
        actions:{
            getProducts:bindActionCreators(productAction.getProducts,dispatch)
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(ProductList)