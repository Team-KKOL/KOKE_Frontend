/*로스터리 상세 페이지 */
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { FiInstagram } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { GrAttachment } from "react-icons/gr";

import { useDispatch } from "react-redux";
import { unMainPage, unTopHeader } from "../store";

const Grid = styled.div`
  background-color: #faf7e8;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
`;
const Main = styled.div`
  padding: 16px 100px 16px 100px;
  max-width: 956px;
  text-align: left;
`;
const ImgGroup = styled.div`
  display: flex;
  max-width: 794px;
`;
const StyledImg = styled.img``;
const StyledLogo = styled.img`
  margin-top: -24px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #faf7e8;
  box-sizing: border-box;
`;
const Awards = styled.div`
  border: 1px solid #ebe6d4;
  border-radius: 4px;
  padding: 3px 8px 3px 8px;
  margin: 5px 0px 5px 0px;
  background-color: #fdfaf0;
  width: 120px;
  height: 30px;
`;
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
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  line-height: normal;
  word-break: keep-all;
  font-weight: 500;
`;
const Information = styled.div`
  display: block;
`;
const InformationTitle = styled.span`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.3px;
  color: #757575;
`;
const InformationText = styled.span`
  display: flex;
  align-items: center;
  word-break: break-all;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.3px;
  color: #212121;
`;
const Adress = styled.div``;
const Instagram = styled.div``;
const Website = styled.div``;

export default function RoasteryDetails(props) {
  let { id } = useParams();
  const [table, setTable] = useState([]);

  const product = props.products;

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(unTopHeader());
    dispatch(unMainPage());
  }, []);

  useEffect(() => {
    if (table.length === 0) {
      axios({
        method: "GET",
        url: `http://15.165.242.95:9002/roastery/16764500616357df65`,
        // params: { id: "16764500616357df65" },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8;",
        },
      })
        .then((res) => {
          const data = res.data.body;
          // const data = JSON.stringify(res.data.body);
          setTable(data);
          console.log("table" + table + " /data" + data);
        })
        .catch((err) => {
          console.log(err);
          alert("상세페이지가 없습니다.");
        });
    }
  }, [table]);

  return (
    // <Link to={id}>
    <Grid>
      <Main>
        <ImgGroup>
          {/* <StyledImg src={table.photoImgUrl[0]} /> */}
          {/* <StyledImg src={table.photoImgUrl[1]} /> */}
          <StyledImg src={table.photoImgUrl} />
        </ImgGroup>
        <StyledLogo src={table.logoImgUrl} />
        <Title>{table.roasteryNm}</Title>
        <Awards>{table.awards}</Awards>
        <Context>{table.description}</Context>
        <Banner>
          {"카페 사업자이시라면 코케비즈에서 납품용 원두로 구매해보세요>"}
        </Banner>
        <Information>
          <Adress>
            <IoLocationOutline />
            <InformationTitle>위치</InformationTitle>
            <InformationText>{table.location}</InformationText>
          </Adress>
          <Instagram>
            <FiInstagram />
            <InformationTitle>Instagram</InformationTitle>
            <InformationText>{table.snsUrl}</InformationText>
          </Instagram>
          <Link to={table.webUrl}>
            <Website>
              <GrAttachment />
              <InformationTitle>Website</InformationTitle>
              <InformationText>{table.webUrl}</InformationText>
            </Website>
          </Link>
        </Information>
      </Main>
    </Grid>
    // </Link>
  );
}
