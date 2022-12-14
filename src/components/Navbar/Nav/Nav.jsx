import Searchbox from "../SearchBox";
import FilterList from "../FilterList"
import FilterItem from "../FilterItems"

const Nav = () => {

  return (
    <div className="Nav">
      <h1>Nav Bar</h1>
      <Searchbox />
      <FilterItem />
      <FilterList />
    </div>
  );
};

export default Nav;