import React from "react";
// import theme from '../theme'
// import styled, { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { FcElectricity, FcApproval, FcShipped } from "react-icons/fc";
import { MainTitle, SubTitle } from "./MainTitle";

export default function SubscriptionEvent() {
  const Outerbox = styled.div`
    width: ${({ theme }) => theme.size.mainSize};
    margin: 0 auto;
    text-align: center;
    padding: 100px 0;
  `;

  const IconOuterBlock = styled.div`
    width: 410px;
    height: 205px;
    display: flex;
    padding: 35px 25px 0px 10px;
    background-color: ${({ theme }) => theme.colors.lightBrown};
    border-radius: 15px;
  `;

  const IconBlock = styled.div`
    width: 160px;
    height: 150px;
  `;

  const BlockTextBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    padding-top: 20px;
  `;

  const BlockText01 = styled.h2`
    font-size: 22px;
    font-weight: 500;
  `;

  const BlockText02 = styled.h5`
    font-size: 16px;
    line-height: 23px;
    margin-top: 16px;
    font-weight: 400;
  `;

  return (
    <>
      <Outerbox>
        <MainTitle Mtext={["첫 구독 혜택으로", <br />, "부담 없이 시작하세요"]} />  
        <SubTitle Stext={["구독을 처음 시작한다면", <br />, "누구나 3,000원 할인에 100% 무료 교환 혜택으로", <br />, "부담 없이 시작해요."]} />  

        <div style={{ display: "flex", justifyContent: "space-between" }}>
           <IconOuterBlock>
            <IconBlock>
              <FcElectricity className="arrow"
                style={{ fontSize: "120px", color: "brown" }}
              />
            </IconBlock>
            <BlockTextBox>
              <BlockText01>첫 결제 <strong>3,000</strong>원 할인</BlockText01>
              <BlockText02>누구나 3,000원 할인으로<br />부담 없이 시작해요.</BlockText02>
            </BlockTextBox>
          </IconOuterBlock>

          <IconOuterBlock>
            <IconBlock>
              <FcApproval
                style={{ fontSize: "120px", color: "brown" }}
              />
            </IconBlock>
            <BlockTextBox>
              <BlockText01>첫 커피 <strong>100%</strong> 책임제</BlockText01>
              <BlockText02>첫 커피는 맛없으면 코케에서<br />100% 무료 교환해드려요.</BlockText02>
            </BlockTextBox>
          </IconOuterBlock>

          <IconOuterBlock>
            <IconBlock>
              <FcShipped
                style={{ fontSize: "120px", color: "brown" }}
              />
            </IconBlock>
            <BlockTextBox>
              <BlockText01>항상 무료 배송</BlockText01>
              <BlockText02>코케 구독은 항상 무료 배송</BlockText02>
            </BlockTextBox>
          </IconOuterBlock>
        </div>
      </Outerbox>
    </>
  );
}
