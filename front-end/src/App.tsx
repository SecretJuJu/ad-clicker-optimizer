import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TripAdsense } from './adsense/trip.adsense';

function App() {
  return (
    <div className="App">
      <h2>Hi this is ad-clicker-optimizer!</h2>
      <div>
        <h2>
          this is ad area
        </h2>
        <TripAdsense />
      </div>
    </div>
  );
}

export default App;
