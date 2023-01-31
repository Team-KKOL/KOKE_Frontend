import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
 
const Outer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.Beige};
    display: flex;
    justify-content: center;
    align-items: center;
`

const Text = styled.p`
    font-size: 20px;
    color: ${({theme}) => theme.colors.darkBrown};
`

export default function MissingPage() {
  return (
        <Outer>
            <Text>없는 페이지입니다</Text>
        </Outer>
  )
}
