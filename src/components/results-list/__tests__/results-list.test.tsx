import { render, waitFor } from '@testing-library/react'
import { ResultsList } from '../results-list'
import { mockAllMovies, mockFilteredMovies} from '../../../mocks/mocks';

describe('the ResultsList component', () => {

    it('displays movies correctly when given genre array', () => {
        const { getByText } = render(<ResultsList filterData={mockFilteredMovies} />);
        waitFor(() => expect(getByText('Aileen Wuornos: The Selling of a Serial Killer')).toBeInTheDocument())
    })

    it('displays no movies at all when given empty genre array', () => {
        const {getByText} = render(<ResultsList filterData={[]} />);
        waitFor(() => expect(getByText('Aileen Wuornos: The Selling of a Serial Killer')).not.toBeInTheDocument())

    })
    
})