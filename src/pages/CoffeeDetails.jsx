import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import OptionsBox from '../components/OptionsBox';
import ProductTab from '../subPages/ProductTab';
import { useDispatch } from 'react-redux';
import { unMainPage, unTopHeader } from '../store';


const Backgraund = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${({theme}) => theme.colors.lightBeige};
`

const Outer = styled.div`
  width: ${({ theme }) => theme.size.mainSize};
  padding: 50px 0 0 80px ;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;

  border: 1px solid gray;
`

const MainContainer = styled.div`
  width: 836px;
  padding: 0 70px;


  border: 1px solid gray;
`

const ProductImgBox = styled.div`
  width: 515px;
  margin: 0 auto;
  text-align: center;

  border: 1px solid gray;
`

const ImgBox = styled.div`
  width: 515px;
  height: 515px;

  background-color: gray;
  opacity: 0.3;
`

const ProductTextBox = styled.div`
  padding: 30px 0 70px;
`

const RoasteryBox = styled.div`
  display: flex;
  justify-content: center;
`

const LogoImg = styled.div`
  width: 30px;
  height: 30px;
  background-color: gray;
  opacity: 0.5;
  border-radius: 50%;
`

const Roastery = styled.div`
  line-height: 30px;
  padding-left: 10px;
`

const TabContainerBox = styled.div``

const OptionsContainerBox = styled.div`
  width: auto;
`


export default function CoffeeDetails() {

  let {id} = useParams();

  let dispatch = useDispatch(); 

  useEffect(() => {
      dispatch(unTopHeader())
      dispatch(unMainPage())
  }, []);
  
  return (
    <>
    <Backgraund>
    <Outer>
      <MainContainer>
        <ProductImgBox>
          <ImgBox></ImgBox>
          <ProductTextBox>
            <p>로스터리 원두 설명</p>
            <RoasteryBox>
              <LogoImg></LogoImg>
              <Roastery>
                {'로스터리명'}  
                <span style={{ paddingLeft: "7px", fontWeight: "lighter"}}>Roastery's Note</span>
              </Roastery>
            </RoasteryBox>
          </ProductTextBox>
        </ProductImgBox>
        <TabContainerBox>
          <ProductTab />
        </TabContainerBox>
      </MainContainer>
      <OptionsContainerBox>
        <OptionsBox />  
      </OptionsContainerBox>
    </Outer>
    </Backgraund>
    </>
  )
}
