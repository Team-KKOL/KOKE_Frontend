import React from 'react'
import styled from 'styled-components'

const Outer = styled.div`
  background-color: ${({theme}) => theme.colors.lightBrown}
` 

export default function ProductReview() {
  return (
    <Outer>
        ProductReview_상품리뷰
    </Outer>
  )
}
