

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search-input"
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
    ></input>
  );
};
