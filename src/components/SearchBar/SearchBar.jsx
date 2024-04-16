// import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  return (
    <header>
      <form values={{ query: "" }} onSubmit={onSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
export default SearchBar;
