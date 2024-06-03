import React from "react";
import Main from "./components/Main";
import BestSelling from "./components/BestSellingItem";
import BestReviews from "./components/BestReviews";
// import Products from "./components/Products";
const Home = ()=>{
    return <>
    <Main/>
    <BestSelling/>
    <BestReviews />
    {/* <Products/> */}
    </>
}

export default Home;