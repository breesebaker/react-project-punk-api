import SearchBox from "./SearchBox";
import FilterItem from "./FilterItem";
import FilterList from "./FilterList";

const NavBar = (props) => {
  const { setSearchResults } = props;

  const searchEvent = (event) => {
    const userSearch = event.target.value;
    fetch(`https://api.punkapi.com/v2/beers?per_page=80`)
      .then((res) => {
        return res.json();
      })
      .then((returnedData) => {
        const filterData = returnedData.filter((beer) => {
          return beer.name.toLowerCase().includes(userSearch.toLowerCase());
        });
        setSearchResults(filterData);
      });
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-title">
            <h1>BrewDog Punk API</h1>
        </div>
        <div className="navbar-content">
          <SearchBox searchEvent={searchEvent} />
          <FilterItem />
          <FilterList />
        </div>
      </div>
    </>
  );
};

export default NavBar;
