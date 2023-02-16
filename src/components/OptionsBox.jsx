import React, { useEffect } from 'react';
import { useState } from 'react';
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { TbPaperBag } from 'react-icons/tb';
import styled, { css } from 'styled-components';
import Select from "react-select";
// import "./OptionsBox.modul.css";
// import Form from 'react-bootstrap/Form';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';


const OuterContainer = styled.div`
  background-color: ${({theme}) => theme.colors.Beige};
  width: 100%;
  padding: 45px 20px 40px;
  top: 70px;
  position: sticky;
  border-radius: 30px;
  font-size: 16px;
`

const SubscribeState = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: ${({theme}) => theme.colors.brown};
  font-weight: bold;
  margin-bottom: 10px;
`

const ProductName = styled.h3`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
`

const Taste = styled.h4`
  font-size: 23px;
  margin-bottom: 8px;
`

const PriceBox = styled.div`
  font-size: 22px;
  display: flex;
  height: 37px;

  /* border: 1px solid #333; */
`

const Price = styled.p`
  padding-right: 14px;
  margin-bottom: none;
`

const Volume = styled.p`
  font-size: 18px;
  padding-top: 4px;
`

const Wish = styled.button`
  border: none;
  background: none;
  vertical-align: middle;
  margin-bottom: 10px;
`

const Text = styled.p`
  font-size: 14px;
  margin-bottom: 0;
  
  ${props => props.Brown && css`
    color: ${({theme}) => theme.colors.brown};
  `}
  
  ${props => props.gray && css`
    color: gray;
    font-size: 0.8rem;
  `}
`

const SubscriptionGuide = styled.div`
  background-color: ${({theme}) => theme.colors.lightBrown};
  border-radius: 15px;
  margin: 15px 0 30px;
  padding: 15px 20px;
  box-sizing: border-box;
` 

const InputContainer = styled.div`
  margin: 5px 0;
`

const InputBox = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "flex":
        return css`
          width: 88%;
          display: flex;
          justify-content: space-between;
          margin: 15px 0;
        `;
      default:
        return css`
        width: 100%;

        border: 1px solid #333;
        `;
    }
  }}
`

const InputBox2 = styled(InputBox)`
  border: 1px solid ${({theme}) => theme.colors.brown};
  border-radius: 30px;
  width: 90%;
  height: 55px;
  line-height: 40px;
  padding: 5px;
  position: relative;
  margin-bottom: 31px;
`

const SlideBlock = styled.div`
  position: absolute;
  width: 125px;
  height: 43px;
  border-radius: 30px;
  top: 5px;
  /* left: 5px; */
  background-color: ${({theme}) => theme.colors.orange};
  z-index: -1;
  transition: 0.5s;
`
 

const RadioLabel = styled.p`
  font-size: 18px;
  width: 125px; 
  align-items: center;
  border: 1px solid ${({theme}) => theme.colors.brown};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({theme}) => theme.colors.black};
  text-align: center;

  ${props => props.volume && css`
    height: 45px;
    line-height: 40px;
  `}

  ${props => props.comminution && css`
    height: 80px;
    padding: 10px 0;
    box-sizing: border-box;
    font-weight: 400;
  `}

  ${props => props.cycle && css`
    width: 150px;
    height: 45px;
    line-height: 40px;
    padding: 0 10px;
    font-size: 16px;
  `}
`;

const RadioLabel2 = styled(RadioLabel)`
  border: none;
  text-align: center;
  flex: 1;
  font-size: 14px;
`

const VolumeInput = styled.input.attrs({ type: 'radio' })`
  &:checked {
    color: #fff;
  }
  &:checked + ${RadioLabel} { 
    background: ${({theme}) => theme.colors.orange};
    color: #fff;
  }
  &:checked + ${RadioLabel2} { 
    background-color: transparent;
    transition: 0.5s;
    color: #fff;
  }

  /* &:checked + ${SlideBlock} { 
    right: 5px;
  } */
  display: none;
`;
 


// const Comminution = styled.input

const beanSizeList = [
  { id: "01", value: null, label: "어떻게 갈아드릴까요?" },
  { id: "02", value: "coffeeMaker", label: "커피 메이커" },
  { id: "03", value: "EspressoMachine", label: "에스프레소 머신" },
  { id: "04", value: "french press", label: "프렌치 프레스" },
  { id: "05", value: "hand drip", label: "핸드 드립" },
  { id: "06", value: "moka pot", label: "모카 포트" },
];

const weekList = [
  { id: "00", name: 'beanSize', value: null, label: "주기 선택하기" },
  { id: "01", name: 'beanSize', value: "1주", label: "매주" },
  { id: "02", name: 'beanSize', value: "2주", label: "2주" },
  { id: "03", name: 'beanSize', value: "3주", label: "3주" },
  { id: "04", name: 'beanSize', value: "4주", label: "4주" },
  { id: "05", name: 'beanSize', value: "5주", label: "5주" },
];


const SelectComponents = styled.select`
    border: none;
    background-color: transparent;
    width: 100%;
    font-size: 12px;
    text-align: center;
    /* color: ${ props => props.fontColor }; */
    margin-bottom: 50px;
    cursor: pointer;
    outline: none;

    &:focus {
        border: none;
    }

    & option {
        /* background-color: black; */
        margin-top: 50px;
        color: black;
        /* border: 1px solid black; */
        border-radius: 5px;
        font-size: 13px;
        cursor: pointer; 
    }
`

const OptionBoxBtn = styled.button`
  display: block;
  width: 100%;
  height: 40px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  border-radius: 7px;
  color: white;
  text-align: center;
  line-height:40px;
  &:hover {
    transition: 0.3s;
    background-color: ${({ theme }) => theme.colors.brown};
  }
`

const ToggleBox = styled.div`
  width: 100%;
  overflow: hidden;
  transition: 0.4s; 
`
 






export default function OptionsBox() {
  const [ wish, setWish ] = useState(false); 
 

  const [inputs, setInputs] = useState({
    volume: '200g',  // 용량
    comminution: '원두 분쇄 안함',  // 원두 분쇄 유무
    beanSize: '',  // 분쇄정도
    PurchaseMethod: "구독하기", // 구독 유무
    cycle: "",   // 구독 주기
  });

  useEffect(() => {
    console.log(inputs); 
  }, [inputs]);


  const { volume, comminution, beanSize, PurchaseMethod, cycle } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });

    // console.log(inputs);
  };

  // const onReset = () => {
  //   setInputs({
  //     volume: '',  // 용량
  //     beanSize: '',  // 분쇄정도
  //   })
  // };
  

  return (
    <OuterContainer>
      <SubscribeState>* 현재 구독중인 원두 입니다</SubscribeState>
      <ProductName>{`클래식 에스프레소`}</ProductName>
      <Taste>밸러스  &  고소</Taste>
      <PriceBox>
        <Price>13,000 원</Price>
        <Volume>200g</Volume>
      </PriceBox>
      <Wish onClick={() => setWish(!wish)}>찜하기 { wish ? <HiHeart style={{color:"red"}}/> : <HiOutlineHeart /> }</Wish>
      <Text>한번만 구매시 제주 3,000원, 도서지역 3,000원 추가</Text>
      <SubscriptionGuide>
        <Text >지금 구독 시작하면</Text>
        <Text Brown>3,000원 즉시 할인 · 무료교환 · 무료배송</Text>
      </SubscriptionGuide>
      <form>
      <InputContainer>

        <Text>원두 용량</Text>
        <Text gray>로스터리마다 용량이 조금씩 다를 수 있습니다.</Text>
        <InputBox $mode="flex"> 
          <label htmlFor='volume01'>
            <VolumeInput type="radio" name='volume' id='volume01' 
            value={'200g'} 
            onChange={onChange} 
            // onChange={() => setVolume('200g')} 
            defaultChecked/>
            <RadioLabel volume>
              <TbPaperBag />
              &nbsp; | 200g
            </RadioLabel>
          </label>
          <label htmlFor='volume02'>
            <VolumeInput type="radio" name='volume' id='volume02' value={'400g'} 
            onChange={onChange} 
            />
            <RadioLabel volume>
              <TbPaperBag /><TbPaperBag />
              &nbsp; | 400g
            </RadioLabel>
          </label> 
        </InputBox>

        <Text>원두 갈아드릴까요?</Text>
        <InputBox $mode="flex"> 
          <label htmlFor='comminution01'>
            <VolumeInput type="radio" name='comminution' id='comminution01' 
            value={"원두 분쇄 안함"} 
            onChange={onChange}
            // onChange={() => setVolume('200g')} 
            defaultChecked/>
            <RadioLabel comminution>
              그대로 주세요<br/>
              <span style={{ fontSize:"14px" }}>분쇄하지 않고</span> 
            </RadioLabel>
          </label>
          <label htmlFor='comminution02'>
            <VolumeInput type="radio" name='comminution' id='comminution02' 
            value={"원두 갈기"}  
            onChange={onChange} 
            />
            <RadioLabel comminution >
              갈아주세요
              <SelectComponents 
                options={beanSizeList} 
                onChange={onChange} 
                name={'beanSize'}  
                style={ inputs.comminution === "원두 분쇄 안함" ? { color: "black"} : { color: "white"}} 
              >
                {beanSizeList.map((option) => (
                      <option
                          key={option.id}
                          value={option.value}
                      >
                          {option.label}
                      </option>
                  ))}
              </SelectComponents> 
            </RadioLabel>
          </label> 
        </InputBox>

        <Text>어떻게 구매하시겠어요?</Text>
        <InputBox2 $mode="flex" > 
          <label htmlFor='PurchaseMethod01'>
            <VolumeInput type="radio" name='PurchaseMethod' id='PurchaseMethod01' 
            value={"구독하기"} 
            onChange={onChange}
            // onChange={() => setVolume('200g')} 
            defaultChecked>
            </VolumeInput>
            <RadioLabel2>구독하기</RadioLabel2>
          </label>
          <label htmlFor='PurchaseMethod02'>
            <VolumeInput type="radio" name='PurchaseMethod' id='PurchaseMethod02' 
            value={"한번만 구매"} 
            onChange={onChange}
            />
            <RadioLabel2>한번만 구매</RadioLabel2>
          </label> 
          <SlideBlock 
            style={ inputs.PurchaseMethod === "구독하기" ? { left:'5px'} : { left:'137px'}} 
          />

        </InputBox2>
        
        
        <ToggleBox 
          style={ inputs.PurchaseMethod === "구독하기" ? { height: "120px"} : { height: "0px"}} >
        <Text>어떤 주기로 받아볼까요?</Text>
        <InputBox $mode="flex">  
          <label>
            <RadioLabel cycle > 
              <SelectComponents 
                options={weekList}
                style={{ width:"95%", fontSize:"14px" }}
                onChange={onChange} 
                name={'cycle'}  
                // style={ inputs.PurchaseMethod === "구독하기" ? { color: "black"} : { color: "white"}} 
              >
                {weekList.map((option) => (
                      <option
                          key={option.id}
                          value={option.value}
                      >
                          {option.label}
                      </option>
                  ))}
              </SelectComponents>
            </RadioLabel>
          </label> 
        </InputBox>
        </ToggleBox>

      </InputContainer>

      <OptionBoxBtn>구매하기</OptionBoxBtn>
      </form>
    </OuterContainer>
  )
}
