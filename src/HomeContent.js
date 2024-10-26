import React from 'react';
import Footer from './Footer';
import './MainComponent.css';

const HomeContent = () => {
  return (
    <div className="row">
      <div className="column">
        <h1>Welcome to DenialCoding!</h1>
        <img src="images/golf.jpg" width="400" height="200" alt="Home Page Example" />
      </div>
      <div className="column">
        <h1>About DenialCoding</h1>
        <h3>LEARN <br />TO <br />CODE WITH <br /> THE <br />WORLD'S <br />LARGEST <br />WEB <br />DEVELOPER <br />SITE</h3> 	
      </div>
      <div className="column">
        <h1>Home Page Example</h1>
        <img src="images/golf.jpg" width="400" height="200" alt="Home Page Example" />
      </div>
    </div>
  );
};

export default HomeContent;
