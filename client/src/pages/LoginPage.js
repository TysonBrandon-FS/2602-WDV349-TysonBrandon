import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroTitle from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Button from '../components/Button';
import './LoginPage.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { username, password });
    navigate('/');
  };

  return (
    <div className="jl-page jl-page--login">
      <div className="jl-container">
        <div className="jl-login-hero">
          <div className="jl-login-hero-left">
            <HeroTitle
              titleStart="Never Overpay for"
              titleHighlight="Travel"
              titleEnd="Again"
              badgeText="Track prices, save money"
              badgeIcon="✈️"
            />
            <p className="jl-login-subtitle">
              Track flight and hotel prices for your dream destinations.
            </p>
          </div>
          <div className="jl-login-hero-right">
            <div className="jl-login-card">
              <h2 className="jl-login-card-title">Sign In to Start Tracking</h2>
              <p className="jl-login-card-subtitle">Enter your information below</p>
              <form onSubmit={handleSubmit} className="jl-login-form">
                <div className="jl-login-form-group">
                  <label htmlFor="username">Enter Username or Email</label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter Username or Email"
                    required
                  />
                </div>
                <div className="jl-login-form-group">
                  <label htmlFor="password">Enter Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    required
                  />
                </div>
                <Button text="LOGIN" type="submit" />
              </form>
            </div>
          </div>
        </div>

        <HowItWorks />
      </div>
    </div>
  );
}
