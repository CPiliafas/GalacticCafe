import './App.css';
import React from 'react';
import Navbar from './Components/navbar.js';
import Footer from './Components/footer.js';
import coffee from './Assets/coffee.jpg';


function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <img src={coffee} alt="Coffee" position="absolute;" display="flex;" flex-direction="column;" object-fit="cover;" align-items="center;" height="500px;" width="100%;"/>
      <h1>We Serve Out Of This World Coffee, Tea, and Baked Sweets!</h1>;
      <div class="container">

        <div class="float">
          <h2>Our Mission</h2>
          <p>To serve the best brewed, authentic coffee and providing positive customer experiences.</p>
        </div>
  
       <div class="float">
          <h2>Our Values</h2>
          <p>High quality products</p>
          <p>Environmentally friendly</p>
          <p>Excellent client service</p>
          <p>Unique cafe atmosphere</p>
          <p>Clean and safe environment</p>
      </div>
    </div>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
