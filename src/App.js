import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src="logo.png" alt="Site Logo" className="logo" />
        <div className="header-text">
        <h2 align="right">Schedule an Expert &ensp;&emsp;     +1 647-703-7407</h2>
        
          <h1 align="left"><br></br><br></br><br></br>Fed Up with <span className="highlight">Overcharges?</span></h1>
          <p align="left">Your Trusted Partner in Plumbing & Drain Services. Flowing Solutions for Your <span className="highlight">Plumbing Needs</span> <span role="img" aria-label="wrench">🛠️</span></p>
        </div>
        <div className="contact-info">
          <button className="phone-button" >+1 647-703-7407</button>
        </div>
      </header>
      <section className="Hero">
        <img src="hero.png" alt="Hero" />
      </section>
    </div>
  );
}

export default App;
