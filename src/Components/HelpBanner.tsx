import React from 'react'
import styled from "styled-components";
import helpbanner from '../img/Rectangle 90.svg'

function HelpBanner() {
  return (
    <HelpBannerStyled>
        <img src={helpbanner} alt="" />
    </HelpBannerStyled>
  )
}

export default HelpBanner

const HelpBannerStyled = styled.div`

`