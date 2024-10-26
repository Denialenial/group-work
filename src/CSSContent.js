import React from 'react';
import Footer from './Footer';
import './MainComponent.css';


const CSSContent = () => {
  return (
    <div className="row">
      <div className="column">
        <h1>CSS Introduction</h1>
        <p>
          Producing a software application is relatively simple in concept: Take an idea and turn it into a useful program. Unfortunately for projects of any real scope, there are countless ways that a simple concept can go wrong. Programmers may not understand what users want or need (which may be two separate things), so they build the wrong application. The program might be so full of bugs that it’s frustrating to use, impossible to fix, and can’t be enhanced over time. The program could be completely effective but so confusing that you need a PhD in puzzle-solving to use it. An absolutely perfect application could even be killed by internal business politics or market forces.
        </p>
      </div>
      <div className="column">
        <h1>About CSS</h1>
        <p>
          Software application is relatively simple in concept: Take an idea and turn it into a useful program. Unfortunately for projects of any real scope, there are countless ways that a simple concept can go wrong. Programmers may not understand what users want or need (which may be two separate things), so they build the wrong application. The program might be so full of bugs that it’s frustrating to use, impossible to fix, and can’t be enhanced over time. The program could be completely effective but so confusing that you need a PhD in puzzle-solving to use it. An absolutely perfect application could even be killed by internal business politics or market forces.
        </p>
      </div>
      <div className="column">
        <h1>CSS Code Example</h1>
        <img src="images/css.PNG" width="400" height="200" alt="CSS Code Example" />
      </div>
    </div>
  );
};

export default CSSContent;
