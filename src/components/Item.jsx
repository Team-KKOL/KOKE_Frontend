import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: block;
  align-content: center;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  height: 350px;
  width: 30%;
`;
const CardImg = styled.div`
  background-color: #d9d9d9;
`;
const StyledImg = styled.img`
  width: 100px;
  height: 150px;
`;
const CardText = styled.div`
  background-color: #ffffff;
`;
const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
`;
const Menu = styled.p`
  font-weight: bold;
`;
const Price = styled.p`
  font-weight: bold;
`;
const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const RosteryImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
const RosteryName = styled.p`
  font-weight: bold;
`;
export default function Item(props) {
  return (
    <Main>
      <CardImg>
        <StyledImg src={props.img} />
      </CardImg>
      <CardText>
        <Title>{props.title}</Title>
        <Menu>{props.menu}</Menu>
        <Price>{props.price}</Price>
      </CardText>
      <CardFooter>
        <RosteryImg src={props.logoImg} />
        <RosteryName>{props.rosteryName}</RosteryName>
      </CardFooter>
    </Main>
  );
}
