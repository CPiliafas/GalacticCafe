import './App.css';
import React from 'react';
import Navbar from './Components/navbar.js';
import Footer from './Components/footer.js';
import coffee from './Assets/coffee.jpg';
import BasicButtons from './Components/Button.js';
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
      <img src={coffee} alt="Coffee" position="relative;" display="flex;" flex-direction="row;" object-fit="cover;" align-items="center;" height="375px;" width="100%;"/>
      <body>
      <h1>We Serve Out Of This World Coffee, Tea, and Baked Sweets!</h1>
      <div class="container">
      <div class="float1">
          <h2>In Business since 2011</h2>
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
          <p>High quality products</p>
          <p>Environmentally friendly</p>
          <p>Excellent client service</p>
          <p>Unique cafe atmosphere</p>
          <p>Clean and safe environment</p>
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

    <h2>Try Some of our Fan Favorites!</h2>
    <div class="container2">
      <div class="float3" >
      <img src={cappucino} id="cappucino" justify-content="center" align-items="center" display="flex"></img>
      <p>Our Cappucinos come with wonderfully crafted foam art!</p>
      </div>
      <div class="float3">
      <img src={tea}  id="tea" height="300px" width="300px" justify-content="center" align-items="center" display="flex" ></img>
      <p>Our Tea, hot and iced, come in pretty colors with great taste!</p>
      </div>
      <div class="float3">
        <img src={cookie} id="cookie" height="300px" width="300px" justify-content="center" align-items="center" display="flex"></img>
        <p>Our sugar cookies are out of this world!</p>
      </div>
    </div>
    <div class="container2">
    <div class="float">
      <h2>Contact Us!</h2>
      <ul>Phone Number: (231) XXXX-XXX</ul>
      <ul>Email: galacticcafe@gmail.com</ul>
      <div class="float4">
      <FaFacebook class="icon" size="70px" align-items="center" justify-content="center" display="flex" color=""/>
      <FaInstagram class="icon" size="70px" align-items="center" justify-content="center" display="flex"/>
      <FaYelp class="icon" size="70px" align-items="center" justify-content="center" display="flex"/>
      </div>
    </div>
    <div class="float5">
    <h2>Have Feedback? We'd Love To Hear It!</h2>
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
      <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    </body>
      <Footer/>
    </React.Fragment>
  );
}

export default App;