import styled from 'styled-components'

export const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    flex-direction: column;
`
export const MovieCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 250px;
    padding: 50px;

    
   

    img {
        
         box-shadow: 0 7px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 10px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    border-radius: 10px;
    }
`
export const ResultsListContainer = styled.div`
    flex-wrap: wrap;
    display: flex;
    gap: 50px;
    min-height: 800px;
    padding: 25px;
    justify-content: center;
`