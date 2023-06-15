import { useState } from "react";
import PropTypes from "prop-types";

const SearchField = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    performSearch();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      performSearch();
    }
  };

  const performSearch = () => {
    onSearch(searchTerm);
  };

  const handleClearClick = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <div className="flex items-center m-3 rounded-l">
      <input
        type="text"
        placeholder="Search"
        className="px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleSearchClick}
      >
        Search
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded-r hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        onClick={handleClearClick}
      >
        Clear
      </button>
    </div>
  );
};

SearchField.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchField;
