import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'; // Corrected import path
import backgroundImage from '../assets/abcd.jpg'; // Replace with your actual path

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToLogin = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="home-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <header className="navbar">
        <div className="logo">MyBrand</div>
        <nav>
          <ul>
            <li><a href="#about">What is MyBrand?</a></li>
            <li><a href="#articles">Articles</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header-buttons">
          <button className="status-button">Online</button>
          <button className="join-button" onClick={handleNavigateToLogin}>Join Us</button>
        </div>
      </header>

      <main className="hero">
        <div className="hero-content">
          <h1>Welcome to MyBrand</h1>
          <p>
            Discover the future of decentralization with MyBrand. Empowering communities through
            innovation and technology.
          </p>
          <button className="cta-button" onClick={handleNavigateToLogin}>Join Now</button>
        </div>
      </main>
    </div>
  );
};

export default Home;
