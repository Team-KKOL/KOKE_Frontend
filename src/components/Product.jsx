import React from 'react'
import styled from 'styled-components';
import { CiHeart } from "react-icons/ci";



const ProductBox = styled.div`
    width: 300px;
    height: calc( 300px + 250px );
    text-align: center;

    // border-radius: 15px;
    // overflow: hidden;
`

const ImgBox = styled.div`
    position: relative;
    width: 100%;
    height: 300px;

    border: 1px solid gray;
`

const Decaf = styled.div`
    width: 70px;
    height: 20px;
    background-color: white;
    position: absolute;
    top: 15px;
    right: 15px;
    color: #333;
`

const TextOuter = styled.div`
    padding: 20px;
    background-color: white;
    color: #333;

    border: 1px solid gray;
`

const TitleBox = styled.div`
    font-size: 17px;
`

const ProductName = styled.div`
    line-height: 30px;
`

const ProductPrice = styled.div`
    font-size: 16px;
    font-weight: 500;
`

const RoasteryBox = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0;
`

const RoasteryLogo = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 5px;

    background-color: gray;
`

const RoasteryName = styled.div`
    line-height: 25px;
`

const Wish = styled.div``


function Product() {
  return (
    <ProductBox>
        <ImgBox>
        <img src='' alt='상품 이미지' style={{ objectFit: "cover" }}/>
        <Decaf>디카페인</Decaf>
        {/* {decaf && <Decaf></Decaf>} */}
        </ImgBox>
        <TextOuter>
            <TitleBox>
                {"과일"} & {"화사한"}
            </TitleBox>
            <ProductName>{"디카페인 에티오피아 블렌드"}</ProductName>
            <ProductPrice>{"10.600"}원</ProductPrice>
            <RoasteryBox>
                <RoasteryLogo><img src='' alt='로스터리 로고' /></RoasteryLogo>
                <RoasteryName>{"디카 커피랩"}</RoasteryName>
            </RoasteryBox>
            <Wish 
            onClick={(e) => {
                e.preventDefault();
                alert("찜목록에 상품 추가 코드 구현하기")
            }}
            ><CiHeart/>찜하기</Wish>
        </TextOuter>
    </ProductBox>
  )
}


export default Product;
 
