import React from 'react';
import './HorizontalScrollingCards.css'; // You can create a CSS file for styling
import Card from '../card/Card';
import "../card/Card.css"
const HorizontalScrollingCards = ({useableData,setuseableData,data}) => {
  const dd=useableData.slice(0,10)  ;
  
  return (
    <div className="horizontal-scrolling-cards">
      <div className="cards-container">
      {dd.map((card)=>{
        return(
          <Card
          image={card.Image_Link}
          title={card.Title}
          info={card.Review}
          Genre={card.Genre}
          />
        );
      
      })}
      </div>
    </div>
  );
};

export default HorizontalScrollingCards;
