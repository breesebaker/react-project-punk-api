import FilterList from "./FilterList";
import { useState } from "react";

const FilterItem = (props) => {
  const [showList, setShowList] = useState(false);

  const handleClick = () => {
    setShowList(!showList);
  };

  return (
    <>
      <div className="filterbox">
        <form>
          <input type="checkbox" onClick={handleClick} />
          <label>Filter beer search</label>
        </form>
      </div>
      <FilterList showList={showList} />
    </>
  );
};

export default FilterItem;
