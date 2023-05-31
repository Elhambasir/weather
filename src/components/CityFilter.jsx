// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function CityFilter({ value, onchange }) {
  return (
    <div>
      <select className="filter-select" value={value} onChange={onchange}>
        <option className="filter-option" value="">All</option>
        <option className="filter-option" value="cold">Cold (&lt;= 10°C)</option>
        <option className="filter-option" value="moderate">Moderate (10°C - 20°C)</option>
        <option className="filter-option" value="hot">Hot (&gt; 20°C)</option>
      </select>
    </div>
  );
}

CityFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onchange: PropTypes.string.isRequired,
};

export default CityFilter;
