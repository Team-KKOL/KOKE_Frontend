import React, { useState } from "react";
import styled from "styled-components";
import ModalReviewModify from "../components/ModalReviewModify";
import { ImStarFull } from "react-icons/im";

const Grid = styled.div`
  background-color: #fffef8;
  height: 100vh;
  display: block;
  margin: 0px;
  padding: 0px;
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
  display: flex;
  border-radius: 5px;
  width: 104.5%;
  background-color: #ffffff;
  margin: 20px 0px 0px -29px;
  padding: 15px 30px 5px 30px;
`;
const ReviewText = styled.p`
  margin-left: 30px;
  margin-top: 5px;
  text-align: left;
  width: 70%;
`;
const Header = styled.div`
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
const MoreBtn = styled.button`
  /* margin-left: 20px; */
  text-align: right;
  border: none;
  margin-bottom: 10px;
  background-color: transparent;
  color: #949494;
`;

export default function MyReview() {
  const [modal, setModal] = useState(false);
  const [star, setStar] = useState([false, false, false, false, false]);
  const startArray = [0, 1, 2, 3, 4];

  const showModal = () => {
    setModal(true);
  };

  return (
    <Grid>
      <MainTitle>MY 리뷰</MainTitle>
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
            {startArray.map((arr) => (
              <ImStarFull key={arr} className={star[arr] && "red"} size="20" />
            ))}
          </Header>
          <ReviewText>리뷰~~~~~~~~~</ReviewText>
          <MoreBtn onClick={showModal}>{"보기 >"}</MoreBtn>
        </CardText>
      </Main>
      {modal && <ModalReviewModify setModal={setModal} />}
    </Grid>
  );
}
