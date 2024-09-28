import  { useState } from 'react';
import { PropTypes } from "prop-types";

const SearchBar = ({ onSearch }) => {
    SearchBar.propTypes = {
        onSearch: PropTypes.any,
       
      };
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search by product name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-primary mt-2" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
