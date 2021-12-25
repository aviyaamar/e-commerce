import React from "react";
import "./App.css"
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Homepage from "./component/Homepage";
import Products from "./component/Products";
import Cart from "./component/Cart";


class App extends React.Component{
  state={cart:[]}
  handelAddToCart = (item) =>{
    item.quantity = 1;
    this.setState({cart: [...this.state.cart, item]})
  }

  increaseAmout = (index) => {
    const cart = this.state.cart;
    const item = this.state.cart[index];
    item.quantity = item.quantity + 1;
    cart.splice(index, 1, item);
    this.setState({ cart });
  };
  deacreseAmout = (index) => {
    if (this.state.cart[index].quantity > 0) {
      const cart = this.state.cart;
      const item = this.state.cart[index];
      item.quantity = item.quantity - 1;
      cart.splice(index, 1, item);
      this.setState({ cart });
    }
  };

  removeCart = (index) => {
    const cart = this.state.cart;
    cart.splice(index, 1);
    this.setState({ cart });
  };
  render(){
    return (
    <div>
      <BrowserRouter>
      <div>
        <Navbar cart={this.state.cart.length}/>
        <Route path='/' exact component={Homepage}/>
        <Route path='/products' exact >
         <Products  handelAddToCart={this.handelAddToCart}/> </Route>
        <Route path='/cart' exact>
          <Cart 
          deacreseAmout={this.deacreseAmout}
          increaseAmout={this.increaseAmout}
          cart={this.state.cart}
          removeCart= {this.removeCart}
          />

        </Route>
      </div>
     </BrowserRouter>
    </div>
    )
  }
} 
export default App
