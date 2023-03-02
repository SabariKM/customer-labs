import React, {useState} from 'react'
import Header from '../Header/Header'
import SavingSegment from '../SavingSegment/SavingSegment';
import { Outer, Styled } from './ViewAudience.Styled';

const ViewAudience = () => {

    const [isClicked, setIsClicked] = useState(false)

    const saveSegmentHandler = () => {
        setIsClicked(true);
    }

    const removeSegmentHandler = () => {
        setIsClicked(false);
    }

  return (
    <>
        {isClicked && <Outer.Div onClick={removeSegmentHandler}/>}
        <Header headerValue={'View Audience'}></Header>
        <Styled.Button onClick={saveSegmentHandler} isClicked={isClicked}>Save Segment</Styled.Button>
        {isClicked && <SavingSegment removeSegment={removeSegmentHandler} isClicked={isClicked}/>}
    </>
  )
}

export default ViewAudience;
