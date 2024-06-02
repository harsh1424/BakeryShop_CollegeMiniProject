import React from "react";
import styles from "./Products.module.css";
import Cake from "../assets/cake.png";
import Card from "./card";
import Product from "../assets/Product.jpg";

const Chocolate_Dummy_data = [
  {id: 1, name: "Desert Cake", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 200, image:Product},
  {id: 2, name: "Black Forest", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 250, image:Product},
  {id: 3, name: "White Forest", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 300, image:Product},
  {id: 4, name: "Chocolate Cake", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 350, image:Product}
  
]
const fruit_dummy_data = [
  {id: 5, name: "Mix Fruit Cake", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 400, image:Product},
  {id: 6, name: "Pineapple Cake", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 350, image:Product},
  {id: 7, name: "Red velvet Cake", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 600, image:Product},
  {id: 8, name: "Mango Flavoured Cake", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 250, image:Product}
]

const Products = () => {

 
  return (
    <>
      <div className={styles.productHeading}>
        <h2>Our PRODUCTS</h2>
        <img src={Cake} alt="cake logo" />
      </div>
      <h3 className={styles.catoregyName}>Chocolate Cake</h3>
      <div className={styles.cardContainer}>
  {Chocolate_Dummy_data.map((item) => (
    <Card key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image}/>
  ))}
    
    

</div>
<h3 className={styles.catoregyName}>Fruit Cake</h3>
<div className={styles.cardContainer}>
  {fruit_dummy_data.map((item) => (
    <Card key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image}/>
  ))}
  </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default Products;


