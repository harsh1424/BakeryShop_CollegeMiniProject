import React from 'react';
import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.heading}>Our Story</h2>
        <p className={styles.paragraph}>
          Welcome to Our Bakery! Founded in 2010, we started as a small family-owned shop with a passion for baking. Over the years, our dedication to using the finest ingredients and traditional baking methods has earned us a loyal customer base. Today, we continue to bring joy to our community with our delicious and freshly baked goods.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Our Team</h2>
        <p className={styles.paragraph}>
          Our team is made up of talented bakers and pastry chefs who share a love for creating mouth-watering treats. Led by our head baker, John Doe, each member brings unique skills and creativity to our bakery. Together, we strive to deliver the best bakery experience to our customers.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Our Values</h2>
        <p className={styles.paragraph}>
          At Our Bakery, we believe in quality, community, and sustainability. We are committed to using locally sourced ingredients whenever possible and ensuring that our products are made with care and integrity. We also believe in giving back to the community that supports us by participating in local events and charities.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Contact Us</h2>
        <p className={styles.paragraph}>
          We'd love to hear from you! Whether you have questions about our products, want to place a special order, or simply want to share your feedback, feel free to reach out to us.
        </p>
        <p className={styles.paragraph}>
          Email: info@MyBakkery.co.in
        </p>
        <p className={styles.paragraph}>
          Phone: +91 1234567890
        </p>
        <p className={styles.paragraph}>
          Address: MATS University, Pandri, Raipur
        </p>
      </section>
    </div>
  );
};



export default About;
