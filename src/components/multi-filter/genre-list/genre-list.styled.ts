import styled from "styled-components";

export const GenreListContainer = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 20px;

`
export const GenreCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-shadow: 0 7px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 10px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    border-radius: 10px;

    button {
       background: none;
       border: none;
        margin-left: 10px;
        width: 25px;
        height: 25px;

    }

`