import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import TrackedTrip from '../components/TrackedTrip';
import Button from '../components/Button';
import './HotelsPage.css';

export default function HotelsPage({ onAddToCart }) {
  const navigate = useNavigate();

  const trackedHotels = [
    {
      id: 'paris-hotel',
      location: 'Paris, France',
      dates: 'Apr 9 - Apr 16, 2025',
      departPrice: 150,
      arrivePrice: 150,
      departLowest: 140,
      arriveLowest: 140,
      totalPrice: 1010,
      budget: 1200,
      changePct: '-1.2%'
    },
    {
      id: 'tokyo-hotel',
      location: 'Tokyo, Japan',
      dates: 'Apr 9 - Apr 19, 2025',
      departPrice: 130,
      arrivePrice: 130,
      departLowest: 125,
      arriveLowest: 125,
      totalPrice: 1000,
      budget: 700,
      changePct: '-1.5%'
    }
  ];

  return (
    <div className="jl-page jl-page--hotels">
      <div className="jl-container">
        <div className="jl-hotels-header">
          <Button text="Back To Home" onClick={() => navigate('/')} />
          <h1 className="jl-hotels-title">Your Tracked Hotels</h1>
        </div>
        <div className="jl-hotels-grid">
          {trackedHotels.map((trip) => (
            <TrackedTrip key={trip.id} trip={trip} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}

HotelsPage.propTypes = {
  onAddToCart: PropTypes.func
};

HotelsPage.defaultProps = {
  onAddToCart: () => console.log('Add to cart (mock)')
};
