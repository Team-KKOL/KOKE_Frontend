import React, { useState } from "react";
import axios from "axios";
import styled, { css } from "styled-components";
import { ImStarFull } from "react-icons/im";

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
  /* text-align: center; */
  width: 500px;
  height: 400px;
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
const Header = styled.div`
  display: flex;
  border-bottom: 1px solid #686868;
  margin-bottom: 15px;
  & svg {
    color: #c4c4c4;
    cursor: pointer;
  }
  :hover svg {
    color: #ffae00;
  }
  & svg:hover ~ svg {
    color: #c4c4c4;
  }
  .red {
    color: #ffae00;
  }
`;
const Title = styled.p`
  font-weight: bold;
  text-align: left;
  margin-right: 200px;
`;
const Text = styled.textarea`
  width: 100%;
  height: 80%;
  outline: none;
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

export default function ReviewModal({ setModal }) {
  const [text, setText] = useState("");
  //별점체크
  const [star, setStar] = useState([false, false, false, false, false]);
  const startArray = [0, 1, 2, 3, 4];
  //별점 내보내기
  let score = star.filter(Boolean).length;

  const handleStarClick = (idx) => {
    let clickStates = [...star];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= idx ? true : false;
    }
    setStar(clickStates);
  };

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const closeModal = () => {
    setModal(false);
  };
  const onSubmitLogout = async () => {
    axios({
      method: "POST",
      // url: "http://13.125.91.209:9002/logoutUser",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8;",
      },
    })
      .then((res) => {
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
        <Header>
          <Title>상품명</Title>
          {startArray.map((arr) => (
            <ImStarFull
              key={arr}
              onClick={() => handleStarClick(arr)}
              className={star[arr] && "red"}
              size="20"
            />
          ))}
        </Header>
        <Text type="text" value={text} onChange={onChangeText} />
        <CancelBtn onClick={closeModal}>취소</CancelBtn>
        <LogoutBtn onClick={onSubmitLogout}>리뷰등록</LogoutBtn>
      </StyledDiv>
    </StyledModal>
  );
}
