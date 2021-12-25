import React, { Component } from 'react'


class ProductDetails extends Component {
    render() {
        return (
            <div>
               <img src={this.props.imgUrl}/> 
               <h3>{this.props.title}</h3>
               <p>{this.props.description}</p>
               <p>{this.props.size}</p>
               <p>{this.props.price}$</p>
               <button onClick={()=>this.props.h}></button>
             
            </div>
        )
    }
}

export default  ProductDetails