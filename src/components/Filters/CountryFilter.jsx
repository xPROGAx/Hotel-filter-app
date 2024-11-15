import PropTypes from 'prop-types';
import Select from 'react-select';
import '../styles/Filters.css';

const CountryFilter = ({ selectedCountry, onChange, countries }) => (
  <div className="filter-item">
    <h4 className="filter-title">Страна</h4>
    <Select
      options={countries}
      placeholder="Выберите страну"
      value={selectedCountry}
      onChange={onChange}
      isClearable
      className="ant-select"
    />
  </div>
);

CountryFilter.propTypes = {
  selectedCountry: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  countries: PropTypes.array.isRequired,
};

export default CountryFilter;