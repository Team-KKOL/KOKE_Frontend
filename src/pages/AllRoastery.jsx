/*로스터리 목록 페이지 */
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { unMainPage, unTopHeader } from "../store";

import { Link, Navigate } from "react-router-dom";

const Grid = styled.div`
  background-color: #faf7e8;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  grid-template-columns: 308px 308px 308px 308px;
  grid-auto-rows: minmax(100px, auto);
  margin: 0 auto;
  gap: 1em;
  flex-wrap: wrap;
  width: 95%;
`;
const Title = styled.div`
  padding: 50px 0px 30px 200px;
  font-weight: bold;
  font-size: 50px;
  text-align: left;
`;
const RoasteryTage = styled.a`
  color: black;
  text-decoration: none;
`;

const Roastery = styled.div`
  background-color: #fffdf9;
  word-break: keep-all;
  display: grid;
  grid-column: 1/3;
  width: 308px;
  height: 308px;
  word-wrap: keep-all;
  padding: 68px 32px 0;
`;

const RoasteryImg = styled.img`
  width: 120px;
  height: 120px;
  margin: 0 auto;
  border-radius: 50%;
`;
const RoasteryName = styled.span`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

const StyledButton = styled.button`
  &:hover {
    color: #ffffff;
    background-color: #b4712f;
  }
  border: 1px solid #b4712f;
  border-radius: 20px;
  width: 100px;
  height: 40px;
  background-color: #ffffff;
  color: #b4712f;
  margin-right: 10px;
  font-weight: bold;
  float: right;
`;

const ButtonGroup = styled.div`
  margin-right: 170px;
  height: 60px;
`;

export default function AllRoastery(props) {
  const [roastery, setRoastery] = useState([]);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(unTopHeader());
    dispatch(unMainPage());
  }, []);

  useEffect(() => {
    if (roastery.length === 0) {
      axios({
        method: "GET",
        url: `https://api.kkol.store:9002/roastery?sort=NAME`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8;",
        },
      })
        .then((res) => {
          const data = res.data.body;

          setRoastery(data);
          console.log(roastery);
        })
        .catch((err) => {
          console.log("login" + err);
          alert("로딩에 실패하였습니다.");
        });
    }
  }, [roastery]);

  const onChangeName = () => {
    axios({
      method: "GET",
      url: `https://api.kkol.store:9002/roastery?sort=NAME`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8;",
      },
    })
      .then((res) => {
        const data = res.data.body;
        setRoastery([]);
        setRoastery(data);
        console.log(roastery);
      })
      .catch((err) => {
        console.log("login" + err);
        alert("로딩에 실패하였습니다.");
      });
  };

  const onChangeRecent = () => {
    axios({
      method: "GET",
      url: `https://api.kkol.store:9002/roastery?sort=RECENT`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8;",
      },
    })
      .then((res) => {
        const data = res.data.body;
        setRoastery([]);
        setRoastery(data);
        console.log(roastery);
      })
      .catch((err) => {
        console.log("login" + err);
        alert("이미 존재하는 ID입니다.");
      });
  };

  return (
    <Grid>
      <Title>로스터리</Title>
      <ButtonGroup>
        <StyledButton onClick={onChangeName}>이름순</StyledButton>
        <StyledButton onClick={onChangeRecent}>최신등록순</StyledButton>
      </ButtonGroup>
      {/* <Link to="/RoasteryDetails"> */}
      <Main>
        {roastery.map(function (arr, idx) {
          return (
            <Link to={`/AllRoastery/${arr.id}`}>
              <RoasteryTage href={`AllRoastery:${arr.id}`}>
                <Roastery key={idx}>
                  <RoasteryImg src={arr.logoImgUrl} />
                  <RoasteryName>{arr.roasteryNm}</RoasteryName>
                </Roastery>
              </RoasteryTage>
            </Link>
          );
        })}
      </Main>
      {/* </Link> */}
    </Grid>
  );
}
