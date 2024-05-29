import some from "./SearchBox.module.css";

const SearchBox = ({ filter, setFilter }) => {
  return (
    <>
      <label className={some.search}>Find contacts by name</label>
      <input
        className={some.text}
        type="text"
        placeholder="Search by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </>
  );
};

export default SearchBox;
