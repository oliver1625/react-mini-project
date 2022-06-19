import React from 'react';
import styled from "styled-components";
import { Container, Row, Col, DropdownToggle } from 'reactstrap';

function Top() {
  return (
    <TopStyled>
        <Container fluid>
        <Row>
            <Col sm='6' md='4'>
                <div className="left">
                    <p className='pl-0'>About Us</p>
                    <p>My Account</p>
                    <p>Task Browsing</p>
                </div>
            </Col>
            <Col sm='6' md='4'>               
                <div className="">
                    <p>25% Cheaper than Franchise Dealers</p>
                </div>
            </Col>
            <Col sm='6' md='4'>                
                <div className="right">
                    <p className=''>Support + 1800 900</p>
                    <p className='border-around'>ENG</p>
                    <p>USD</p>
                </div>
            </Col>
        </Row>
        </Container>
    </TopStyled>
  )
}

export default Top

const TopStyled = styled.div`
    border-bottom: 1px solid var(--border-color);
    padding: 1rem 0;
    .row{
        @media (max-width: 767px) {
        text-align: center;
    } 
    }
    p{
    padding: 1rem;
    margin-bottom: 0;
    }
    p:first-child{
    padding-left: 0rem !important;
    }
    .left{
        display: flex;
        @media (max-width: 767px) {
        justify-content: center;
        } 
    }
    .left p{
        border-right: 1px solid var(--border-color);
    }
    .right{
        display: flex;
        @media (max-width: 767px) {
        justify-content: center;
        } 
        .border-around{
        border-right: 1px solid var(--border-color);
        border-left: 1px solid var(--border-color);
    }
        /* justify-content: end; */
    }
    
`