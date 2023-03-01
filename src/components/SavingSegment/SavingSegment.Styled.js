import styled from "styled-components";

export const Wrapper = {Div: styled.div`
    width: 30%;
    background-color: white;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
    overflow: auto;

    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: gray;
        border-radius: 5px;
    }
`}

export const InputField = {Div: styled.div`
    margin: 10px 30px 10px 20px;
`}

export const StyledLabel = {Label: styled.label`
    font-size: 15px;
    display: inline-block;
    margin: 10px 0px;
    font-family: 'Roboto', sans-serif;
`}

export const StyledInput = {Input: styled.input`
    width: 100%;
    padding: 8px;
`}

export const FlexDiv = {Div: styled.div`
    display: flex;
    justify-content: flex-end;
`}

export const Traits = {Span: styled.span`
    font-size: 15px;
    margin: 0 15px;
    font-family: 'Roboto', sans-serif;
    position: relative;
    &:before {
        content: '';
        position: absolute;
        top: 3px;
        left: -14px;
        width: 10px;
        height: 10px;
        background-color: ${(props) => props.traits === 'user' ? 'lightgreen' : 'red'};
        border-radius: 50%;
    }
`}

export const StyledSelect = {Select: styled.select`
    width: 80%;
    padding: 8px;
    margin: 20px 15px 0 0;
    display: block;
    margin-left: 15px;
`}

export const AddSchema = {Link: styled.button`
    border: none;
    color: #3db2cc;
    margin-left: 25px;
    text-decoration: underline;
    position: relative;
    &:before {
        content: '+';
        position: absolute;
        left: -12px;
    }
    &:hover {
        cursor: pointer;
    }
`}

export const SubmitField = {Div: styled.div`
    margin: 145px 30px 10px 20px;
`}

export const Submit = {Button: styled.button`
    padding: 12px;
    color: white;
    border: 2px solid gainsboro;
    border-radius: 5px;
    background-color: #4FA095;
    &:hover {
        cursor: pointer;
    }
`}

export const Cancel = {Button: styled.button`
    padding: 12px;
    color: #A61F69;
    border: none;
    border-radius: 5px;
    background-color: transparent;
    font-weight: 600;
    margin-left: 10px;
    &:hover {
        cursor: pointer;
    }
`}

export const Dropdown = {Div: styled.div`
    display: flex;
    align-items: center;
    position: relative;
    &:before {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        top: 33px;
        left: -5px;
        background-color: ${({traitsCheck}) => traitsCheck === 'First Name' || traitsCheck === 'Last Name' ? 'lightgreen' : 'red'};
        border-radius: 50%;
    }
`}

export const RemoveIcon = {Div: styled.div`
    width: 40px;
    height: 40px;
    background-color: #e3fdff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`}
