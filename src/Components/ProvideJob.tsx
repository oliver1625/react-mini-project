import React from 'react'
import styled from 'styled-components'
import { Row, Col, Button, Container } from 'reactstrap'

function ProvideJob() {
  return (
    <ProvideJobStyled>
        <Row className='h-100 w-100 m-0'>
            <Col sm='4'md='8' className='p-0'>
                <div className="left"></div>
            </Col>
            <Col sm='8' md='4' className='p-0'>
                <div className="right">
                    <h4>Provide Job as You Wish</h4>
                    <Button>
                        Post Job
                    </Button>
                </div>
            </Col>
        </Row>
    </ProvideJobStyled>
  )
}

export default ProvideJob

const ProvideJobStyled = styled.div`
    height: 30vh;
    .container{
        width: 100% !important;
        height: 100%;
    }
    .left{
        background: #C7C7C7;
        height: 100%;
    }
    .right{
        background-color: #DA2B39;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h4{
            color: white;
            margin-bottom: 1.5rem;
        }
    }
    button{
        background: #2274A4 !important;
        border: none;
        padding: 0.75rem 1.75rem;
    }
`