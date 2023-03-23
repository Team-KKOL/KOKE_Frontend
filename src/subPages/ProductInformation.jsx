import React from 'react'
import styled from 'styled-components'

const Outer = styled.div`
  background-color: ${({theme}) => theme.colors.lightBrown};
  width: 100%;
  padding: 40px 20px;
` 

const InfoList = styled.ul`
  
`

const Info = styled.li`
  line-height: 27px;
`

export default function ProductInformation() {
  return (
    <Outer>
        <ul>
          <Info>- 식품의 유형: 커피</Info>
          <Info>- 제조원 및 소재지: 정보</Info>
          <Info>- 유통기한: 정보</Info>
          <Info>- 제조일자: 상단 표기일</Info>
          <Info>- 내용량: 정보 / 정보</Info>
          <Info>- 보관 방법: 직사광선을 피하고 온도, 습도가 낮으며 통풍이 잘 되는 곳에 보관하여 주십시오.</Info>
          <Info>- 원재료 및 함량: 정보</Info>
          <Info>- 제품문의 관련 주소 및 전화번호: 핸디엄 고객센터 1599-2681</Info>
        </ul>
    </Outer>
  )
}
 

