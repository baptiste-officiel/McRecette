import { Link } from "react-router-dom";
import styled from "styled-components";
Link

export const Title = styled(Link)`
    text-decoration: none;
    color: #313131;

    h1{
    text-transform: none;
    padding-left: 1rem;
    display: flex;
    font-size: 1.4rem;
    align-items: center;
    text-decoration: none;
      svg{
        width: 1.8rem;
        height: 1.8rem;
        margin-right: 0.4rem;
      }
    }
`;