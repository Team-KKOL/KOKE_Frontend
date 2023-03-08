import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { unMainPage, unTopHeader } from "../store";

const Main = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #fffef8;
  margin: 0px;
  padding: 0px;
`;

const Category = styled.div`
  margin: 0px;
  border-right: 2px solid #d7ba28;
  margin-top: 100px;
  margin-left: 50px;
  width: 12vw;
  height: 500px;
  text-decoration: none;
  flex-shrink: 0;
  min-width: 213px;
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
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(unTopHeader());
    dispatch(unMainPage());
  }, []);

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
