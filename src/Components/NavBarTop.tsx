import React from 'react'
import styled from 'styled-components'
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, NavbarText, NavLink, DropdownToggle, UncontrolledDropdown, DropdownMenu,  DropdownItem  } from 'reactstrap';

function NavBarTop() {
  return (
      <StyledNavBar>
        <Navbar
          color="light"
          className=''
          expand="md"
          light
        >
          <NavbarToggler onClick={function noRefCheck(){}} />
          <Collapse navbar>
              <Nav
                className="me-auto"
                navbar
              >
                <NavItem>
                  <NavLink className='pl-0'>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    About Us
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown
                  inNavbar
                  nav
                >
                  <DropdownToggle
                    caret
                    nav
                  >
                    Shop
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown
                  inNavbar
                  nav
                >
                  <DropdownToggle
                    caret
                    nav
                  >
                    Task
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown
                  inNavbar
                  nav
                >
                  <DropdownToggle
                    caret
                    nav
                  >
                    Jobs
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink>
                    Post Jobs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    Browse Jobs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
              <NavbarText>
                Register/ Login
              </NavbarText>
          </Collapse>
        </Navbar>
      </StyledNavBar>
  )
}

export default NavBarTop


const StyledNavBar = styled.div`
.navbar{
  /* padding: 1rem 1.25rem !important; */
  border: 1px solid lightgrey;
}
.nav-link{
  padding: 1rem 1.5rem !important;
  padding-left: 0 !important;
  font-size: 1.25rem;
}
  font-weight: 700;
`;