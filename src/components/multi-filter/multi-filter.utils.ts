export const filterGenres = (movies: any) => {
    let arr = []
    
    arr = movies.filter((movie: any) => {
        if (movie.Genre) {
            return movie
        }
    }).map((movie: any) => {
        return movie.genre
    })

    return arr
}

export const filterOptions = [
    { label: 'Action', value: 'Action' },
    { label: 'Adventure', value: 'Adventure' },
    { label: 'Comedy', value: 'Comedy' },
    { label: 'Family', value: 'Family' },
    { label: 'Romance', value: 'Romance' },
    { label: 'Thriller', value: 'Thriller' },
    { label: 'Animation', value: 'Animation' },
    { label: 'Drama', value: 'Drama' },
    { label: 'Fantasy', value: 'Fantasy' },
    { label: 'Horror', value: 'Horror' },
    { label: 'Mystery', value: 'Mystery' },
    { label: 'Sci-Fi', value: 'Sci-Fi' },
    { label: 'Crime', value: 'Crime' },
    { label: 'Biography', value: 'Biography' },
    { label: 'Documentary', value: 'Documentary' },
    { label: 'Sport', value: 'Sport' },
    
]