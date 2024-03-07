import './App.css';
import React from 'react';
import Navbar from './Components/navbar.js';
import Footer from './Components/footer.js';
import coffee from './Assets/coffee.jpg';
import BasicButtons from './Components/Button.js';
import SubmitButton from './Components/submitbtn.js';
import cafe from './Assets/cafe.jpg';
import { IoPlanetSharp } from "react-icons/io5";
import cappucino from './Assets/cappuccino.png';
import cookie from './Assets/cookie.png';
import tea from './Assets/tea.png';
import {FaFacebook, FaInstagram, FaYelp} from 'react-icons/fa';
 

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <div class="container3" alt="image of coffee being poured into glasses from a machine">
      </div>
      <body>
      <h1>We Serve Out Of This World Coffee, Tea, and Baked Sweets!</h1>
      <div class="container">
      <div class="float1">
          <h2>In Business Since 2011</h2>
          <p>Starting small, our team has been dedicated to growing our business as we strive towards continued improvement.</p>
          <p>Click the button below to enter your email for updates, offers, and digital coupons to save money on your next purchase!</p>
      </div>
      <BasicButtons />
      </div>
      

    <div class="container2">
        <div class="float">
          <h2>Our Mission</h2>
          <p>To serve the best brewed, authentic coffee and providing positive customer experiences.</p>
        </div>
  
       <div class="float">
          <h2>Our Values</h2>
          <ul>☆ High Quality Products ☆</ul>
          <ul>☆ Environmentally Friendly ☆</ul>
          <ul>☆ Excellent Client Service ☆</ul>
          <ul>☆ Unique Cafe Atmosphere ☆</ul>
          <ul>☆ Clean And Safe Environment ☆</ul>
      </div>
    </div>

    <div class="container2">
      <div class="float1">
      <img src={cafe} alt="cafe stock photo showing a latte" position="absolute;" display="flex;" flex-direction="column;" object-fit="cover;" height="500px;" width="100%;"/>
      </div>
      <div class="float2">
        <p>Offering a good amount of seating, patrons are encouraged to enjoy their stay and enjoy their treats. Spend time with friends and family. 
          Work on homework, job assignments, or that novel you're writing. With a space theme and an emphasis on galaxy aesthetics and a relaxed atmosphere,
          we hope to offer an experience that will leave you wanting to come back!</p>
          <IoPlanetSharp size="70px" align-items="center" justify-content="center" display="flex" color="purple"/>
      </div> 
    </div>

    <h2>Try Some Of Our Fan Favorites!</h2>
    <div class="container2">
      <div class="float3" >
      <img src={cappucino} alt="cappucino with latte art showing a planet and stars" id="cappucino" justify-content="center" align-items="center" display="flex"></img>
      </div>
      <div class="float3">
      <img src={tea} alt="a mug of tea with a blue and purple color to the drink" id="tea" height="300px" width="300px" justify-content="center" align-items="center" display="flex" ></img>
      </div>
      <div class="float3">
        <img src={cookie} id="cookie" alt="a sugar cookie with sprinkles that resemble stars" height="300px" width="300px" justify-content="center" align-items="center" display="flex"></img>
      </div>
    </div>
    <div class="container2">
    <div class="float">
      <h2>Contact Us!</h2>
      <ul padding-top="6px">Phone Number: (231) XXXX-XXX</ul>
      <ul padding-top="6px">Email: galacticcafe@gmail.com</ul>
      <div class="float4">
      <FaFacebook href="#" class="icon" size="70px" align-items="center" justify-content="center" display="flex" color=""/>
      <FaInstagram href="#" class="icon" size="70px" align-items="center" justify-content="center" display="flex"/>
      <FaYelp href="#" class="icon" size="70px" align-items="center" justify-content="center" display="flex"/>
      </div>
    </div>
    <div class="float5">
    <h2 text-align="center">Have Feedback? We'd Love To Hear It!</h2>
      <form>
      <label>
      <p>Name</p>
      <input name="name" />
      </label>
      <label>
        <p>Email</p>
        <input email="email" />
      </label>
      <label>
        <p>Comments</p>
        <textarea id="comments" name="comments" rows="4" cols="50"/>
      </label>
      </form>
      <SubmitButton />
    </div>
    </div>
    </body>
      <Footer/>
    </React.Fragment>
  );
}

export default App;