import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import lovePics from './assests/love birds1.jpeg';
import Form from './form';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="mainContainer justify-content-center">
        <div className=' imageContainer position-relative ms-1'>
          <img src={lovePics} alt="love-birds" className="lovePics"/>
          <div className="imageText">
                <h4>Lovely resting birds</h4>
                <p className="ms-md-4 ms-lg-0 fs-md-1 fs-lg-5 w-lg-auto px-3" >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Suscipit incidunt sequi mollitia nisi, quisquam nemo officiis quibusdam.
                </p>
          </div>
        </div>
        <Form className=" section" />
      </div>
    </div>
  );
}

export default App;
