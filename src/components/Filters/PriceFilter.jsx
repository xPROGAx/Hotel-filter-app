import { useState } from 'react';
import PropTypes from 'prop-types';
import { Slider } from 'antd';
import '../styles/Filters.css';

const PriceFilter = ({ onChange }) => {
  const [minPrice, setMinPrice] = useState('0');
  const [maxPrice, setMaxPrice] = useState('10000');

  const handleInputChange = (value, type) => {
    const validValue = value.replace(/[^0-9]/g, '');
    if (type === 'min') {
      setMinPrice(validValue);
      onChange([Number(validValue) || 0, Number(maxPrice) || 0]);
    }
    if (type === 'max') {
      setMaxPrice(validValue);
      onChange([Number(minPrice) || 0, Number(validValue) || 0]);
    }
  };

  const handleSliderChange = ([min, max]) => {
    setMinPrice(min.toString());
    setMaxPrice(max.toString());
    onChange([min, max]);
  };

  return (
    <div className="filter-item price-slider">
      <h4 className="filter-title">Цена</h4>
      <div className="price-inputs">
        <input
          type="text"
          value={minPrice}
          onChange={e => handleInputChange(e.target.value, 'min')}
          placeholder="От"
        />
        <input
          type="text"
          value={maxPrice}
          onChange={e => handleInputChange(e.target.value, 'max')}
          placeholder="До"
        />
      </div>
      <Slider
        range
        value={[Number(minPrice) || 0, Number(maxPrice) || 0]}
        max={10000}
        onChange={handleSliderChange}
      />
    </div>
  );
};

PriceFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default PriceFilter;