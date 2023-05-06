import { motion } from "framer-motion";
import styled from "styled-components";


export const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
    margin-bottom: 4rem;
    
    @media (max-width: 350px){
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

    }
`;

export const Card = styled.div`
    padding: 0 1rem;
    div{
        width: 100%;
        height: 225px;
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #d4d4d4;
    }
    img{
        width: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 1rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
        text-transform: capitalize;
    }
`;