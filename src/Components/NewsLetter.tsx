import React from 'react'
import styled from 'styled-components'

import { Form, FormGroup, Button, Input } from 'reactstrap'

function NewsLetter() {
  return (
    <NewsLetterStyled>
        <Form>
            <h3>NewsLetter</h3>
            <p className='mb-3'>There are many variations of passages of Lorem psum available, but the majority have suffered alteration in some form, by injected</p>
            <FormGroup>
                <Input
                id="newsletter"
                name="newsletter"
                placeholder="Enter Your Email"
                />
            </FormGroup>
            <Button>
                SUBSCRIBE
            </Button>
        </Form>
    </NewsLetterStyled>
  )
}

export default NewsLetter

const NewsLetterStyled = styled.div`
margin-top: 1rem;
    border: 2px solid #2274A4;
    padding: 1.25rem;
    h3{
        color: #DA2B39; 
    }
    p{
        font-size: 0.75rem
    }
    button{
        background: #2274A4 !important;
        border: none;
    }
`