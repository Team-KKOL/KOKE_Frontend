/*구독 스케줄 */
import React from "react";
import styled from "styled-components";
// import StyledTitle from "./StyledTitle";

const Grid = styled.div`
  background-color: #fffef8;
  height: 100vh;
`;

const MainTitle = styled.li`
  font-weight: 700;
  font-size: 20px;
  text-align: left;
  padding: 100px 0px 0px 50px;
`;

const Main = styled.div`
  width: 100vw;
  height: 23vh;
  /* border: 1px solid #949494; */
  border-radius: 15px;
  display: flex;
  padding: 30px 30px 30px 30px;
  margin: 30px 100px 100px 50px;
  background-color: #faf7e8;
  min-width: 300px;
  max-width: 1432px;
`;
const Img = styled.img`
  background-color: #ffffff;
  width: 15%;
  margin-right: 50px;
`;
const CardBody = styled.div`
  display: block;
  width: 60%;
  text-align: left;
`;
const Title = styled.p`
  font-weight: bold;
`;
const Flaver = styled.p``;
const Roastery = styled.p`
  margin-top: 3rem;
`;
const CardDate = styled.div`
  text-align: right;
  width: 30%;
`;
const DateName = styled.p`
  color: #686868;
  margin-bottom: 0px;
`;
const Date = styled.p`
  margin-bottom: 10px;
`;
const RemoveBtn = styled.button`
  border: 1px solid #949494;
  background-color: #faf7e8;
  border-radius: 20px;
  width: 60px;
  height: 30px;
`;

export default function Subscribe() {
  return (
    <Grid>
      <MainTitle>구독 스케줄</MainTitle>
      <Main>
        <Img alt="img"></Img>
        <CardBody>
          <Title>상품명</Title>
          <Flaver>맛1</Flaver>
          <Roastery>로스터리명</Roastery>
        </CardBody>

        <CardDate>
          <DateName>구독신청일</DateName>
          <Date>2022.00.00</Date>
          <DateName>배송예정일</DateName>
          <Date>2022.00.00</Date>
          <RemoveBtn>삭제</RemoveBtn>
        </CardDate>
      </Main>
    </Grid>
  );
}
