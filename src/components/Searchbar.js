import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const Searchbar = () => {
  useEffect(() => {
    searchValue.current.focus();
  }, []);
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search your favourite Cocktail here ☻</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};
export default Searchbar;
