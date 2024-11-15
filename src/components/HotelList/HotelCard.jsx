import PropTypes from 'prop-types';
import '../styles/HotelCard.css';

const HotelCard = ({ hotel }) => (
  <div className="hotel-card">
    <h3 className="hotel-title">{hotel.name}</h3>
    <p className="hotel-type">Тип: {hotel.type}</p>
    <p>Страна: {hotel.country}</p>
    <p>Звёзд: {hotel.stars}</p>
    <p>Отзывы: {hotel.reviews_amount}</p>
    <p className="hotel-price">Цена: {hotel.min_price} ₽</p>
    <button className="book-button" disabled={!hotel.isAvailable}>
      {hotel.isAvailable ? 'Забронировать' : 'Недоступно'}
    </button>
  </div>
);

HotelCard.propTypes = {
  hotel: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    reviews_amount: PropTypes.number.isRequired,
    min_price: PropTypes.number.isRequired,
    isAvailable: PropTypes.bool.isRequired,
  }).isRequired,
};

export default HotelCard;