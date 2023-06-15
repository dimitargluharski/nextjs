const SearchField = () => {
  return (
    <div className="flex items-center m-3 rounded-l">
      <input
        type="text"
        placeholder="Search"
        className="px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Search
      </button>
    </div>
  );
};

export default SearchField;
