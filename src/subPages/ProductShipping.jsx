import React from 'react'
import styled from 'styled-components'

const Outer = styled.div`
  background-color: ${({theme}) => theme.colors.lightBrown};
  padding: 30px;
` 

const TextBox = styled.div``

export default function ProductShipping() {
  return (
    <Outer>
        <TextBox>
          <h6>배송안내</h6>
          <p>배송 기간은 결제일로부터 1일 ~ 5일 정도 소요될 수 있습니다.<br />
            제주도를 포함한 도서산간 지역은 추가 배송일과 추가 배송비 입금 요청이 있을 수 있습니다.</p>
        </TextBox>
        <TextBox>
          <h6>교환 / 반품 / 환불</h6>
          <p>교환 및 반품은 상품 수령일로부터 7일 이내에 코케 고객센터(070-4647-1868)로 접수해 주세요.<br />
            원두(드립백 포함)는 신선 제품입니다. 고객의 변심에 의한 교환 및 반품은 불가합니다.<br />
            분쇄 옵션 선택 실수로 인한 교환 및 반품은 불가합니다.<br />
            제품 하자가 있는 경우 전액이 환불됩니다 (반품 배송비 포함)</p>
        </TextBox>
    </Outer>
  )
}
