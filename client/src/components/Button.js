import PropTypes from 'prop-types';
import './Button.css';

export default function Button({ text, icon, onClick, type }) {
  return (
    <button className="jl-btn" type={type} onClick={onClick}>
      {icon ? <span className="jl-btn__icon">{icon}</span> : null}
      <span className="jl-btn__text">{text}</span>
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit'])
};

Button.defaultProps = {
  icon: null,
  onClick: () => console.log('Button clicked (mock)'),
  type: 'button'
};