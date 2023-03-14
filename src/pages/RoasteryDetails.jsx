/*로스터리 상세 페이지 */
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { FiInstagram } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FiPaperclip } from "react-icons/fi";
import { AiOutlineTrophy } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

import { useDispatch } from "react-redux";
import { unMainPage, unTopHeader } from "../store";

const Grid = styled.div`
  background-color: #faf7e8;
  width: 100vw;
  height: 100vh;
  min-width: 850px;
  overflow-y: scroll;
`;
const Main = styled.div`
  padding: 16px 100px 16px 100px;
  max-width: 956px;
  text-align: left;
  word-break: keep-all;
`;

const Page = styled.div`
  padding-bottom: 20px;
  font-weight: bold;
`;
const ImgGroup = styled.div`
  margin: 0 -16px;
  padding: 0px 10px 0px 10px;
  display: flex;
  max-width: 794px;
`;
const StyledImg = styled.img`
  flex: 1 1;
  width: 0;
`;
const StyledLogo = styled.img`
  margin-top: -24px;
  margin-left: -6px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #faf7e8;
  box-sizing: border-box;
`;
const AwardsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  white-space: nowrap;
  overflow: auto;
  max-width: unset;
  margin: 0 -16px;
  padding: 16px 16px 0;
`;
const Awards = styled.div`
  display: inline-flex;
  border-radius: 4px;
  line-height: 22px;
  padding: 8px 8px 8px 8px;
  margin: 5px 5px 5px 5px;
  background-color: #fdfaf0;
`;
const AwardsText = styled.p`
  margin: -3px 0px 0px 5px;
`;
const Title = styled.h2`
  padding: 30px 0px 0px 0px;
  font-weight: bold;
`;
const Context = styled.p`
  font-weight: bold;
  padding-top: 15px;
`;
const Banner = styled.button`
  background-color: #fdfaf0;
  color: #ff6c57;
  font-weight: 800;
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
  border-bottom: 1px solid #ebe6d4;
`;
const InformationTitle = styled.span`
  font-size: 16px;
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
  letter-spacing: -0.3px;
  color: #212121;
`;
const InformationBox = styled.button`
  display: flex;
  padding: 16px 0;
  border: none;
  background-color: #faf7e8;
`;
const InformationContext = styled.div`
  display: block;
  padding-left: 14px;
  text-align: left;
`;

export default function RoasteryDetails(props) {
  let { id } = useParams();

  const [table, setTable] = useState([]);
  const [photoImgUrl, setPhotoImgUrl] = useState([]);
  const [awards, setAwards] = useState([]);

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
        url: `https://api.kkol.store:9002/roastery/${id}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8;",
        },
      })
        .then((res) => {
          const data = res.data.body;
          setTable(data);
          setPhotoImgUrl(data.photoImgUrl);
          setAwards(data.awards);
          console.log(
            "table" +
              table +
              " /data" +
              JSON.stringify(data.awards) +
              "img" +
              photoImgUrl
          );
        })
        .catch((err) => {
          console.log(err);
          alert("상세페이지가 없습니다.");
        });
    }
  }, [table]);

  return (
    <Grid>
      <Main>
        <Page>
          <Link
            to={"/AllRoastery"}
            style={{ textDecoration: "underline", color: "#757575" }}
          >
            모든페이지
          </Link>
          <IoIosArrowForward />
          {table.roasteryNm}
        </Page>
        <ImgGroup>
          <StyledImg src={photoImgUrl[0]} alt="roastery1" />
          <StyledImg src={photoImgUrl[1]} alt="roastery2" />
          <StyledImg src={photoImgUrl[2]} alt="roastery3" />
        </ImgGroup>
        <StyledLogo src={table.logoImgUrl} />
        <Title>{table.roasteryNm}</Title>
        <AwardsGroup>
          {awards.map((award, i) => (
            <Awards>
              <AiOutlineTrophy size="18" color="#757575" />
              <AwardsText>{award}</AwardsText>
            </Awards>
          ))}
        </AwardsGroup>
        <Context>{table.description}</Context>
        <Banner>
          {"카페 사업자이시라면 코케비즈에서 납품용 원두로 구매해보세요 >"}
        </Banner>
        <Information>
          <InformationBox
            onClick={() => window.open(`${table.location}`, `_blank`)}
          >
            <IoLocationOutline size="40" color="#757575" />
            <InformationContext>
              <InformationTitle>위치</InformationTitle>
              <InformationText>{table.location}</InformationText>
            </InformationContext>
          </InformationBox>
          <InformationBox
            onClick={() => window.open(`${table.snsUrl}`, `_blank`)}
          >
            <FiInstagram size="30" color="#757575" />
            <InformationContext>
              <InformationTitle>Instagram</InformationTitle>
              <InformationText>{table.snsUrl}</InformationText>
            </InformationContext>
          </InformationBox>
          {/* <Link to={table.webUrl}> */}
          <InformationBox
            onClick={() => window.open(`${table.webUrl}`, `_blank`)}
          >
            <FiPaperclip size="30" color="#757575" />
            <InformationContext>
              <InformationTitle>Website</InformationTitle>
              <InformationText>{table.webUrl}</InformationText>
            </InformationContext>
          </InformationBox>
          {/* </Link> */}
        </Information>
      </Main>
    </Grid>
  );
}
