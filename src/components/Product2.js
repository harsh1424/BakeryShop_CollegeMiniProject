import React, { useState } from "react";
import styles from "./Products.module.css";
import Cake from "../assets/cake.png";
import Card from "./card";
import theme from "../assets/Product.jpg";
import black from "../assets/black.jpg";
import red from "../assets/red.jpg";
import desert from "../assets/desertcake.jpg";
import chocolate from "../assets/chocolate.jpg";
import mixfruit from "../assets/mixfruit.jpg";
import pineapple from "../assets/pineapple.jpg";
import mango from "../assets/mango.jpg";
import anniversry from "../assets/anniversery.jpg";
import birthday from "../assets/birthaday.jpg";
import tranding from "../assets/tranding.jpg";
import white from "../assets/white.jpg";
import coke from "../assets/coke.jpg";
import icecream from "../assets/icecream.jpg";
import hat from "../assets/birthdayhat.jpeg";
import chocolat from "../assets/chocolat.jpg"

const theme_dummy_data = [
  { id: 9, name: "Birthday Cake", description: "Try our Special Birthday cake that will definetly make your Birthday Special", price: 350, image: anniversry },
  { id: 10, name: "Anniversary Cake", description: "Try our Special Anniversary cake that will definetly make your day special with the taste", price: 400, image: tranding },
  { id: 11, name: "Theme Cake", description: "We also make and serve cake as per the theme of your own choice", price: 500, image: theme },
  { id: 12, name: "Trending Cake", description: "We also offer Cakes based on the recent trends please give a try", price: 450, image: birthday }
];

const chocolate_dummy_data = [
  { id: 1, name: "Desert Cake", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 200, image: desert },
  { id: 2, name: "Black Forest", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 250, image: black },
  { id: 3, name: "White Forest", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 300, image: white },
  { id: 4, name: "White Chocolate Cake", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 350, image: chocolate }
];

const fruit_dummy_data = [
  { id: 5, name: "Mix Fruit Cake", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 400, image: mixfruit },
  { id: 6, name: "Pineapple Cake", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 350, image: pineapple },
  { id: 7, name: "Red Velvet Cake", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 600, image: red },
  { id: 8, name: "Mango Flavored Cake", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 250, image: mango }
];

const addON_dummy_data = [
  { id: 13, name: "Coke", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 40, image: coke },
  { id: 14, name: "Birthday-Hat", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 50, image: hat },
  { id: 15, name: "Chocolates", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 75, image: chocolat },
  { id: 16, name: "Ice-Creams", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 110, image: icecream }
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filterProducts = (products) => {
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery)
    );
  };

  const filteredThemeCakes = filterProducts(theme_dummy_data);
  const filteredChocolateCakes = filterProducts(chocolate_dummy_data);
  const filteredFruitCakes = filterProducts(fruit_dummy_data);
  const filteredAddONs = filterProducts(addON_dummy_data);

  const noResults = !filteredThemeCakes.length && !filteredChocolateCakes.length && !filteredFruitCakes.length && !filteredAddONs.length;

  return (
    <>
      <div className={styles.productHeading}>
        <h2>Our PRODUCTS</h2>
        <img src={Cake} alt="cake logo" />
      </div>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
          className={styles.searchInput}
        />
      </div>

      {noResults ? (
        <div className={styles.noResults}>
          <p>No products found matching your search query.</p>
        </div>
      ) : (
        <>
          <h3 className={styles.categoryName}>Theme Cakes</h3>
          <div className={styles.cardContainer}>
            {filteredThemeCakes.map((item) => (
              <Card key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} />
            ))}
          </div>

          <h3 className={styles.categoryName}>Chocolate Cakes</h3>
          <div className={styles.cardContainer}>
            {filteredChocolateCakes.map((item) => (
              <Card key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} />
            ))}
          </div>

          <h3 className={styles.categoryName}>Fruit Cakes</h3>
          <div className={styles.cardContainer}>
            {filteredFruitCakes.map((item) => (
              <Card key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} />
            ))}
          </div>

          <h3 className={styles.categoryName}>Forget Some Party Essentials, Don't worry we got your back!!</h3>
          <div className={styles.cardContainer}>
            {filteredAddONs.map((item) => (
              <Card key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} />
            ))}
          </div>
        </>
      )}

      <br />
      <br />
      <br />
    </>
  );
};

export default Products;
