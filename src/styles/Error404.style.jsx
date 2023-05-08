import { Link } from "react-router-dom";
import styled from "styled-components";

export const Error = styled.div`
    margin: 2rem auto 4rem;
    text-align: center;
    width: 80%;
    img{
        width: 100%;
        max-width: 600px;
    }
    p{
        margin-bottom: 3rem;
    }
`;

export const MainPageLink = styled(Link)`
    text-decoration: none;
    padding: 1rem 2rem;
    background: #313131;
    color: #fff;
    border-radius: 0.4rem;
    transition: 0.3s;
    border: 1px solid #313131;
    &:hover{
        background: none;
        color: #313131;
    }
`;