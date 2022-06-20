import React from 'react'
import styled from "styled-components";
import { Container, Row, Col, DropdownToggle } from 'reactstrap';
import cashless from '../img/cashless.svg'
import reactangle126 from '../img/Rectangle 126.svg'
import CardBlock from './CardBlock';

function Hero() {
    return (
        <div>
            <Container fluid className='py-3'>
                <Row>
                    <Col className="bg-light">
                        <Image>
                            <img src={cashless} alt="" />
                            <p>Working Together is better than working alone</p>
                        </Image>
                    </Col>
                    <Col className="bg-light">
                        <Image>
                            <img src={cashless} alt="" />
                            <p>Up to 25% cheaper than franchise dealers</p>
                        </Image>
                    </Col>
                    <Col className="bg-light">
                        <Image>
                            <img src={cashless} alt="" />
                            <p>Working Together is better than working alone</p>
                        </Image>
                    </Col>
                    <Col className="bg-light">
                        <Image>
                            <img src={cashless} alt="" />
                            <p>Task can be assigned at any day any time</p>
                        </Image>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
            <Row>
                <Col sm='2' className='d-none d-sm-block'>
                    <HeroLeft>
                    <img className='' src={reactangle126} alt="" />
                    </HeroLeft>
                </Col>
                <Col sm='10' className='px-0'>
                <Row>
                    <Col sm='6' lg='4' className="bg-light pt-2">
                        <CardBlock />
                    </Col>
                    <Col sm='6' lg='4' className="bg-light pt-2">
                        <CardBlock />
                    </Col>
                    <Col sm='6' lg='4' className="bg-light pt-2">
                        <CardBlock />
                    </Col>
                </Row>
                    
                </Col>
            </Row>
            </Container>

        </div>
    )
}

export default Hero

const Image = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 13rem;
        height: 100%;
        object-fit: contain;
    }
    p{
        font-size: 1rem;
        text-align: center;
        margin-top: 1rem;
    }
`
const HeroLeft = styled.div`
width: 100%;
        height: 100%;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`