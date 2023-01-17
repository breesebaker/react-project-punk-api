import NavBar from "./components/Navbar/NavBar";
import Container from "./components/CardContainer/Container";
import { useState } from "react";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [filterResults, setFilterResults] = useState([
    { value: "newReleases", label: "New Releases" },
    { value: "moreABV", label: "More ABV please" },
    { value: "theClassics", label: "The Classics" },
  ]);

  return (
    <>
      <div className="main-page">
        <NavBar
          setSearchResults={setSearchResults}
          setFilterResults={setFilterResults}
        />
        <Container
          searchResults={searchResults}
          filterResults={filterResults}
        />
      </div>
    </>
  );
};

export default App;
