import React, { useState, useEffect } from 'react';
import classes from './testimonial.module.css';
const Testimonials = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = { name, city, feedback };
    saveFeedbackToFirebase(newFeedback)

    setFeedbacks([...feedbacks, newFeedback]);
    setName('');
    setCity('');
    setFeedback('');

  };
  const saveFeedbackToFirebase = (feedback) => {
    fetch('https://college-project-e6256-default-rtdb.firebaseio.com/feedbacks.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: feedback, best: false }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Feedback saved successfully:', data);
      })
      .catch((error) => {
        console.error('Error saving feedback:', error);
      });
  };
  
//   const [feedbackss, setFeedbackss] = useState([]);

useEffect(() => {

  fetch('https://college-project-e6256-default-rtdb.firebaseio.com/feedbacks.json')
    .then((response) => response.json())
    .then((data) => {
      const fetchedFeedbacks = [];
      for (const key in data) {
        fetchedFeedbacks.push({
          id: key,
          name: data[key].text.name,
          city: data[key].text.city,
          feedback: data[key].text.feedback,
        });
      }
      setFeedbacks(fetchedFeedbacks);
    })
    .catch((error) => {
      console.error('Error fetching feedbacks:', error);
    });
}, []);


  return (
    <div className={classes.mainContainer}>
    <div className={classes.container}>
      <h2 className={classes.heading}>Please give your Valuable Feedback to help us serve better!!</h2>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.formGroup}>
          <label className={classes.label}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={classes.input}
            required
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.label}>City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={classes.input}
            required
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.label}>Your Feedback:</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className={classes.textarea}
            required
          />
        </div>
        <button type="submit" className={classes.button}>Submit</button>
      </form>
      <h2 className={classes.heading}>Our Valuable customers Reviews which will help you Order and build trust in your mind!!</h2>
      </div>

      <div className={classes.feedbackContainer}>
        {feedbacks.map((fb, index) => (
          <div key={index} className={classes.card}>
            <h3 className={classes.cardName}>{fb.name} from {fb.city}</h3>
            <p className={classes.cardFeedback}>{fb.feedback}</p>
          </div>
        ))}
      </div>
    
    </div>
  );
};




export default Testimonials;