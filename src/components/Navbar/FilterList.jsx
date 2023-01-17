const FilterList = (props) => {
  const { showList } = props;

  if (!showList) {
    return showList;
  }

  return (
    <div className="filterlist">
      <form>
        <input type="checkbox" />
        <label>High ABV</label>
        <br />

        <input type="checkbox" />
        <label>Classic Range</label>
        <br />

        <input type="checkbox" />
        <label>Acidic Levels</label>
      </form>
    </div>
  );
};

export default FilterList;
