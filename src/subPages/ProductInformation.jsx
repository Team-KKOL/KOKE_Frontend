import React from 'react'
import styled from 'styled-components'

const Outer = styled.div`
  background-color: ${({theme}) => theme.colors.lightBrown}
` 

export default function ProductInformation() {
  return (
    <Outer>
        ProductInformation_상품필수표기정보
    </Outer>
  )
}
