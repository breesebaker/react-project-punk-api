import Card from "./Card";
import CardList from "./CardList";

const Container = (props) => {
  const { searchResults } = props;

  return (
    <div className="Container">
      <div className="Container-content">
        <h1>Your Search Results!</h1>
      </div>

      <div className="Container-cards">
        <Card />
        {searchResults.map((beer, index) => {
          if (searchResults.length > 0) {
            document.querySelector(".Container-logo").style.display = "none";
          }
          return (
            <CardList
              key={index}
              name={beer.name}
              tagline={beer.tagline}
              image={beer.image_url}
              description={beer.description}
              abv={beer.abv}
              firstBrewed={beer.first_brewed}
              foodPairing={beer.food_pairing}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Container;
