import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { IoLocationOutline } from "react-icons/io5";

const StyledModal = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* z-index: 999; */
`;

const Main = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 470px;
  max-height: 640px;
  background-color: #faf7e8;
  border: none;
  outline: none;
  border-radius: 8px;
  /* height: 23vh;
  border-radius: 15px;
  display: block;
  padding: 30px 30px 0px 30px;
  margin: 30px 100px 100px 50px;
  background-color: #faf7e8;
  min-width: 300px;
  max-width: 1432px; */
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
`;
const Title = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.3px;
  color: #212121;
`;
const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 16px;
  border: none;
  background-color: transparent;
`;

const Container = styled.div`
  display: block;
  padding: 0 32px;
  overflow: auto;
  max-height: calc(640px - 72px);
`;

const InputBox = styled.div`
  margin-bottom: 20px;
`;
const Label = styled.p`
  font-weight: 600;
  margin-bottom: 10px;
`;
const Input = styled.input`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: none;
  padding: 15px 16px;
  border: 2px solid #ebe6d4;
  box-sizing: border-box;
  border-radius: 3px;
  background-color: #faf7e8; ;
`;

const CardBody = styled.div`
  display: block;
  text-align: left;
`;

const RegistrationBtn = styled.button`
  color: #ffffff;
  width: 100%;
  border: 4px;
  font-weight: 600;
  background-color: #bdbdbd;
  height: 50px;
  margin: 20px 0px 20px 0px;
`;

const SearchBtn = styled.button`
  display: flex;
  padding-left: 10px;
  color: #060606;
  text-align: left;
  width: 100%;
  border: 4px;
  font-weight: 600;
  background-color: #ebe6d4;
  height: 50px;
  padding-top: 15px;
  margin: 20px 0px 20px 0px;
`;
const ChangeText = styled.p`
  color: #060606;
  text-align: right;
  padding: 0px 6px 0px 300px;
`;

export default function ModalAdress({ setModalAdress }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const closeModal = () => {
    setModalAdress(false);
  };

  return (
    <StyledModal>
      <Main>
        <Header>
          <Title>주소 등록</Title>
          <CloseBtn onClick={closeModal}>X</CloseBtn>
        </Header>
        <Container>
          <InputBox>
            <Label>받는 사람</Label>
            <Input placeholder="이름을 입력해주세요" />
          </InputBox>
          <InputBox>
            <Label>휴대폰</Label>
            <Input placeholder="010 0000 0000" />
          </InputBox>

          <CardBody>
            <Label>배송받을 주소</Label>
            <SearchBtn>
              <IoLocationOutline />
              주소 찾기<ChangeText>{"> "}</ChangeText>
            </SearchBtn>
            <Input placeholder="나머지 주소를 입력해주세요" />
            <RegistrationBtn>등록하기</RegistrationBtn>
          </CardBody>
        </Container>
      </Main>
    </StyledModal>
  );
}
