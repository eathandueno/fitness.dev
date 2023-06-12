import React from 'react';
import './home.css';
import BmrCalculator from './BMRCalc';
const Home = () => {
  return (
    <div className='home-container'>
      <div className='main'>
        <BmrCalculator />
        <div className='about'>
          <h4>About the Project</h4>
          <p>I have always thought there are quite harmful narratives spread through fitness. With this website I intend on creating and providing free resources to anyone interested in getting into fitness </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
