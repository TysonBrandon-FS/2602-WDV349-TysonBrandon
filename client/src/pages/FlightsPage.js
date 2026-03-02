import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import TrackedTrip from '../components/TrackedTrip';
import Button from '../components/Button';
import './FlightsPage.css';

export default function FlightsPage({ onAddToCart }) {
  const navigate = useNavigate();

  const trackedFlights = [
    {
      id: 'paris-flight',
      location: 'Paris, France',
      dates: 'Mar 14 - Mar 21, 2025',
      departPrice: 450,
      arrivePrice: 560,
      departLowest: 420,
      arriveLowest: 530,
      totalPrice: 1010,
      budget: 1200,
      changePct: '-5%'
    },
    {
      id: 'tokyo-flight',
      location: 'Tokyo, Japan',
      dates: 'Apr 8 - Apr 16, 2025',
      departPrice: 1100,
      arrivePrice: 800,
      departLowest: 1050,
      arriveLowest: 780,
      totalPrice: 1900,
      budget: 2500,
      changePct: '-5%'
    }
  ];

  return (
    <div className="jl-page jl-page--flights">
      <div className="jl-container">
        <div className="jl-flights-header">
          <Button text="Back To Home" onClick={() => navigate('/')} />
          <h1 className="jl-flights-title">Your Tracked Flights</h1>
        </div>
        <div className="jl-flights-grid">
          {trackedFlights.map((trip) => (
            <TrackedTrip key={trip.id} trip={trip} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}

FlightsPage.propTypes = {
  onAddToCart: PropTypes.func
};

FlightsPage.defaultProps = {
  onAddToCart: () => console.log('Add to cart (mock)')
};
