import Searchbox from "../SearchBox";
import FilterList from "../FilterList"
import FilterItem from "../FilterItems"

const Nav = () => {

  return (
    <>
    <div className="Nav">
      <h1>Nav Bar</h1>   
        <div className="nav-inventory">
          <Searchbox />
          <FilterItem />
          <FilterList />
        </div>
    </div>
    </>
  );
};

export default Nav;