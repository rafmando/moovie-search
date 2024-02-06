import { render, waitFor } from '@testing-library/react'
import { MultiFilter } from '../multi-filter'
import { mockAllMovies, mockFilteredMovies, mockGenres } from '../../../mocks/mocks';

describe('the MultiFilter component', () => {

    it('displays genres correctly when given genre array', () => {
        const {getAllByText } = render(<MultiFilter data={mockAllMovies} setFilteredData={mockFilteredMovies} search={''} genreList={mockGenres} />);
        waitFor(() => expect(getAllByText('Documentary')[1]).toBeInTheDocument())
        waitFor(() => expect(getAllByText('Crime')[1]).toBeInTheDocument()) 
    })

    it('displays no genres at all when given empty genre array', () => {
        const {getAllByText} = render(<MultiFilter data={mockAllMovies} setFilteredData={[]} search={''} genreList={[]} />);
        waitFor(() => expect(getAllByText('Documentary')[1]).not.toBeInTheDocument())
        waitFor(() => expect(getAllByText('Crime')[1]).not.toBeInTheDocument())
    })
    
})