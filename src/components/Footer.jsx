import React from "react";
import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri"
import { AiFillInstagram } from "react-icons/ai"

const FooterOuter = styled.div`
  width: 100%;
  height: auto;
  background-color: #fffef8;
  border-top: 1px solid #70707030;
`;

const FooterInner = styled.div`
  width: 1276px;
  margin: 0 auto;
  height: 100%;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  color: #555555;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  border-bottom: 1px solid #70707030;
`;

const Inquiry = styled.div`
  text-align: start;
  padding-right: 100px;
`;

const InquiryButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid #B4712F;
  color: #B4712F;
  font-weight: bold;
`;

const ServiceCenter = styled.div`
  text-align: start;
  padding-right: 400px;
`;

const IconBox = styled.div`
  font-size: 40px;
  color: #B4712F;
  text-align: end;
`;

const FooterBottom = styled.div`
  padding-top: 40px;
`;

const TextBox = styled.div`
  text-align: start;
  color: gray;
  font-size: 9px;
  line-height: 16px;
`;

export default function Footer() {
  return (
    <FooterOuter>
      <FooterInner>
        <FooterTop>
          <Inquiry>
            <h5>1:1 문의하기</h5>
            <p>
              결제 및 환불 등 상품에 대한 궁금한 점은 아래 <br />
              버튼을 통해 바로 시작하세요.
            </p>
            <InquiryButton>1:1 문의하기</InquiryButton>
          </Inquiry>
          <ServiceCenter>
            <h5>CS센터: 070-4647-1868</h5>
            <p>
              오전 10:00 ~ 오후 7:00 | 점심: 오후 12:00 ~ 2:00
              <br />
              휴일: 주말, 공휴일
              <br />
              <br />
              feedback@koke.kr
            </p>
          </ServiceCenter>
          <IconBox>
            <RiKakaoTalkFill />
            <AiFillInstagram />
          </IconBox>
        </FooterTop>
        <FooterBottom>
          <TextBox>
            상호명: (주)컨슈머브릿지 | 대표: 신재현, 박성환 |
            개인정보보호책임자: 신재현 | 사업자등록번호: 713-86-01467 |
            통신판매업신고번호: 제2021-서울강남-02469호 | <br />
            사업장소재지: 서울 강남구 테헤란로2길 27 패스트파이브 빌딩 9층 915호
            <br />
            <br />
            주식회사 컨슈머브릿지는 전자상거래 등에서의 소비자보호에 관한 법률에
            따른 통신판매중개자로서 중개하는 통신판매에 관하여서는 통신판매의
            당사자가 아니며 <br />
            상품의 주문, 배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게
            있습니다.
            <br />
            <br />
            <br />© 2021 Consumer Bridge, Inc. All rights reserved
          </TextBox>
        </FooterBottom>
      </FooterInner>
    </FooterOuter>
  );
}
