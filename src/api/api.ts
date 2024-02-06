export const fetchMovies = async () => {
    try {
        const response = await fetch(`https://raw.githubusercontent.com/almaeconomics/movies_database/main/movies.json`);
       return await response.json()
      } catch (err) {
        return err
    }
}
