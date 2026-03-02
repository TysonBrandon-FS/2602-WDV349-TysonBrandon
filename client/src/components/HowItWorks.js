import PropTypes from 'prop-types';
import './HowItWorks.css';

export default function HowItWorks({ steps, title, subtitle, id }) {
  return (
    <div className="jl-hiw" id={id}>
      <h2 className="jl-hiw__title">{title}</h2>
      <p className="jl-hiw__sub">{subtitle}</p>

      <div className="jl-hiw__grid">
        {steps.map((step) => (
          <div className="jl-hiw__cardWrap" key={step.num}>
            <div className="jl-hiw__num">{step.num}</div>

            <div className="jl-hiw__card">
              <div className="jl-hiw__iconBox">
                <span className="jl-hiw__icon">{step.icon}</span>
              </div>

              <h3 className="jl-hiw__cardTitle">{step.title}</h3>
              <p className="jl-hiw__cardText">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

HowItWorks.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      num: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      icon: PropTypes.node,
      title: PropTypes.string,
      text: PropTypes.string
    })
  )
};

HowItWorks.defaultProps = {
  id: 'how-it-works',
  title: 'How It Works',
  subtitle: 'Start saving on travel in four simple steps',
  steps: [
    {
      num: 1,
      icon: '📍',
      title: 'Enter Destination',
      text: 'Tell us where you want to go and when you plan to travel.'
    },
    {
      num: 2,
      icon: '📉',
      title: 'We Monitor Prices',
      text: 'We watch prices for flights and hotels as they change.'
    },
    {
      num: 3,
      icon: '🔔',
      title: 'Get Price Alerts',
      text: 'Get notified when prices drop below your budget.'
    },
    {
      num: 4,
      icon: '💳',
      title: 'Book & Save',
      text: 'Add deals to your cart and checkout when you’re ready.'
    }
  ]
};