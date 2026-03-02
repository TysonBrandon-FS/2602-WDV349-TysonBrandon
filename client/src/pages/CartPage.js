import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import './CartPage.css';

export default function CartPage({ cartItems, onRemoveItem }) {
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + Number(item.totalPrice || 0), 0);

  return (
    <div className="jl-page jl-page--cart">
      <div className="jl-container">
        <h1 className="jl-cart-title">My Cart</h1>
        {cartItems.length === 0 ? (
          <div className="jl-cart-empty">
            <p>Cart is empty</p>
            <Button text="Back To Home" onClick={() => navigate('/')} />
          </div>
        ) : (
          <>
            <div className="jl-cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="jl-cart-item">
                  <div className="jl-cart-item__info">
                    <h3 className="jl-cart-item__location">{item.location}</h3>
                    <p className="jl-cart-item__dates">{item.dates}</p>
                  </div>
                  <div className="jl-cart-item__price">${item.totalPrice}</div>
                  <button
                    className="jl-cart-item__remove"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="jl-cart-summary">
              <div className="jl-cart-total">
                <span className="jl-cart-total-label">Total:</span>
                <span className="jl-cart-total-value">${total}</span>
              </div>
              <Button text="Go To Checkout" onClick={() => navigate('/checkout')} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

CartPage.propTypes = {
  cartItems: PropTypes.array,
  onRemoveItem: PropTypes.func
};

CartPage.defaultProps = {
  cartItems: [],
  onRemoveItem: () => console.log('Remove item (mock)')
};
