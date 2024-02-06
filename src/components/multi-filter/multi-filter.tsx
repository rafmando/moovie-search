import { MultiFilterContainer, MultiFilterSelect, SearchAndFilterContainer, SearchGenresButton } from "./multi-filter.styled"
import { Search } from "./search/search"
import { filterOptions } from "./multi-filter.utils"
import { GenreList } from './genre-list/genre-list'
import { useEffect, useState } from 'react'
import { getFilteredMovies } from "./utils/helpers"

export const MultiFilter = ({
    data,
    search,
    setSearch,
    genreList,
    setGenreList,
    setFilteredData,
    }: any) => {
    
    const filteredMovies = getFilteredMovies(data, genreList,search)
    const [searchBtnDisabled, setSearchBtnDisabled] = useState(true)
    
    const addGenre = (e: any) => {
        e.preventDefault();
        const genre = e.target.value
        if (genreList.includes(genre)) {
            return null
        }
        setGenreList([...genreList, genre])
    }

    const removeGenre = (id: any) => {
        const tempList = genreList.filter((item:any) => item !== id);
        setGenreList(tempList);
    }

    const searchMovies = (e: any) => {
        e.preventDefault();
        setFilteredData(filteredMovies)  
    }

    useEffect(() => {
        if (genreList.length !== 0) {
            setSearchBtnDisabled(false)
        } else {
            setSearchBtnDisabled(true)
        }
    },[genreList.length])


    return (
        <MultiFilterContainer>
            <SearchAndFilterContainer>
                <Search setSearch={setSearch} setFilterActive={setFilteredData} />
                <>
                    <MultiFilterSelect onChange={(e) => addGenre(e)} data-testid="select">
                        {filterOptions.map((option) => {
                            return (
                                <option key={option.value} value={option.value} data-testid="select-option">{option.label}</option>
                            )
                        })}
                    </MultiFilterSelect>
                     <SearchGenresButton disabled={searchBtnDisabled} onClick={(e) => searchMovies(e)} data-testid="search-button">Search Filter</SearchGenresButton> 
                </>
            </SearchAndFilterContainer>
            <GenreList data={data} genreList={genreList} removeGenre={removeGenre} />
        </MultiFilterContainer>
    )
}