import React from "react";
import { Link } from 'react-router-dom';

import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return <>
        <header className={classes.header}>
            <h1><Link className={classes.link} to="/" >My Bakery</Link></h1>
            <h1>
            <Link className={classes.link} to="/about">About Us</Link>
              </h1>
            <h1><Link className={classes.link} to="/testimonial">Users Testimonials</Link></h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        
    </>
}
export default Header;