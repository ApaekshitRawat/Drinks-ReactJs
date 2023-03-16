import { useGlobalContext } from "../context";
import Cocktail from "./Cocktail";
import Loading from "./Loading";

const CocktailList = () => {
  const { cocktail, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktail.length < 1) {
    return <h2 className="section-title">No such cocktail !!</h2>;
  } else {
    return (
      <section className="section">
        <h2 className="section-title">Cocktails !!</h2>
        <div className="cocktails-center">
          {cocktail.map((list) => {
            return <Cocktail key={list.id} {...list} />;
          })}
        </div>
      </section>
    );
  }
};
export default CocktailList;
