import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  height: 100vh;
  background-color: #fffef8;
`;

const Category = styled.div`
  border-right: 2px solid #d7ba28;
  margin-top: 100px;
  width: 200px;
  height: 500px;
  text-decoration: none;
  flex-shrink: 0;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 60px;
  margin-left: 10px;
  text-align: left;
`;

const Detail = styled.a`
  text-decoration: none;
  color: #000000;
  &:hover {
    background-color: #b4712f;
    color: #ffffff;
    border: 1px soLid #b4712f;
    border-radius: 20px;
    padding: 10px 20px 10px 20px;
  }
`;

const Li = styled.li`
  /* .marker:hover {
    background-color: #b4712f;
    border: 1px soLid #b4712f;
  }
  &:hover {
    background-color: #b4712f;
    border: 1px soLid #b4712f;
    border-radius: 20px;
    width: 200px;
    padding: 10px 10px 10px 10px;
  } */
`;

export default function MyPage() {
  return (
    <Main>
      <Category>
        <Title>마이페이지</Title>
        <ul>
          <Li>
            {/* <Link to="/Mypage/Subscribe">구독 스케줄</Link> */}
            <Detail href="/MyPage/SubscriptionSchedule">구독 스케줄</Detail>
          </Li>
        </ul>
        <ul>
          <Li>
            <Detail href="/MyPage/MyCart">My 주문내역</Detail>
          </Li>
        </ul>
        <ul>
          <Li>
            <Detail href="/MyPage/ProductOfInterest">찜 상품</Detail>
          </Li>
        </ul>
        <ul>
          <Li>
            <Detail href="/MyPage/RecentlyViewedProducts">최근 본 상품</Detail>
          </Li>
        </ul>
        <ul>
          <Li>
            <Detail href="/MyPage/roasteryOfInterest">관심 로스터리</Detail>
          </Li>
        </ul>
        <ul>
          <Li>
            <Detail href="/MyPage/MyReview">My 리뷰</Detail>
          </Li>
        </ul>
        <ul>
          <Li>
            <Detail href="/MyPage/MyInformation">My 정보</Detail>
          </Li>
        </ul>
      </Category>
      <Outlet></Outlet>
    </Main>
  );
}
