import PropTypes from 'prop-types';
import HotelCard from './HotelCard';

const HotelList = ({ hotels }) => (
  <>
    {hotels.length ? (
      hotels.map((hotel, index) => <HotelCard key={index} hotel={hotel} />)
    ) : (
      <p>Записей не найдено</p>
    )}
  </>
);

HotelList.propTypes = {
  hotels: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      stars: PropTypes.number.isRequired,
      description: PropTypes.string,
      country: PropTypes.string.isRequired,
      reviews_amount: PropTypes.number,
      min_price: PropTypes.number.isRequired,
      currency: PropTypes.string,
      isAvailable: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default HotelList;