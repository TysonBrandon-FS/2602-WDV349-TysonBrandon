import { useNavigate } from 'react-router-dom';
import HeroTitle from '../components/Hero';
import Button from '../components/Button';
import './ThankYouPage.css';

export default function ThankYouPage() {
  const navigate = useNavigate();

  return (
    <div className="jl-page jl-page--thankyou">
      <div className="jl-container">
        <HeroTitle
          titleStart="Never Overpay for"
          titleHighlight="Travel"
          titleEnd="Again"
          badgeText="Track prices, save money"
          badgeIcon="✈️"
        />
        <div className="jl-thankyou-content">
          <h2 className="jl-thankyou-title">Thank you for using Travel Price Tracker</h2>
          <a href="#" className="jl-thankyou-link">
            Get ready for the trip of a lifetime
          </a>
          <p className="jl-thankyou-message">Please check your email for your confirmation and receipt.</p>
          <Button text="Back To Home" onClick={() => navigate('/')} icon="✈️" />
        </div>
      </div>
    </div>
  );
}
