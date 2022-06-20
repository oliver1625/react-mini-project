import React from 'react'
import styled from "styled-components";
import rectangle90 from '../img/Rectangle 90.svg'
import path148 from '../img/Path 148.svg'
import { Row, Col, Button, Container } from 'reactstrap'


function HelpBanner() {
  return (
    <HelpBannerStyled>
      <div className="help-banner">
      {/* <img src={rectangle90} alt="" /> */}
        <div className="help-banner-left">
          {/* <img src={path148} className='left-img' alt="" /> */}
          <div className="inner">
            <Button>
                Join Jotaks
            </Button>
            <h5 className='my-3'>Signup to perform tasks and helping hand</h5>
            <h3>Need a helping hand?</h3>
          </div>
        </div>
      </div>

    </HelpBannerStyled>
  )
}

export default HelpBanner

const HelpBannerStyled = styled.div`
padding: 1rem 0;
  .left-img{
    width: 70%;
    height: 30vh;
    object-fit: cover;
  }
  .inner{
    width: 50%;
    padding-left: 2rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    h3,h5{
      color: white;
    }
    button{
        background: #2274A4 !important;
        border: none;
        padding: 0.75rem 1.75rem;
    }
  }
`