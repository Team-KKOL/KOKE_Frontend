import React from "react";
import axios from "axios";
import styled, { css } from "styled-components";

const button = css`
  border: 1px solid #b4712f;
  width: 100px;
  border-radius: 20px;
  /* float: center; */
`;
const StyledModal = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* z-index: 999; */
`;
const StyledDiv = styled.div`
  background-color: #faf7e8;
  border: 1px solid #b4712f;
  padding: 30px 30px 30px 30px;
  border-radius: 10px;
  text-align: center;
  width: 500px;
  z-index: 999; //최상단 위치
  //중앙배치
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;
const CloseBtn = styled.button`
  border: none;
  float: right;
  background-color: transparent;
`;
const Title = styled.p`
  font-weight: bold;
`;
const Confirm = styled.p`
  color: #686868;
  margin-bottom: 50px;
`;
const CancelBtn = styled.button`
  ${button}
  color: #b4712f;
  background-color: #faf7e8;
  margin-right: 20px;
`;
const LogoutBtn = styled.button`
  ${button}
  color: #faf7e8;
  background-color: #b4712f;
`;

export default function Modal({ setModal }) {
  const closeModal = () => {
    setModal(false);
  };
  const onSubmitLogout = async () => {
    let accessToken = "";
    await localStorage.getItem("accessToken").then((token) => {
      accessToken = token;
      console.log("logout에서 받아 올 토큰2: " + token);
    });
    axios({
      method: "GET",
      url: "http://13.125.91.209:9002/logoutUser",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8;",
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((res) => {
        localStorage.getItem("accessToken").then((value) => {
          console.log("delete accessToken : " + value);
        });
        localStorage.getItem("refreshToken").then((value) => {
          console.log("delete refreshToken : " + value);
        });
        localStorage.removeItem("accessToken").then((value) => {
          console.log("삭제됨?" + value);
        });
        localStorage.removeItem("refreshToken").then((value) => {
          console.log("삭제됨? " + value);
        });
        const test = JSON.stringify(res.data.message);
        alert(test);
      })
      .catch((err) => {
        console.log("login" + err);
        alert("로그아웃에 실패하였습니다.");
      });
  };
  return (
    <StyledModal>
      <StyledDiv>
        <CloseBtn onClick={closeModal}>X</CloseBtn>
        <Title>로그아웃</Title>
        <Confirm>로그아웃하시겠어요?</Confirm>
        <CancelBtn onClick={closeModal}>취소</CancelBtn>
        <LogoutBtn onClick={onSubmitLogout}>로그아웃</LogoutBtn>
      </StyledDiv>
    </StyledModal>
  );
}
