import styled from "styled-components";


export const Wrapper=styled.div`
    margin: 2rem auto;
    padding: 0 1rem;
    &:last-child{
        margin-bottom: 4rem;
    }
`;

export const Card=styled.div`
    min-height: 20rem;
    overflow: hidden;
    position: relative;
    h4 {
        padding: 1.4rem 0;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        z-index: 3;
        width: 90%;
        color: #fff;
        text-shadow: 0 0 2px #000;
        font-weight: 400;
    }

    img {
        position: absolute;
        bottom: 0;
        left: 0;
        border-radius: 1.2rem;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        z-index: 0;
    }
`;

export const Gradient=styled.div`
    border-radius: 1.2rem;
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;