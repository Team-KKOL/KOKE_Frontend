import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  width: 100vw;
  height: 23vh;
  border-radius: 15px;
  display: block;
  padding: 0px 0px 30px 50px;
  margin: 100px 0px 100px 0px;
`;

const Title = styled.li`
  font-weight: 700;
  font-size: 20px;
  text-align: left;
  margin-bottom: 30px;
  /* padding: -10px 0px 10px 0px; */
`;

const Rostery = styled.div`
  background-color: #ffffff;
  height: 250px;
  width: 30%;
`;

const Img = styled.img``;
const RosteryName = styled.p`
  font-weight: bold;
`;

export default function RoasteryOfInterest() {
  return (
    <Grid>
      <Title>관심 로스터리</Title>
      <Rostery>
        <Img src="/RosteryTest.jpg" />
        <RosteryName>까페꼼마</RosteryName>
      </Rostery>
    </Grid>
  );
}
