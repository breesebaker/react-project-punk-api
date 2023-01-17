import NavBar from "./components/Navbar/NavBar";
import Container from "./components/CardContainer/Container";
import { useState } from "react";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [filterResults, setFilterResults] = useState([
    { value: "highABV", label: "High ABV" },
    { value: "classics", label: "Classic Range" },
    { value: "acid", label: "Acidic Levels" },
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
