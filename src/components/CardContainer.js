import React from 'react';
import Card from './Card'; // Import your Card component

export default function CardContainer() {
  const cardData = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <div className='card-container d-flex flex-wrap'>
      {cardData.map((item, index) => (
        <div key={index}  className='m-3'>
          <Card />
        </div>
      ))}
    </div>
  );
}
