import { mockAllMovies, mockFilteredMovies, mockGenres } from "../../../../mocks/mocks";
import { getFilteredMovies } from "../helpers";

describe('the GetFilteredMovies helper', () => {
    it("returns a correct array when genres are given", () => {
        expect(getFilteredMovies(mockAllMovies, ['Comedy', 'Drama'], '')).toEqual(
            [{
                imdbId: 114319,
                ImdbLink: "http://www.imdb.com/title/tt114319",
                Title: "Sabrina (1995)",
                IMDBScore: 6.3,
                Genre: "Comedy|Drama",
                Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3OTQ2NTk2ODNeQTJeQWpwZ15BbWU4MDQ3NTM4MDMx._V1_UX182_CR0,0,182,268_AL_.jpg"
            },]
        );
    });

    it("returns an empty array when multiple invalid genres are given", () => {
        expect(getFilteredMovies(mockAllMovies,['Action','Family','Horror','Adventure'],'')).toEqual(
            []
        );
    });

    
    it("returns a correct array when genres are given", () => {
        expect(getFilteredMovies(mockAllMovies,['Action','Drama','Crime'],'Heat')).toEqual(
          [{
            imdbId: 113277,
            ImdbLink: "http://www.imdb.com/title/tt113277",
            Title: "Heat (1995)",
            IMDBScore: 8.2,
            Genre: "Action|Crime|Drama",
            Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNGMwNzUwNjYtZWM5NS00YzMyLWI4NjAtNjM0ZDBiMzE1YWExXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },]
        );
    });

    it("returns an empty array when correct genres but invalid search ", () => {
        expect(getFilteredMovies(mockAllMovies,['Action','Drama','Crime'],'Heatoooo')).toEqual(
          []
        );
    });
})