import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: block;
  align-content: center;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  box-sizing: border-box;
  width: 270px;
  text-align: center;
`;
const CardImg = styled.div`
  background-color: #d9d9d9;
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
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
  display: flex;
  justify-content: center;
`;
const RosteryImg = styled.img`
  width: 30px;
  height: 30px;
`;
const RosteryName = styled.p`
  padding-top: 4px;
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
