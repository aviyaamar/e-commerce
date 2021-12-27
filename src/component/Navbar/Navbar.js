import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Navbar extends Component {
    
    
    render() {
        return (
            <header>
                <div>
                    <Link to='/'>CLOTHES</Link>
                </div>
                <div className='navbar'>
                <div className='home'>
                <Link to="/Homepage">Home</Link> 
                <Link to="/products">Products</Link>
                
                <div className='cart-container'>
                <Link to="/cart"><span>{this.props.cart}</span></Link>  
                </div>
                </div> 
            </div>
            </header>
        )
    }
}
export default Navbar