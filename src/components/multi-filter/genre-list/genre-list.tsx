import { GenreCard, GenreListContainer } from "./genre-list.styled"
import { FaTrashAlt } from "react-icons/fa";


export const GenreList = ({data,genreList,removeGenre}:any) => {
    return (
        <GenreListContainer style={{display: 'flex'}}>
            {genreList.map((genre: any) => {
                return (
                    <GenreCard key={genre}  data-testid='genre-card'>
                        {genre}
                        <button onClick={() => removeGenre(genre)} data-testid="remove-genre"><FaTrashAlt style={{width:'20px',height: '20px',color:'red'}} /></button>
                    </GenreCard>)
            })} 
        </GenreListContainer>
    )
}