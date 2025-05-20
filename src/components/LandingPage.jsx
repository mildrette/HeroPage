import React from 'react';
import '../styles/HeroPage.scss';

function HeroPage() {
  return (
      <header>
  <nav className="navbar">
    <div className="logo">
      <img src="/logo.png" alt="Logo" />
    </div>
    <ul className="nav-links">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>

      <div className="nav-right">
        <button className="signup-btn">Sign Up</button>
      <div className="search-bar">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search ........" />
      </div>
    </div> 
  </nav>

  <div className="hero-container">
    <div className="left-text">
<p className="animated-s">
  S <span className="rank">Rank</span>
</p>
      <p className="aka">shadow monarch A.K.A</p>
      <p className="name">sung jin woo</p>
      <p className="korean">(조한 도)</p>
      <p className="description">
            Sung Jin-Woo (성진우) is the protagonist of Solo Leveling. He was
            previously known as the World's Weakest Hunter and delved down the
            path of becoming the World's Strongest Hunter after he was Reawakened
            and became a Player.
            <br /><br />
            Jin-Woo was reawakened as a Player after surviving the Cartenon Temple
            and completing the secret quest "Courage of the Weak." The mysterious
            System he received allowed Jin-Woo to limitless level up and increase
            his strength, unlike all hunters, who are unable to increase their
            strength unless reawakened.
      </p>
    </div>

    <div className="middle-image">
      <img src="/0o.png" alt="Phone Preview" />
    </div>

    <div className="right-text">
      <div className="about-heading">● ABOUT</div>
      <ul className="about-links">
       <li>Affiliation</li>
            <li>Status</li>
            <li>Relationships</li>
            <li>Skills</li>
            <li>Troops</li>
            <li>Weapons & EQS</li>
      </ul>
    </div>
  </div>
</header>
  );
}

export default HeroPage;

