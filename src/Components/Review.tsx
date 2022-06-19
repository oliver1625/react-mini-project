import React from 'react'
import styled from 'styled-components'
import { Row, Col, Container  } from 'reactstrap';
import ReviewBlock from './ReviewBlock';
import rectangle93 from '../img/Rectangle 93.svg'
import NewsLetter from './NewsLetter';

function Review() {
  return (
    <ReviewStyled>
        <Container fluid >
        <Row>
            <Col md='3'>
                <ReviewLeft>
                <img src={rectangle93} alt="" />
                </ReviewLeft>
                <NewsLetter />
            </Col>
            <Col md='9'>
                <h3>See Client's Review on Completed Task</h3>
                <ReviewBlock />
                <ReviewBlock />
            </Col>
        </Row>
        </Container>
    </ReviewStyled>
  )
}

export default Review

const ReviewStyled = styled.div`
    padding: 2rem 0;
    h3{
        margin: 1.5rem 0;
        text-align: center;
    }
`;

const ReviewLeft = styled.div`
        width: 100%;
        height: 55%;
        @media (max-width: 767px) {
            height: auto; 
        }  
        img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`