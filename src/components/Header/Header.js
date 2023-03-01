import React from 'react'
import { Styled, StyledIcon, HeaderValue } from './Header.Styled';
import { BiChevronLeft } from "react-icons/bi";

const Header = ({headerValue}) => {
  return (
    <Styled.Header>
        <div>
            <StyledIcon.Icon className='leftArrow-icon' />
        </div>
        <HeaderValue.Value>{headerValue}</HeaderValue.Value>
    </Styled.Header>
  )
}
export default Header;
