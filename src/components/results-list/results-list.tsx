import { MovieCard, ResultsListContainer } from "../../app.styled"

export const ResultsList = ({ filteredData }: any) => {
    return (
        <ResultsListContainer>
            {filteredData ? filteredData.map((movie:any) => {
                return (
                    <MovieCard key={movie.imdbId}>
                        <img src={movie.Poster} alt="img missing" />
                        <div style={{marginTop: '30px'}}>
                            <p>Name: {movie.Title}</p>
                            <p>Genre: {movie.Genre}</p>
                        </div>
                       
                    </MovieCard>
                );
            }) : <p>Hallloooo</p>}
       </ResultsListContainer>
    )
}