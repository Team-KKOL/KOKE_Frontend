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
const Header = styled.div`
  display: flex;
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

const Text = styled.textarea`
  width: 100%;
  height: 80%;
  outline: none;
  border: none;
`;
const Main = styled.div`
  width: 100vw;
  height: 23vh;
  border-radius: 15px;
  display: block;
  padding: 30px 30px 0px 30px;
  margin: 30px 100px 100px 50px;
  background-color: #faf7e8;
  min-width: 300px;
  max-width: 1432px;
`;
const Container = styled.div`
  display: flex;
`;
const Img = styled.img`
  background-color: #ffffff;
  width: 20%;
  margin-right: 50px;
`;
const CardBody = styled.div`
  display: block;
  width: 50%;
  text-align: left;
`;
const Title = styled.p`
  font-weight: bold;
`;
const Flaver = styled.p``;
const Roastery = styled.p``;
const ReviewDate = styled.p`
  color: #949494;
`;
const CardText = styled.div`
  border: 1px solid #949494;
  /* display: flex; */
  border-radius: 5px;
  /* align-items: center;
  justify-content: center; */
  width: 104.5%;
  background-color: #ffffff;
  margin: 20px 0px 0px -29px;
  padding: 15px 30px 5px 30px;
`;
const CancelBtn = styled.button`
  ${button}
  color: #b4712f;
  background-color: #faf7e8;
  margin-right: 20px;
`;
const ModifyBtn = styled.button`
  ${button}
  color: #faf7e8;
  background-color: #b4712f;
  margin-right: 20px;
`;

export default function ModalReviewModify({ setModal }) {
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

  return (
    <Main>
      <Container>
        <Img alt="img"></Img>
        <CardBody>
          <Title>상품명</Title>
          <Flaver>맛1</Flaver>
          <Roastery>로스터리명</Roastery>
        </CardBody>
        <ReviewDate>2022.00.00</ReviewDate>
      </Container>
      <CardText>
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
        <CancelBtn>삭제</CancelBtn>
        <ModifyBtn>수정</ModifyBtn>
        <CancelBtn onClick={closeModal}>닫기</CancelBtn>
      </CardText>
    </Main>
  );
}
