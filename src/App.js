import './App.css';
import React from 'react';
import Navbar from './Components/navbar.js';
import Footer from './Components/footer.js';
import coffee from './Assets/coffee.jpg';
import BasicButtons from './Components/Button.js';



function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <img src={coffee} alt="Coffee" position="absolute;" display="flex;" flex-direction="column;" object-fit="cover;" align-items="center;" height="300px;" width="100%;"/>
      <h1>We Serve Out Of This World Coffee, Tea, and Baked Sweets!</h1>
      <div class="float1">
        <div>
          <h2>In Business since 2011</h2>
          <p>Starting small, our team has been dedicated to growing our business as we strive towards continued improvement.</p>
          <p>Click the button below to enter your email for updates, offers, and digital coupons to save money on your next purchase!</p>
          <BasicButtons />
        </div>
      </div>
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
