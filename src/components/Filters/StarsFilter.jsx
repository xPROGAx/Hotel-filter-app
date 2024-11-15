import PropTypes from 'prop-types';
import '../styles/Filters.css';

const StarsFilter = ({ selectedStars, onChange }) => (
  <div className="filter-item stars-filter">
    <h4 className="filter-title">Количество звёзд</h4>
    {[1, 2, 3, 4, 5].map(star => (
      <label key={star}>
        <input
          type="checkbox"
          checked={selectedStars.includes(star)}
          onChange={e =>
            onChange(
              e.target.checked
                ? [...selectedStars, star]
                : selectedStars.filter(s => s !== star)
            )
          }
        />
        {star} звёзд
      </label>
    ))}
  </div>
);

StarsFilter.propTypes = {
  selectedStars: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StarsFilter;