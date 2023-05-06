import { motion } from "framer-motion";
import styled from "styled-components";


export const DetailWrapper = styled(motion.div)`
    margin-top: 2rem;
    margin-bottom: 5rem;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    /* justify-content: center; */
    /* gap: 6rem; */
    padding: 0 1rem;
    position: relative;

    h2{
        margin-bottom: 2rem;
        text-align: center;
        letter-spacing: 1rem;
        width: 100%;
        /* font-size: 1.4rem; */
    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }

    div.image-container{
        width: 40%;
        img{
            width: 100%;
            /* height: 100%; */
            object-fit: cover;
            object-position: center;
            border-radius: 1rem;
        }
    }

    @media (max-width: 950px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* gap: 2rem; */
        margin-top: 0;

        h2{
            margin-bottom: 1rem;
            transform: translateX(0.2rem);
            font-size: 1.2rem;
            letter-spacing: 0.2rem;
            /* background-color: rebeccapurple; */
        }
        div.image-container{
        width: 70%;
        margin-bottom: 2rem;
        }
    }

    @media (max-width: 700px){
        div.image-container{
        width: 100%;
        /* padding: 0 1rem; */
        margin-bottom: 2rem;
        }
    }
`;

export const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: #fff;
    border: 3px solid #313131;
    margin-right: 2rem;
    border-radius: 0.3rem;
    cursor: pointer;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color: #313131;
    &.active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
        border: 3px solid transparent;
    }

    @media (max-width: 700px){
        /* display: block; */
        width: 100%;
        margin-bottom: 1rem;
        margin-right: 0;
            /* padding: 0 1rem; */
        /* width: 40%; */

    }

`;

export const Info = styled.div`
    margin-left: 4rem;
    max-width: 50%;
    ul{
        margin-top: 2rem;
        padding: 0 1rem;
        li{
            padding: 0.5rem 0;
            line-height: 1.6rem;
        }
    }
    p{
        margin: 2rem 0;
        /* width: 480px; */
        line-height: 1.4rem;
    }
    div ol{
        padding: 0 1rem;
        li{
            font-size: 1rem;
            line-height: 1.5rem;
            padding: 0.5rem 0;
        }
    }

    @media (max-width: 950px){
        margin-left: 0;
        width: 70%;
        max-width: none;
    }

    @media (max-width: 700px){
        width: 100%;
            /* padding: 0 1rem; */
    }
`;