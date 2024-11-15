import PropTypes from 'prop-types';
import '../styles/Filters.css';

const ReviewsFilter = ({ reviews, onChange }) => (
  <div className="filter-item reviews-filter">
    <h4 className="filter-title">Количество отзывов</h4>
    <input
      type="text"
      value={reviews}
      onChange={e => onChange(e.target.value)}
      placeholder="Введите минимум отзывов"
    />
  </div>
);

ReviewsFilter.propTypes = {
  reviews: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ReviewsFilter;