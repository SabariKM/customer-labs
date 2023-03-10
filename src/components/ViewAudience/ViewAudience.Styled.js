import styled from "styled-components";

export const Outer = {Div: styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
`}

export const Styled = {Button: styled.button`
    padding: 12px;
    color: ${(props) => props.isClicked ? 'white' : '#3db2cc'};
    text-shadow: 2px 2px 8px #8C8C8C;
    border: 2px solid gainsboro;
    margin: 50px 0 0;
    margin-left: 10%;
    font-weight: 500;
    letter-spacing: 2px;
    position: relative;
    z-index: 2;
    background-color: transparent;
    -webkit-transition: all .3s ease-out;
    -moz-transition: all .3s ease-out;
    -ms-transition: all .3s ease-out;
    -o-transition: all .3s ease-out;
    transition: all .3s ease-out;
    &:after {
        content: '';
        position: absolute;
        z-index: -1;
        inset: 0;
        background-color: #3db2cc;
        transform: scale(0, 1);
        transform-origin: right;
        -webkit-transition: all .3s ease-out;
        -moz-transition: all .3s ease-out;
        -ms-transition: all .3s ease-out;
        -o-transition: all .3s ease-out;
        transition: all .3s ease-out;
    }
    &:hover {
        cursor: pointer;
        color: white;
        -webkit-transition: all .3s ease-out;
        -moz-transition: all .3s ease-out;
        -ms-transition: all .3s ease-out;
        -o-transition: all .3s ease-out;
        transition: all .3s ease-out;
    }
    &:hover::after {
        cursor: pointer;
        color: white;
        transform: scale(1,1);
        -webkit-transition: all .3s ease-out;
        -moz-transition: all .3s ease-out;
        -ms-transition: all .3s ease-out;
        -o-transition: all .3s ease-out;
        transition: all .3s ease-out;
    }
`}
