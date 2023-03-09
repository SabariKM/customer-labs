import React, {useEffect, useState} from 'react'
import Header from '../Header/Header'
import SavingSegment from '../SavingSegment/SavingSegment';
import { Outer, Styled } from './ViewAudience.Styled';

const ViewAudience = () => {

    const [isClicked, setIsClicked] = useState(false);
    const [isMounted, setIsMounted] = useState(true);
    const [timer, setTimer] = useState(null);

    const saveSegmentHandler = () => {
        setIsMounted(true);
        setIsClicked(true);
    }

    const removeSegmentHandler = () => {
        setIsMounted(false);
        setTimer(setTimeout(() => setIsClicked(false), 500));
    }

    useEffect(() => {
        return () => clearTimeout(timer);
    }, [timer]);

  return (
    <>
        {isClicked && <Outer.Div onClick={removeSegmentHandler}/>}
        <Header headerValue={'View Audience'}></Header>
        <Styled.Button onClick={saveSegmentHandler} isClicked={isClicked}>Save Segment</Styled.Button>
        {isClicked && <SavingSegment removeSegment={removeSegmentHandler} isMounted={isMounted}/>}
    </>
  )
}

export default ViewAudience;
