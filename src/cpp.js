import React from 'react';
import Footer from './Footer';
import './MainComponent.css';

const CppContent = () => {
  return (
    <div className="row">
      <div className="column">
        <h1>Introduction to C++</h1>
        <p>
          Producing a software application is relatively simple in concept: Take an idea and turn it into a useful program. Unfortunately for projects of any real scope, there are countless ways that a simple concept can go wrong. Programmers may not understand what users want or need (which may be two separate things), so they build the wrong application.
        </p>
      </div>
      <div className="column">
        <h1>About C++</h1>
        <p>
          C++ is a cross-platform language that can be used to create high-performance applications. It was developed by Bjarne Stroustrup, as an extension to the C language. C++ gives programmers a high level of control over system resources and memory. The language was updated 4 major times in 2011, 2014, 2017, and 2020 to C++11, C++14, C++17, C++20. C++ is one of the world's most popular programming languages.
        </p>
      </div>
      <div className="column">
        <h1>C++ Code Example</h1>
        <img src="images/c++.PNG" width="400" height="200" alt="C++ Code Example" />
      </div>
    </div>
  );
};

export default CppContent;
