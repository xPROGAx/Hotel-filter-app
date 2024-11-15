import PropTypes from 'prop-types';
import Select from 'react-select';

const TypeFilter = ({ selectedTypes, onChange, options }) => (
  <div>
    <h4>Тип</h4>
    <Select
      isMulti
      options={options}
      placeholder="Выберите тип"
      value={selectedTypes}
      onChange={onChange}
    />
  </div>
);

TypeFilter.propTypes = {
  selectedTypes: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default TypeFilter;