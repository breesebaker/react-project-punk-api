const SearchBox = (props) => {
  const { searchEvent } = props;

  return (
      <>
      <div className="searchbox">
          <form>
              <input type="text" placeholder="Search your brew" onChange={searchEvent} />
          </form>  
      </div>
      </>
  );
};

export default SearchBox;