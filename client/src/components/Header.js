import PropTypes from 'prop-types';
import '../components/Header.css';
import Button from './Button';

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-4.42 0-8 2-8 4.5V21h16v-2.5c0-2.5-3.58-4.5-8-4.5z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 18a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm10 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2zM7.2 14h9.9a2 2 0 0 0 1.9-1.4l1.7-5.2A1 1 0 0 0 19.8 6H6.3L6 4.6A1.6 1.6 0 0 0 4.4 3H3v2h1.2l2 9.5A2 2 0 0 0 7.2 14z" />
    </svg>
  );
}

function LogoMark() {
    //logo
  return <div className="jl-logo" aria-hidden="true">✈️</div>;
}

export default function Header({ brandTop, brandBottom, onLogin, onCart }) {
  return (
    <header className="jl-header">
      <div className="jl-header__left">
        <LogoMark />
        <div className="jl-brand">
          <div className="jl-brand__top">{brandTop}</div>
          <div className="jl-brand__bottom">{brandBottom}</div>
        </div>
      </div>

      <div className="jl-header__right">
        <Button text="Login" icon={<UserIcon />} onClick={onLogin} />
        <Button text="My Cart" icon={<CartIcon />} onClick={onCart} />
      </div>
    </header>
  );
}

Header.propTypes = {
  brandTop: PropTypes.string,
  brandBottom: PropTypes.string,
  onLogin: PropTypes.func,
  onCart: PropTypes.func
};

Header.defaultProps = {
  brandTop: 'Travel',
  brandBottom: 'Price Tracker',
  onLogin: () => console.log('Login clicked (mock)'),
  onCart: () => console.log('My Cart clicked (mock)')
};