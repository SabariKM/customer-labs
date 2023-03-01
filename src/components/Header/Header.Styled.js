import styled from 'styled-components';
import { BiChevronLeft } from "react-icons/bi";

export const Styled = {Header: styled.header`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #4cdeff;
    padding: 8px;
`}

export const StyledIcon ={Icon: styled(BiChevronLeft)`
    color: white;
    width: 28px;
    height: 28px;
    margin-top: 6px;
`}

export const HeaderValue = {Value: styled.div`
    font-size: 16px;
    color: white;
    font-weight: 600;
    margin-left: 8px;
`}
