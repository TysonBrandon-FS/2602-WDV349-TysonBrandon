import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import './CheckoutPage.css';

export default function CheckoutPage({ cartItems, onClearCart }) {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit');

  const trip = cartItems[0] || {
    location: 'Paris, France → Tokyo, Japan',
    dates: 'Apr 19 - Apr 29, 2025',
    totalPrice: 1900
  };

  const handleCompletePayment = () => {
    if (onClearCart) {
      onClearCart();
    }
    navigate('/thank-you');
  };

  return (
    <div className="jl-page jl-page--checkout">
      <div className="jl-container">
        <h1 className="jl-checkout-title">
          Check Out, Then <span className="jl-checkout-title-highlight">Travel</span>
        </h1>

        <div className="jl-checkout-content">
          <div className="jl-checkout-main">
            <div className="jl-checkout-card">
              <h2 className="jl-checkout-card-title">Trip Summary</h2>
              <div className="jl-trip-summary">
                <div className="jl-trip-summary-route">
                  <span>✈️</span> {trip.location}
                </div>
                <div className="jl-trip-summary-dates">
                  <span>🗓️</span> {trip.dates} | Round Trip 1 Adult
                </div>
                <div className="jl-trip-summary-badge">Under Budget</div>
                <div className="jl-trip-summary-flights">
                  <div className="jl-flight-box">
                    <div className="jl-flight-box-title">Departure</div>
                    <div>CDG Paris</div>
                    <div>April 19, 2025</div>
                    <div>10:30 AM → NRT April 19, 2025 6:45 PM</div>
                  </div>
                  <div className="jl-flight-box">
                    <div className="jl-flight-box-title">Return</div>
                    <div>CDG Paris</div>
                    <div>April 29, 2025</div>
                    <div>10:30 AM → NRT April 29, 2025 6:45 PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="jl-checkout-card">
              <h2 className="jl-checkout-card-title">Traveler Information</h2>
              <div className="jl-form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter full name" />
              </div>
              <div className="jl-form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter email" />
              </div>
              <div className="jl-form-group">
                <label>Phone</label>
                <input type="tel" placeholder="Enter phone" />
              </div>
            </div>

            <div className="jl-checkout-card">
              <div className="jl-checkout-card-header">
                <h2 className="jl-checkout-card-title">Passenger Details</h2>
                <Button text="Add Passenger" onClick={() => console.log('Add passenger')} />
              </div>
              <div className="jl-passenger-item">
                <div className="jl-passenger-avatar">👤</div>
                <div className="jl-passenger-name">Name first and last</div>
                <button className="jl-passenger-edit">✏️ Edit</button>
              </div>
              <div className="jl-flight-preferences">
                <h3>Flight Preferences (Optional)</h3>
                <label className="jl-checkbox">
                  <input type="checkbox" defaultChecked />
                  Window Seat
                </label>
                <label className="jl-checkbox">
                  <input type="checkbox" />
                  Extra Baggage +$50
                </label>
                <label className="jl-checkbox">
                  <input type="checkbox" />
                  Priority Boarding +$30
                </label>
              </div>
            </div>

            <div className="jl-checkout-card">
              <h2 className="jl-checkout-card-title">Payment Method</h2>
              <div className="jl-payment-methods">
                <label className="jl-radio">
                  <input
                    type="radio"
                    name="payment"
                    value="credit"
                    checked={paymentMethod === 'credit'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Credit
                </label>
                <label className="jl-radio">
                  <input
                    type="radio"
                    name="payment"
                    value="debit"
                    checked={paymentMethod === 'debit'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Debit Card
                </label>
                <label className="jl-radio">
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  PayPal
                </label>
                <label className="jl-radio">
                  <input
                    type="radio"
                    name="payment"
                    value="googlepay"
                    checked={paymentMethod === 'googlepay'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  GP, Google Pay
                </label>
              </div>
              <div className="jl-card-details">
                <div className="jl-form-group">
                  <label>Card Number</label>
                  <input type="text" placeholder="Enter card number" />
                </div>
                <div className="jl-form-row">
                  <div className="jl-form-group">
                    <label>Expiry Date</label>
                    <input type="text" placeholder="MM/YY" />
                  </div>
                  <div className="jl-form-group">
                    <label>CVV</label>
                    <input type="text" placeholder="123" />
                  </div>
                </div>
                <div className="jl-form-group">
                  <label>Card Name</label>
                  <input type="text" placeholder="Enter cardholder name" />
                </div>
                <label className="jl-checkbox">
                  <input type="checkbox" defaultChecked />
                  Save this card for future bookings
                </label>
              </div>
            </div>

            <Button text="Complete Payment" onClick={handleCompletePayment} icon="🔒" />
          </div>
        </div>
      </div>
    </div>
  );
}

CheckoutPage.propTypes = {
  cartItems: PropTypes.array,
  onClearCart: PropTypes.func
};

CheckoutPage.defaultProps = {
  cartItems: [],
  onClearCart: () => console.log('Clear cart (mock)')
};
