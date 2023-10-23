import React from 'react';
import '../App.css';
import Card from '../components/card/Card';
import { useEffect,useState } from 'react';
import Filter from '../components/filterBar/Filter';
import data from "../components/data/data.json";
import NavigationBar from '../components/navbar/NavigationBar';
import HorizontalScrollingCards from '../components/siding/HorizontalScrollingCards';

function Home() {
  const [useableData,setuseableData]=useState([]);
  useEffect(() => {
    // You can load data asynchronously here (e.g., fetch data)
    setuseableData(data);
  }, []);
  return  (
    <div className="App">
      <NavigationBar/>
      <div className='latest'>Latest</div>
      <div className='card-container'>
      </div>
      <HorizontalScrollingCards useableData={useableData} setuseableData={setuseableData}  data={data} />
      <Filter useableData={useableData} setuseableData={setuseableData}  data={data}/>
      {useableData.map((card)=>{
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
  );
}

export default Home;