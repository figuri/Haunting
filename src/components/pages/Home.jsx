import React from 'react';
import '../../index.css';

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="title">Condemned Compound</h1>
      <p className="subtitle">
        The creators of your local haunted house for over 20 years!
      </p>
      <div className="mission-container">
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-text">
          Our mission is to provide a safe and fun environment for our guests to
          experience the thrill of a haunted house.
        </p>
      </div>
      <div className="homeImgContainer"></div>
      <p className='hauntImgCaption'>Upcoming Haunted House</p>
      <img className='hauntHomeImg' src='haunt3.jpg'></img>
    </div>
  );
}

