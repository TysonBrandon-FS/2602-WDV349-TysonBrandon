import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeroTitle from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import TrackedTrip from '../components/TrackedTrip';
import Button from '../components/Button';
import './HomePage.css';

export default function HomePage({ onAddToCart }) {
  const navigate = useNavigate();

  const featuredFlights = [
    {
      id: 'paris-featured',
      location: 'Paris, France',
      dates: 'Mar 18 - Mar 25, 2025',
      departPrice: 450,
      arrivePrice: 560,
      departLowest: 420,
      arriveLowest: 420,
      totalPrice: 1010,
      budget: 1200,
      changePct: '-5.2%'
    },
    {
      id: 'tokyo-featured',
      location: 'Tokyo, Japan',
      dates: 'Apr 10 - Apr 18, 2025',
      departPrice: 1100,
      arrivePrice: 800,
      departLowest: 1050,
      arriveLowest: 780,
      totalPrice: 1900,
      budget: 2500,
      changePct: '-0.5%'
    }
  ];

  const handleStartTracking = () => {
    navigate('/flights');
  };

  const handleHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="jl-page jl-page--home">
      <div className="jl-container">
        <div className="jl-hero-section">
          <HeroTitle
            titleStart="Never Overpay for"
            titleHighlight="Travel"
            titleEnd="Again"
            badgeText="Track prices, save money"
            badgeIcon="✈️"
          />
          <p className="jl-hero-subtitle">
            Track flight and hotel prices for your dream destinations. Get instant alerts when
            prices drop below your budget.
          </p>
          <div className="jl-hero-actions">
            <Button text="Start Tracking" onClick={handleStartTracking} />
            <Button text="How It Works" onClick={handleHowItWorks} />
          </div>
        </div>

        <div className="jl-featured-section">
          <h2 className="jl-featured-title">Featured Lowest Trips</h2>
          <p className="jl-featured-subtitle">Monitoring {featuredFlights.length} trips for price changes</p>
          <div className="jl-featured-grid">
            {featuredFlights.map((trip) => (
              <TrackedTrip key={trip.id} trip={trip} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>

        <HowItWorks id="how-it-works" />
      </div>
    </div>
  );
}

HomePage.propTypes = {
  onAddToCart: PropTypes.func
};

HomePage.defaultProps = {
  onAddToCart: () => console.log('Add to cart (mock)')
};
