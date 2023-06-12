import React, { useState } from 'react';

const BmrCalculator = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmr, setBmr] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Calculate BMR using the Harris-Benedict equation
    const bmrValue = 66 + (6.2 * weight) + (12.7 * height) - (6.76 * age);
    setBmr(bmrValue.toFixed(2)); // Rounded to 2 decimal places
  };

  return (
    <div className="container-bmr">
      <h2>BMR Calculator</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            className="form-control"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight (in kg):</label>
          <input
            type="number"
            className="form-control"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="height">Height (in cm):</label>
          <input
            type="number"
            className="form-control"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Calculate BMR</button>
      </form>
      {bmr && <p>Your Basal Metabolic Rate (BMR) is: {bmr} calories/day</p>}
    </div>
  );
};

export default BmrCalculator;
