import PropTypes from 'prop-types';
import './Hero.css';

export default function HeroTitle({ titleStart, titleHighlight, titleEnd, badgeText, badgeIcon }) {
  return (
    <div className="jl-heroTitle">
      <h1 className="jl-heroTitle__title">
        {titleStart} <span className="jl-heroTitle__highlight">{titleHighlight}</span> <br />
        {titleEnd}
      </h1>

      <div className="jl-heroTitle__badge">
        {badgeIcon ? <span className="jl-heroTitle__badgeIcon">{badgeIcon}</span> : null}
        <span className="jl-heroTitle__badgeText">{badgeText}</span>
      </div>
    </div>
  );
}

HeroTitle.propTypes = {
  titleStart: PropTypes.string,
  titleHighlight: PropTypes.string,
  titleEnd: PropTypes.string,
  badgeText: PropTypes.string,
  badgeIcon: PropTypes.node
};

HeroTitle.defaultProps = {
  titleStart: 'Never Overpay for',
  titleHighlight: 'Travel',
  titleEnd: 'Again',
  badgeText: 'Track prices, save money',
  badgeIcon: null
};