import React from 'react'
import styled from 'styled-components'
import { CardImg, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardFooter } from 'reactstrap'

import user from '../img/user.png'

function ReviewBlock() {
    return (
        <ReviewBlockStyled>
                <Card>
                    <CardBody>
                    <ImageStyled>
                    <img src={user}
                    />
                    </ImageStyled>
                    <div className="">
                    <CardTitle tag="h4" className='fw-700'>
                        Dissassemble/move bed frame and mattress
                    </CardTitle>
                    <CardSubtitle
                        className="my-3 text-muted"
                        tag="h6"
                    >
                    <div className="subtitle-bottom">
                        <div className="icon">
                        <i className="fa-solid fa-earth-asia"></i>
                        <p>Remote</p>
                        </div>
                        <div className="icon">
                        <i className="fa-solid fa-calendar"></i>
                        <p>Wednesday</p>
                        </div>
                        <div className="icon">
                        <i className="fa-solid fa-timer"></i>
                        <p>Anytime</p>
                        </div>
                    </div>
                    </CardSubtitle>
                    <CardText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eaque pariatur sequi officia minus labore eum eligendi esse. Id, odit.
                    </CardText>
                    <CardFooterStyled>
                        <div className="">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        </div>
                        <h3>Rs 3435</h3>
                    </CardFooterStyled>
                    </div>
                    <TaskCompleted>
                        TASKCOMPLETED
                    </TaskCompleted>
                    </CardBody>
                </Card>
        </ReviewBlockStyled>
    )
}

export default ReviewBlock

const ReviewBlockStyled = styled.div`
margin-bottom: 2rem;
.card{
    border: 2px solid #C7C7C7;
}
.card-body{
    padding: 2rem;
    display: flex;
    @media (max-width: 767px) {
        flex-direction: column;
    } 
}
    .subtitle-bottom{
            display: flex;
            align-items: center;
            justify-content: space-between;
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
`;
const ImageStyled = styled.div`
    margin: auto;
    border-radius: 50%;
    border: 1px solid lightgrey;
    margin-right: 2rem;
    background: grey;
    @media (max-width: 767px) {
        margin-right: auto;
        margin-bottom: 1rem;
    } 
    img{
    height: 7rem;
    width: 7rem;
    object-fit: cover;
    border-radius: 50%;
}

`
const CardFooterStyled = styled.div`
    display: flex;
            align-items: center;
            justify-content: space-between;

`
const TaskCompleted = styled.div`
    background-color: #DA2B39;
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0 0 0 30px;
`
