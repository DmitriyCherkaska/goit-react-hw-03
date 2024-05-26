// import some from "./Feedback.module.css";

const SearchBox = ({ filter, setFilter }) => {
  return (
    <input
        type="text"
        placeholder="Search by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
  );
};

export default SearchBox;
