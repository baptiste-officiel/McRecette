import styled from "styled-components";
import { NavLink } from 'react-router-dom'; 


export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
    gap: 2rem;
    width: 100%;

    @media (max-width: 550px){
        align-items: center;
        flex-wrap: wrap;
        gap: 0;
    }
`;

export const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    /* margin-right: 2rem; */
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h3{
        color: #fff;
        font-size: 0.8rem;
        font-weight: 400;
    }
    svg{
        color: #fff;
        font-size: 1.5rem;
    }

    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
    }

    @media (max-width: 550px){
        width: 50%;
        min-width: 120px;
        height: auto;
        border-radius: 1rem;
        padding: 1rem;
    }
`;