import styled from "styled-components";

export const FormStyle = styled.form`
    margin: 2rem auto;
    position: relative;
    width: 80%;
    input{
        display: block;
        width: 100%;
        margin: 0 auto;
        align-self: center;
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: #fff;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(100%, -50%);
        color: #fff;
    }

    @media (max-width: 400px){
        width: calc(100% - 2rem);
        /* padding: 0 1rem; */
    }
`;