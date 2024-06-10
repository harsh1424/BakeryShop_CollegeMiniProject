import React from "react";
import { Link } from 'react-router-dom';

import styles from "./Main.module.css";
import cake from "../assets/logo-color.png";

const Main = () => {
    return (
        <>
            <div className={styles.blank}></div>
            <div className={styles.container}>
                
                <div className={styles.subContainer}>
                    <div className={styles.contentWrapper}>
                        <img src={cake} alt="Image 1" />
                        <div className={styles.text}>
                        <Link className={styles.link} to="/shops"><p>Offline Stores</p></Link>
                            <span>Have any query ordering online you can also order by visiting our shop, Click here to have a look at shop list</span>
                        </div>
                    </div>
                </div>
                
                <div className={styles.subContainer}>
                    <div className={styles.contentWrapper}>
                        <img src={cake} alt="Image 2" />
                        <div className={styles.text}>
                           <Link className={styles.link} to="/products"><p>All Products</p></Link> 
                            <span>Take a look at our wide range of variety of products, hope you will find what you need</span>
                        </div>
                    </div>
                </div>
                <div className={styles.subContainer}>
                    <div className={styles.contentWrapper}>
                        <img src={cake} alt="Image 3" />
                        <div className={styles.text}>
                            <Link className={styles.link} to="/recipe"><p>Recipes</p></Link>
                            <span>Like our taste? Want to know our recipe or the ingredient to give it a try, We got your back go for it!</span>
                        </div>
                    </div>
                </div>
            </div>
        
    </>
  );
};

export default Main;
