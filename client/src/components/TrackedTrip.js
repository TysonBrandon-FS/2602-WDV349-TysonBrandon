import PropTypes from 'prop-types';
import Button from './Button';
import './TrackedTrip.css';

export default function TrackedTrip({ trip, onAddToCart }) {
  const underBudget = Number(trip.totalPrice) <= Number(trip.budget);

  const handleAdd = () => {
    onAddToCart(trip);
  };

  return (
    <div className="jl-trip">
      <div className={`jl-trip__badge ${underBudget ? 'jl-trip__badge--good' : 'jl-trip__badge--bad'}`}>
        {underBudget ? 'Under Budget' : 'Over Budget'}
      </div>

      <div className="jl-trip__row">
        <div className="jl-trip__left">
          <div className="jl-trip__titleRow">
            <span className="jl-trip__icon">✈️</span>
            <h3 className="jl-trip__title">{trip.location}</h3>
          </div>

          <div className="jl-trip__dateRow">
            <span className="jl-trip__icon">🗓️</span>
            <span className="jl-trip__dates">{trip.dates}</span>
          </div>
        </div>

        <div className="jl-trip__middle">
          <div className="jl-trip__box">
            <div className="jl-trip__boxTop">
              <span className="jl-trip__miniIcon">🛫</span>
              <span className="jl-trip__boxLabel">Departing</span>
            </div>
            <div className="jl-trip__boxPrice">${trip.departPrice}</div>
            <div className="jl-trip__boxSub">Lowest: ${trip.departLowest}</div>
          </div>

          <div className="jl-trip__box">
            <div className="jl-trip__boxTop">
              <span className="jl-trip__miniIcon">🛬</span>
              <span className="jl-trip__boxLabel">Arriving</span>
            </div>
            <div className="jl-trip__boxPrice">${trip.arrivePrice}</div>
            <div className="jl-trip__boxSub">Lowest: ${trip.arriveLowest}</div>
          </div>
        </div>

        <div className="jl-trip__right">
          <div className="jl-trip__rightLabel">Total Price</div>
          <div className="jl-trip__total">${trip.totalPrice}</div>

          {trip.changePct ? (
            <div className="jl-trip__change">
              <span className="jl-trip__changeIcon">📈</span>
              <span>{trip.changePct}</span>
              <span className="jl-trip__changeIcon">🔥</span>
            </div>
          ) : null}

          <div className="jl-trip__rightLabel jl-trip__rightLabel--spaced">Your Budget</div>
          <div className="jl-trip__budget">${trip.budget}</div>
        </div>
      </div>

      <div className="jl-trip__btnRow">
        <Button text="Add To Cart" handleClick={handleAdd} />
      </div>
    </div>
  );
}

TrackedTrip.propTypes = {
  trip: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    location: PropTypes.string,
    dates: PropTypes.string,
    departPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    arrivePrice: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    departLowest: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    arriveLowest: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    totalPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    budget: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    changePct: PropTypes.string
  }),
  onAddToCart: PropTypes.func
};

TrackedTrip.defaultProps = {
  trip: {
    id: 1,
    location: 'Paris, France',
    dates: 'Mar 14 - Mar 21, 2025',
    departPrice: 450,
    arrivePrice: 560,
    departLowest: 420,
    arriveLowest: 420,
    totalPrice: 1010,
    budget: 1200,
    changePct: '5.2'
  },
  onAddToCart: function () {
    console.log('add to cart clicked');
  }
};