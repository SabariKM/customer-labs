import styled from "styled-components";

export const Outer = {Div: styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    transition: all 2s ease-in;
`}

export const Styled = {Button: styled.button`
    padding: 12px;
    color: ${(props) => props.isClicked ? 'white' : '#039f41'};
    border: 2px solid gainsboro;
    margin: 50px 0 0 200px;
    position: relative;
    z-index: 2;
    background-color: transparent;
    transition: all .5s ease-in;
    &:hover {
        cursor: pointer;
    }
`}
