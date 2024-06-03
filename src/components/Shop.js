// src/components/ShopsPage.js
import React from 'react';
import './ShopsPage.css';

const shops = [
  {
    city: 'Raipur',
    area: 'Pandri',
    address: '123, Pandri Main Road, Raipur, Chhattisgarh',
    locationUrl: 'https://goo.gl/maps/xyz123'
  },
  {
    city: 'Bhilai',
    area: 'Sector 10',
    address: '456, Sector 10, Bhilai, Chhattisgarh',
    locationUrl: 'https://goo.gl/maps/abc456'
  },
  {
    city: 'Mumbai',
    area: 'Andheri',
    address: '789, Andheri West, Mumbai, Maharashtra',
    locationUrl: 'https://goo.gl/maps/def789'
  },
  {
    city: 'Delhi',
    area: 'Connaught Place',
    address: '101, Connaught Place, New Delhi, Delhi',
    locationUrl: 'https://goo.gl/maps/ghi012'
  },
  {
    city: 'Bengaluru',
    area: 'Koramangala',
    address: '202, 5th Block, Koramangala, Bengaluru, Karnataka',
    locationUrl: 'https://goo.gl/maps/jkl345'
  },
  {
    city: 'Kolkata',
    area: 'Salt Lake',
    address: '303, Sector V, Salt Lake, Kolkata, West Bengal',
    locationUrl: 'https://goo.gl/maps/mno678'
  },
  {
    city: 'Chennai',
    area: 'T Nagar',
    address: '404, North Usman Road, T Nagar, Chennai, Tamil Nadu',
    locationUrl: 'https://goo.gl/maps/pqr901'
  },
  {
    city: 'Hyderabad',
    area: 'Banjara Hills',
    address: '505, Road No 12, Banjara Hills, Hyderabad, Telangana',
    locationUrl: 'https://goo.gl/maps/stu234'
  }
];

const ShopsPage = () => {
  return (
    <div className="shops-page">
      <h1>Our Shops</h1>
      <div className="shops-list">
        {shops.map((shop, index) => (
          <div key={index} className="shop-card">
            <h2>{shop.city}</h2>
            <p><strong>Area:</strong> {shop.area}</p>
            <p><strong>Address:</strong> {shop.address}</p>
            <a href={shop.locationUrl} target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopsPage;
