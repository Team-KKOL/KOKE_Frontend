/*찜상품 */
import React from "react";
import Item from "../components/Item";
import styled from "styled-components";

export default function ProductOfInterest() {
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

  return (
    <Grid>
      <Title>찜상품</Title>
      <Item
        img="/test.jpg"
        logoImg="/test.jpg"
        title="고소 견과류"
        menu="진양조"
        price="10000원"
        rosteryName="스텐딩커피"
      />
    </Grid>
  );
}
