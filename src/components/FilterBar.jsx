import { PropTypes } from "prop-types";

const FilterBar = ({ setCategory, setSortOption }) => {
    FilterBar.propTypes = {
        setCategory: PropTypes.any,
        setSortOption: PropTypes.any,
      };
    

  return (
    <div className="d-flex mb-4">
      <select className="form-select me-2" onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="dairy">Dairy</option>
      </select>

      <select className="form-select" onChange={(e) => setSortOption(e.target.value)}>
        <option value="">Sort By</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="nutri-score-asc">Nutrition Grade (Asc)</option>
        <option value="nutri-score-desc">Nutrition Grade (Desc)</option>
      </select>
    </div>
  );
};

export default FilterBar;
