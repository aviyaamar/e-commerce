import React from 'react'
import './Cart.css'

 class Cart extends React.Component {
     renderItems = () => {
      return this.props.cart.map((item, index) => {
        return (
          <div className="cart_details">
            <img src={item.imgUrl}/>
            <div className="title">
              <p>{item.title}</p>
              <div>
                <button onClick={() => this.props.increaseAmout(index)}>+</button>
                Quantity: {item.quantity}
                <button onClick={() => this.props.deacreseAmout(index)}>  <i className="fas fa-chevron-down"></i></button>
                <br />
                <button className="" onClick={() => this.props.removeCart(index)}> Remove Item </button>
              </div>
            </div>
          </div>
        );
      });
    };
  render(){
    return (
        <div className="cart">
          <h1>This is your cart</h1>
          {this.renderItems()}
        </div>
      )

  }
  ;
  }
  export default Cart