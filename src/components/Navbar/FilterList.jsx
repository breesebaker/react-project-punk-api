const FilterList = (props) => {
  const { showList } = props;
  
  if (!showList) {
      return showList
  };

  return (
      <div className="filterlist">
      <form>
          <input type="checkbox" />
          <label>New Releases</label>
          <br />

          <input type="checkbox" />
          <label>More abv please </label>
          <br />

          <input type="checkbox" />
          <label>The Classics</label>
          

      </form>
  </div>
  );
};

export default FilterList;