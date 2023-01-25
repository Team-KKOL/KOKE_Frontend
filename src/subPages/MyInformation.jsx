import React, { useState } from "react";
import styled, { css } from "styled-components";
import Modal from "../components/Modal";

const Grid = styled.div`
  background-color: #fffef8;
  height: 100vh;
`;

const fontWeight = css`
  font-weight: bold;
`;
const StyledButton = css`
  width: 45%;
  ${fontWeight}
  border-radius: 5px;
  height: 40px;
  margin-bottom: 30px;
  padding-left: 15px;
  text-align: left;
`;

const Main = styled.div`
  width: 100vw;
  height: 23vh;
  border-radius: 15px;
  display: block;
  padding: 0px 0px 0px 0px;
  margin: 100px 0px 0px 50px;
  text-align: left;
  /* min-width: 300px;
  max-width: 1432px; */
`;
const Title = styled.li`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 30px;
  /* padding: 40px 0px 0px 0px; */
`;
const StyledDiv = styled.div`
  display: flex;
`;
const StyledLabel = styled.label`
  width: 100%;
  margin-bottom: 5px;
  ${fontWeight}
`;
const StyledInput = styled.input`
  width: 30%;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #949494;
`;
const SaveBtn = styled.button`
  border: 1px solid #b4712f;
  border-radius: 20px;
  width: 80px;
  height: 30px;
  background-color: #b4712f;
  color: #ffffff;
  margin-left: 10px;
`;
const AdressBtn = styled.button`
  background-color: #faf7e8;
  border: 1px solid #b4712f;
  ${StyledButton}
`;
const ChangeBtn = styled.button`
  background-color: #b4712f;
  border: 1px solid #b4712f;
  color: #ffffff;
  ${StyledButton}
  display:flex;
  justify-content: space-between;
  padding-top: 6px;
`;
const ChangeText = styled.p`
  color: #ffffff;
  text-align: right;
`;

const MyBtn = styled.button`
  text-align: left;
  width: 100%;
  border: none;
  margin-bottom: 10px;
  margin-right: ${(props) => props.marginRight};
  background-color: transparent;
  ${fontWeight}
`;

export default function MyInformation() {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };
  return (
    <Grid>
      <Main>
        <Title>MY 정보</Title>
        <StyledLabel>이름</StyledLabel>
        <StyledDiv>
          <StyledInput></StyledInput>
          <SaveBtn>저장</SaveBtn>
        </StyledDiv>
        <StyledLabel>연락처</StyledLabel>
        <StyledDiv>
          <StyledInput></StyledInput>
          <SaveBtn>저장</SaveBtn>
        </StyledDiv>
        <StyledLabel>배송지 정보</StyledLabel>
        <AdressBtn>주소 등록하기</AdressBtn>
        <StyledLabel>사장님 계정으로 변환</StyledLabel>

        <ChangeBtn>
          사장님이시라면<ChangeText>{">"}</ChangeText>
        </ChangeBtn>
        <MyBtn marginRight="10px" onClick={showModal}>
          로그아웃
        </MyBtn>
        {modal && <Modal setModal={setModal} />}
        <MyBtn>회원 탈퇴하기</MyBtn>
      </Main>
    </Grid>
  );
}
