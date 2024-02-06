export const getFilteredMovies = (movies: any, genreArr: any, search: any) => {
    let updatedMovieList: any = []
    const stringToLookUp = genreArr.length != 0 ? genreArr.join('').toLowerCase().split('').sort().join(''): ''


    if (genreArr.length !== 0) {
        updatedMovieList = movies.filter((movie: any) => {
            let modifiedString = movie.Genre.toLowerCase().replace(/\|/g, '').split('').sort().join('')
            
            if (modifiedString === stringToLookUp ) {
                return true
            } 
        })
    }

    if (search) {
        updatedMovieList = movies.filter((movie: any) => {
            let modifiedString = movie.Genre.toLowerCase().replace(/\|/g, '').split('').sort().join('')
            let lowerCasedSearch = search.toLowerCase();
            let titleLowerCased = movie.Title.toString().toLowerCase()
           
            if (modifiedString === stringToLookUp && titleLowerCased.includes(lowerCasedSearch)) {
                return true
            } 
        })
    }

    if (genreArr.length === 0) {
        updatedMovieList = movies.filter((genre: any) => {
            return true
        })
    }
  
    return updatedMovieList
}