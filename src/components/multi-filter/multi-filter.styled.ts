import styled from "styled-components"

export const MultiFilterContainer = styled.div`
    width: 800px;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
`

export const MultiFilterSelect = styled.select`
    width: 200px;
`

export const SearchAndFilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const SearchGenresButton = styled.button`
    width: 200px;
    cursor: pointer;
`