import React from 'react';
import Footer from './Footer';
import './MainComponent.css';

const PythonContent = () => {
  return (
    <div className="row">
      <div className="column">
        <h1>Introduction to Python</h1>
        <p>
          Producing a software application is relatively simple in concept: Take an idea and turn it into a useful program. Unfortunately for projects of any real scope, there are countless ways that a simple concept can go wrong. Programmers may not understand what users want or need (which may be two separate things), so they build the wrong application. <br/><br/>The program might be so full of bugs that it’s frustrating to use, impossible to fix, and can’t be enhanced over time. The program could be completely effective but so confusing that you need a PhD in puzzle-solving to use it. An absolutely perfect application could even be killed by internal business politics or market forces.
        </p>
      </div>
      <div className="column">
        <h1>About Python</h1>
        <p>
          No big project can succeed without a plan. Sometimes a project doesn’t follow the plan closely, but every big project must have a plan. The plan tells project members what they should be doing, when and how long they should be doing it, and most important what the project’s goals are. <br/><br/>They give the project direction. One of the first steps in a software project is figuring out the requirements. You need to find out what the customers want and what the customers need. Depending on how well defined the user’s needs are, this can be time‐consuming.
        </p>
      </div>
      <div className="column">
        <h1>Python Code Example</h1>
        <img src="images/python.PNG" width="400" height="200" alt="Python Code Example" />
      </div>
    </div>
  );
};

export default PythonContent;

