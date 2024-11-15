import PropTypes from 'prop-types';
import './styles/Pagination.css'

const Pagination = ({ currentPage, total, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(total / itemsPerPage);

  const handlePageClick = page => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}>
        Назад
      </button>
      <span>Страница {currentPage} из {totalPages}</span>
      <button onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}>
        Вперёд
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;