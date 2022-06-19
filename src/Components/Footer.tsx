import React from 'react'
import styled from 'styled-components'
import { Row, Col, Button, Container } from 'reactstrap'
import logo from '../img/Jotaks-logo1.png'
function Footer() {
  return (
    <div className="footer">
        <FooterStyled>
            <Container className='h-100'>
                <div className="wrapper">
                <Row>
                    <Col xs='6' md='3' className='footer-border'>
                        <div className="footer-inner ">
                            <p>About</p>
                            <p>Community</p>
                            <p>Team</p>
                            <p>Carrer</p>
                        </div>
                    </Col>
                    <Col xs='6' md='3' className='footer-border'>
                        <div className="footer-inner">
                            <p>About</p>
                            <p>Community</p>
                            <p>Team</p>
                            <p>Carrer</p>
                        </div>
                    </Col>
                    <Col xs='6' md='3' className='footer-border'>
                        <div className="footer-inner">
                            <p>About</p>
                            <p>Community</p>
                            <p>Team</p>
                            <p>Carrer</p>
                        </div>
                    </Col>
                    <Col xs='6' md='3'>
                        <div className="footer-inner">
                            <h5>Write us at</h5>
                            <p>Dontaion Center</p>
                        </div>
                    </Col>
                </Row>
                <CopyRight>
                    <Row>
                        <Col sm='6' md='4' className='mb-md-3'>
                            <div className="">
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                        </Col>
                        <Col sm='6' md='4' className='mb-md-3'>
                            <div className="middle">
                                All RIght Reserved Jotalks 2021 Developed By sofrBenzinfosys Pvt Ltd
                            </div>
                        </Col>
                        <Col sm='6' md='4' className='mb-md-3'>
                            <img src={logo} alt="" />
                        </Col>
                    </Row>
                </CopyRight>
                </div>
            </Container>
        </FooterStyled>
    </div>

  )
}

export default Footer

const FooterStyled = styled.div`
    height: 75vh;
    @media (max-width: 767px) {
        height: 90vh;
    } 
.wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}
    p,h5{
        color: white;
        
    }
    .footer-border{
        border-right: 2px solid white;
        @media (max-width: 767px) {
            border-right: none;
    } 
    }
    
    .row{
        align-items: center;
        display: flex;
        justify-content: center;
        width: 100%;
    }
`
const CopyRight = styled.div`
font-size: 1.2rem;
color: white;
border: 2px solid white;
width: 100%;
.row{
    width: 90%;
    margin: auto;
    padding: 1rem;
    @media (max-width: 767px) {
        text-align: center;
    } 
}
i{
    margin-right: 1rem;
}
.middle{
}
    img{
        height: 5rem;
        width: 10rem;
        object-fit: contain;
        float: right;
        @media (max-width: 767px) {
            float: none;
    } 
    }
`