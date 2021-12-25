import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

class Navbar extends Component {
    
    
    render() {
        return (
            <header>
                <div>
                    <Link to='/'>CLOTHES</Link>
                </div>
                <div className='navbar'>
                <div className='home'>
                <Link className='Links' to="/">Home</Link> 
                <Link to="/products">Products</Link>
                
                <div className='cart-container'>
                <Link to="/cart"><span>{this.props.cart}</span><i class="far fa-shopping-cart"></i></Link>  
                </div>
                </div> 
            </div>
            </header>
        )
    }
}
export default Navbar