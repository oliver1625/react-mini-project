import React from 'react'
import styled from "styled-components";

import { Card, Icon, Image, Button } from 'semantic-ui-react'
import user from '../img/user.png'

const CardBlock = () => (
  <CardStyled>
      <Card>
    <ImageStyled>
      <Image src={user} wrapped ui={false} />
    </ImageStyled>
    <Card.Content className='mb-3'>
      <Card.Header>Samantha</Card.Header>
      <Card.Meta>
        <p>Specially<span className=''>assembly</span></p>
      </Card.Meta>
      <Card.Description>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic repudiandae accusantium corporis. Repellendus ab quia aliquam, voluptatum harum, nostrum earum iure incidunt, inventore modi veritatis quasi molestias ipsam error explicabo.
      </Card.Description>
    </Card.Content>
    <Card.Content extra className='mb-3'>
      <h5>Trust</h5>
      <p>5.0 stars from 160 Votes</p>
      <div className="bottom">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        </div>
    </Card.Content>
    <Card.Content extra className='mb-3'>
      <h5>Badges</h5>
      <div className="badge">
        <i className="fa-solid fa-id-card"></i>
        <i className="fa-solid fa-id-card"></i>
      </div>
    </Card.Content>
    <Button className='btn-primary'>
    Apply
  </Button>
      </Card>
  </CardStyled>
)

export default CardBlock
const CardStyled = styled(Card)`
    .card{
      /* align-items: center; */
      padding: 1rem;
      border: 2px solid #C7C7C7;
      .content .header{
        text-align: center;
      }
      .content .meta{
        text-align: center;
      }
      .bottom{
        .icon{
            display: flex;
            align-items: center;
            p{
                margin-bottom: 0rem;
                margin-left: 1rem;

            }
        }
    }
    .fa-star{
        color: #DA2B39;
    }
    .badge{
      display: flex;
      color: grey;
      i{
        margin-right: 1rem;
        font-size: 1.2rem;
        border: 1px solid lightgrey;
        padding: 5px;
        border-radius: 50%;
      }
    }
    }
    
`
const ImageStyled = styled(Image)`
    /* align-items: center; */
    margin: auto;
    margin-bottom: 1rem;
    border-radius: 50%;
    height: 10rem;
    width: 10rem;
    border: 1px solid lightgrey;
    background: grey;
img{
  width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}
`