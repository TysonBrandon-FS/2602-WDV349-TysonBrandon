import PropTypes from 'prop-types';
import './TripInfoField.css';

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11 5h2v14h-2z" />
      <path d="M5 11h14v2H5z" />
    </svg>
  );
}

export default function TripInfoField({ label, price, lowest }) {
  return (
    <div className="trip-card">
      <div className="trip-card__top">
        <span className="trip-card__icon">
          <PlusIcon />
        </span>
        <span className="trip-card__label">{label}</span>
      </div>

      <div className="trip-card__price">${price}</div>
      <div className="trip-card__lowest">Lowest: ${lowest}</div>
    </div>
  );
}

TripInfoField.propTypes = {
  label: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  lowest: PropTypes.number.isRequired
};

TripInfoField.defaultProps = {
  label: 'Departing',
  price: 450,
  lowest: 420
};