import React from 'react'
import styled, { css } from 'styled-components'

const Outer = styled.div`
  background-color: ${({theme}) => theme.colors.lightBrown};
  width: 100%;
  min-height: 300px;
  /* margin-top: -16px; */
  padding: 30px 20px;
` 

const ReviewNone = styled.div`
  width: 100%;
  height: 300px;
  line-height: 300px;
  text-align: center;
`

const ReviewLine = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  border-bottom: 1px solid gray;
`
const ReviewData = styled.div`
  font-size: 15px;
  font-weight: 300;
  overflow: hidden;

  /* border: 1px solid black; */

  ${props =>
    props.star_ &&
    css`
      width: 100px;
       
    `}
  ${props =>
    props.text_ &&
    css`
      width: 350px;
      margin-left: 10px;
      white-space: nowrap;
      text-overflow: ellipsis;
    `}
  ${props =>
    props.userId_ &&
    css`
      width: 80px;
      text-align: center;
    `}
  ${props =>
    props.date_ &&
    css`
      width: 77px;
      text-align: end;
    `}
`  

const ReviewList = [  // 테스트용 리뷰 목록
  { star: '⭐⭐⭐⭐⭐', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat assumenda perferendis commodi, ipsam nisi deserunt recusandae illum odio non et.', userId: '아이디', date: '2023.03.23'},
  { star: '⭐⭐⭐⭐', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat assumenda perferendis commodi, ipsam nisi deserunt recusandae illum odio non et.', userId: '아이디', date: '2023.03.23'},
  { star: '⭐⭐⭐⭐⭐', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat assumenda perferendis commodi, ipsam nisi deserunt recusandae illum odio non et.', userId: '아이디', date: '2023.03.23'},
  { star: '⭐⭐⭐⭐⭐', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat assumenda perferendis commodi, ipsam nisi deserunt recusandae illum odio non et.', userId: '아이디', date: '2023.03.23'},
];

export default function ProductReview() {
  return (
    <Outer>
        {/* <ReviewNone>해당 상품에 대한 리뷰가 아직 없습니다</ReviewNone>  */}
        <ul style={{paddingLeft:'0px'}}>
          {ReviewList.map((Review, i) => (
              <li key={i} >
                  <ReviewLine>
                    <ReviewData star_>{Review.star}</ReviewData>
                    <ReviewData text_>{Review.text}</ReviewData>
                    <ReviewData userId_>{Review.userId}</ReviewData>
                    <ReviewData date_>{Review.date}</ReviewData>
                  </ReviewLine>
              </li>
          ))}
        </ul>
    </Outer>
  )
}
