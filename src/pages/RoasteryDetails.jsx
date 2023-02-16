/*로스터리 상세 페이지 */
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Grid = styled.div`
  background-color: #faf7e8;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
`;
const Main = styled.div``;
const ImgGroup = styled.div`
  display: flex;
`;
const StyledImg = styled.img``;
const Title = styled.h2`
  font-weight: bold;
`;
const Context = styled.p`
  font-weight: bold;
`;
const Banner = styled.button`
  background-color: #fdfaf0;
  color: #ff6c57;
  font-weight: bold;
  align-items: center;
  padding: 20px;
  max-width: 550px;
  margin-top: 20px;
  margin-right: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  line-height: normal;
  word-break: keep-all;
  font-weight: 500;
`;
const Information = styled.div`
  display: block;
`;
const Adress = styled.div``;
const Instagram = styled.div``;
const Website = styled.div``;

export default function RoasteryDetails(props) {
  let { id } = useParams();
  const [table, setTable] = useState({});

  const product = props.products;

  // useEffect(() => {
  //   if (table.length === 0) {
  //     axios({
  //       method: "GET",
  //       url: `http://13.125.126.9:9002/roastery/1674636956813d336f`,
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json;charset=UTF-8;",
  //       },
  //     })
  //       .then((res) => {
  //         const data = res.data.body;
  //         // const data = JSON.stringify(res.data.body);

  //         setTable(data);
  //         console.log(table + "as");
  //       })
  //       .catch((err) => {
  //         console.log("login" + err);
  //         alert("이미 존재하는 ID입니다.");
  //       });
  //   }
  // }, [table]);

  return (
    // <Link to={id}>
    <Grid>
      <Main>
        <ImgGroup>
          <StyledImg />
        </ImgGroup>
        <Title></Title>
        <Context></Context>
        <Banner>
          {"카페 사업자이시라면 코케비즈에서 납품용 원두로 구매해보세요>"}
        </Banner>
        <Information>
          <Adress></Adress>
          <Instagram></Instagram>
          <Website></Website>
        </Information>
      </Main>
    </Grid>
    // </Link>
  );
}
