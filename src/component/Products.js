import React, { Component } from 'react'
import productApi from './api'
import './products.css'


class Products extends Component {
    state = {data:[]}

    async componentDidMount(){
        const {data} = await productApi.get('products')
        this.setState({data})
        console.log({data})
    }
    displayData = () =>{
        const {data} = this.state
        return data.map((obj)=>{
            return(
                <div className='product'>
                <div  className='product_item' key={obj.id}>
                        <img src={obj.imgUrl}/>
                        <h4>{obj.title}</h4>
                       <p>{obj.description}</p>
                        <p>{obj.price}</p>   
                        <button onClick={()=> this.props.handelAddToCart(obj)}>ADD TO CART</button>          
                 </div>
                    </div>
            
            )
        })
    }
    render() {
        return (
            <div>
                {this.displayData()}
            </div>
        )
    }
}
export default Products 