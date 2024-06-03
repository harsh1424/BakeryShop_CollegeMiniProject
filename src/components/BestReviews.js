import React from "react";
import { useState, useEffect } from "react";
import classes from "./BestReviews.module.css";

const BestReviews = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(() => {
        fetch('https://college-project-e6256-default-rtdb.firebaseio.com/feedbacks.json')
          .then((response) => response.json())
          .then((data) => {
            const fetchedFeedbacks = [];
            for (const key in data) {
              if (data[key].best === true) {  // Only include feedbacks with best set to true
                fetchedFeedbacks.push({
                  id: key,
                  name: data[key].text.name,
                  city: data[key].text.city,
                  feedback: data[key].text.feedback,
                });
              }
            }
            setFeedbacks(fetchedFeedbacks);
          })
          .catch((error) => {
            console.error('Error fetching feedbacks:', error);
          });
      }, []);
 
      return<>
        <h2 className={classes.heading}>Our Valuable Customers Reviews!!</h2>
        <div className={classes.feedbackContainer}>
        {feedbacks.map((fb, index) => (
          <div key={index} className={classes.card}>
            <h3 className={classes.cardName}>{fb.name} from {fb.city}</h3>
            <p className={classes.cardFeedback}>{fb.feedback}</p>
          </div>
        ))}
        </div>
      </>

}

export default BestReviews
