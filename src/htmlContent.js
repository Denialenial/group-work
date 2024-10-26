import React from 'react';
import Footer from './Footer';
import './MainComponent.css';

const HTMLContent = () => {
  return (
    <div className="row">
      <div className="column">
        <h1>Introduction to HTML</h1>
        <p>No big project can succeed without a plan. Sometimes a project doesn’t follow the plan closely, 
		but every big project must have a plan.<br /><br /> The plan tells project members what they should be doing,
		when and how long they should be doing it, and most important what the project’s goals are. <br /><br />They
		give the project direction. One of the first steps in a software project is figuring out the requirements.</p>
      </div>
      <div className="column">
        <h1>About HTML</h1>
        <p>No big project can succeed without a plan. Sometimes a project doesn’t follow the plan closely, but every big project must have a plan.<br /><br /> The plan tells project members what they should be doing, when and how long they should be doing it, and most important what the project’s goals are.<br /><br />They give the project direction. One of the first steps in a software project is figuring out the requirements. <br />You need to find out  what the customers want and what the customers need. Depending on how well defined the user’s needs are, this can be time‐consuming.
        </p>
      </div>
      <div className="column">
        <h1>HTML Code Example</h1>
        <img src="images/html.PNG" width="400" height="200" alt="HTML Code Example" />
      </div>
    </div>
  );
};

export default HTMLContent;
