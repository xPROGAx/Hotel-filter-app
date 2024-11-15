import PropTypes from 'prop-types';
import { Button } from 'antd';

const FilterActions = ({ onApply, onReset }) => (
  <div>
    <Button type="primary" onClick={onApply} style={{ marginTop: '10px', width: '100%' }}>
      Применить фильтр
    </Button>
    <Button onClick={onReset} style={{ marginTop: '10px', width: '100%' }}>
      Очистить фильтр
    </Button>
  </div>
);

FilterActions.propTypes = {
  onApply: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default FilterActions;