import React from "react";
import styles from "./Products.module.css";
import Cake from "../assets/cake.png";
import Card from "./card";

import desert from "../assets/desertcake.jpg";

import pineapple from "../assets/pineapple.jpg";
import anniversry from "../assets/anniversery.jpg";
import birthday from "../assets/birthaday.jpg";
import tranding from "../assets/tranding.jpg";
import white from "../assets/white.jpg";
import icecream from "../assets/icecream.jpg";
import hat from "../assets/birthdayhat.jpeg";


const BestSelling_dummy_data =[
    {id:9, name: "Birthday Cake", description: "Try our Special Birthday cake that will definetly make your Birthday Special", price: 350, image:anniversry},
    {id: 12, name: "Trending Cake", description: "We also offer Cakes based on the recent trends please give a try", price: 450, image: birthday},
    {id: 10, name: "Anniversary Cake", description: "Try our Special Anniversary cake that will definetly make your day special with the taste", price:400, image: tranding},
    {id: 1, name: "Desert Cake", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 200, image:desert},
    {id: 3, name: "White Forest", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 300, image:white},
    {id: 6, name: "Pineapple Cake", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 350, image:pineapple},
    {id: 16, name: "Ice-Creams", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 110, image: icecream},
    {id: 14, name: "Birthday-Hat", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 50, image: hat},
  
  ]
const BestSelling = () =>{
    return<>
    <div className={styles.productHeading}>
      <br/>
      <br/>
        <h2>Our Best Selling Items</h2>
        <img src={Cake} alt="cake logo" />
      </div>
      <div className={styles.cardContainer}>
  {BestSelling_dummy_data.map((item) => (
    <Card key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image}/>
  ))}
    
    

</div>
    
    </>
}

export default BestSelling;