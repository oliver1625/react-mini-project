import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import styled from 'styled-components';
import CardBlock from './Components/CardBlock';
import NavBarTop from './Components/NavBarTop';
import Hero from './Components/Hero';
import Top from './Components/Top';
import HelpBanner from './Components/HelpBanner';
import Review from './Components/Review';
import ProvideJob from './Components/ProvideJob';
import Footer from './Components/Footer';
import logo from './img/Jotaks-logo1.png'
import { Row, Col, DropdownToggle, UncontrolledDropdown, DropdownMenu,  DropdownItem  } from 'reactstrap';

function App() {
  return (
      <main className="">       
        <Top /> 
        <SearchStyled>
          <Row className='m-0'>
            <Col md='4'>
            <img src={logo} alt="" />
            </Col>
            <Col md='8'>
            <div className="d-flex right">
              <UncontrolledDropdown>
              <DropdownToggle
                caret
                nav
              >
                All Categories
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
              </UncontrolledDropdown>
              <input type="text" placeholder="Search Tasks Here" />
          </div> 
            </Col>
          </Row>        
        </SearchStyled>
        <NavBarTop />
        <Hero />
        <HelpBanner />
        <Review />
        <ProvideJob />
        <Footer />
      </main>
  )
}
export default App;

const SearchStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 0;
  .col-md-4{
    @media (max-width: 767px) {
            margin: auto;
            width: 40%;
            margin-bottom: 1rem !important;
    }
  }
  img{
    width: 15rem;
    @media (max-width: 767px) {
            width: 100%
    }
  }
  .right{
    border: 1px solid #2274A4;
  padding: 5px;
  border-radius: 5px;
  margin-left: 1rem;
  @media (max-width: 767px) {
    margin-left: 0rem !important;

    }
    input{
    border: none;
    padding: 1rem;
    width: 100%;
  }
  .dropdown{
    a{
      height: 100%;
      border: none;
      padding: 1.2rem;
      color: var(--text-color);
      font-weight: 600;
      border-right: 1px solid lightgray;
    }
  }
  }
`