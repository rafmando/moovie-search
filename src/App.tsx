import { useEffect, useState } from "react";
import { MultiFilter } from "./components/multi-filter";
import { ResultsList } from "./components/results-list";
import { AppContainer } from "./app.styled";

function App() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("");

    const [filteredData,setFilteredData] = useState([])
    const [genreList, setGenreList]: any = useState([])
    
    const fetchMovies = async () => {
        try {
          const response = await fetch(`https://raw.githubusercontent.com/almaeconomics/movies_database/main/movies.json`);
            setData(await response.json()) 
            
          } catch (err) {
            return err
        }
    }

    useEffect(() => {
        fetchMovies()
    },[])

  return (
      <AppContainer>
          <h1>Film Search</h1>
          <MultiFilter
              data={data}
              search={search}
              setSearch={setSearch}
              genreList={genreList}
              setGenreList={setGenreList}
              setFilteredData={setFilteredData}
          />
            <ResultsList filteredData={filteredData}  />        
      </AppContainer>
  );
}

export default App;
