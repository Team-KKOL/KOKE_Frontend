import React from 'react'
import styled from 'styled-components'

const Outer = styled.div`
  background-color: ${({theme}) => theme.colors.lightBrown};
` 

const ReviewNone = styled.div`
  width: 100%;
  height: 300px;
  line-height: 300px;
  text-align: center;
`

export default function ProductReview() {
  return (
    <Outer>
        <ReviewNone>해당 상품에 대한 리뷰가 아직 없습니다</ReviewNone>
    </Outer>
  )
}
