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
          <p>I have always thought there are quite harmful narratives spread through fitness. With this website I intend on creating and providing free resources to anyone interested in getting into fitness. This website should act as a guide towards optimal physical health. I am a Certified Personal Trainer with NASM</p>
        </div>
        <div className='facts'>
          <h4>My top 5 begininng  for optimal health</h4>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
