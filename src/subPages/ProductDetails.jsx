// 커피 디테일 하단 탭 - 상품 상세 정보
import React from 'react'
import styled, { css } from 'styled-components'
import { GiCoffeeBeans } from "react-icons/gi";


const Outer = styled.div`
  background-color: ${({theme}) => theme.colors.lightBrown};
  padding: 0 0 50px 50px;
  width: 100%;
  height: auto;
` 

const Title = styled.h4`
  font-size: 22px;
  margin-bottom: 20px;
  padding-top: 50px;
  font-weight: bold;
`

const InfoList = styled.ul`
  padding-left: 20px;
  list-style-position: inside;
`

const Info = styled.li`
  ${props =>
    props.ti &&
    css`
      font-weight: bold;
      line-height: 25px;
      margin-top: 5px;
      list-style: disc;
      ::before {
        content: "";
        /* width: 5px;
        height: 5px;
        background-color: gray; */
      }
    `} 
`

const Blend = styled.p`
  font-style: 20px;
  color: brown;
  padding-left: 20px;
`

const BeenList = styled.ul`
  list-style-type: square;
  padding-left: 35px;
`
const Been = styled.li`
`

const ImageBox = styled.div`
  position: relative;
  display: flex;
  width: 540px;
  height: 180px;
  margin-top: 70px;

  border: 1px solid gray;
`

const LogoImg = styled.div`
  position: absolute;
  bottom: -30px;
  left: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;

  background-color: gray;
`

const IconOuterBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const IconBox = styled.div`
  width: 150px;
  height: 150px;
  border: 2px solid;
  border-color: ${({theme}) => theme.colors.lightBeige};
  border-radius: 10px;
  font-size: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`

const Icon = styled.div`
  width: 90px;
  height: 90px;
  overflow: hidden;
  margin: 15px 30px 0 30px;
`

const IconText = styled.p`
  font-size: 15px;
  margin: 10px 0px 0px;
`
 

// 커피 디테일 하단 탭 - 상품 상세 정보
export default function ProductDetails() {
  return (
    <Outer>
        <Title>&#123;상품명&#125; 소개</Title>
        <InfoList>
          <Info ti>3일 내 볶은 원두만 배송</Info>
          <Info ti>산미가 없어요</Info>
          <Info>신맛이 없어서 고소해요</Info>
          <Info ti>블렌드</Info>
          <Info>브라질 모지아나 내추럴, 과테말라 안티구아 엔트레 볼카네스 위시드, 콜롬비아 나리노라 유니온 워시드</Info>
          <Info ti>다크 로스팅</Info>
        </InfoList>

        <Title>잘 맞는 추출 방법</Title>
        <IconOuterBox>
          <IconBox>
            <Icon><img src="/icon/01_coffee-maker.png" alt="아이콘" style={{width:'100%'}}/></Icon>
            <IconText>에스프레소 머신</IconText>
          </IconBox>
          <IconBox>
            <Icon><img src="/icon/02_hand-drip.png" alt="아이콘" style={{width:'100%'}}/></Icon>
            <IconText>핸드 드립</IconText>
          </IconBox>
          <IconBox>
            <Icon><img src="/icon/03_coffee-machine.png" alt="아이콘" style={{width:'100%'}}/></Icon>
            <IconText>커피 메이커</IconText>
          </IconBox>
          <IconBox>
            <Icon><img src="/icon/04_coffee-port.png" alt="아이콘" style={{width:'100%'}}/></Icon>
            <IconText>모카 포트</IconText>
          </IconBox>
          <IconBox>
            <Icon><img src="/icon/05_french-press.png" alt="아이콘" style={{width:'100%'}}/></Icon>
            <IconText>프렌치프레스</IconText>
          </IconBox>
          <IconBox>
            <Icon><img src="/icon/06_aeropress.png" alt="아이콘" style={{width:'100%'}}/></Icon>
            <IconText>에어로프레스</IconText>
          </IconBox>
          <IconBox>
            <Icon><img src="/icon/07_cold-brew.png" alt="아이콘" style={{width:'100%'}}/></Icon>
            <IconText>콜드브루</IconText>
          </IconBox>
        </IconOuterBox>

        <Title>이렇게 마시면 맛있어요</Title>
        <IconOuterBox>
          <IconBox>
            <Icon><img src="/icon/black-coffee.png" alt="아이콘" style={{width:'100%'}}/></Icon>
            <IconText>블랙 그대로</IconText>
          </IconBox>
          <IconBox>
            <Icon><img src="/icon/milk.png" alt="아이콘" style={{width:'100%'}}/></Icon>
            <IconText>우유를 더한 라떼</IconText>
          </IconBox>
          <IconBox>
            <Icon><img src="/icon/sugar-coffee.png" alt="아이콘" style={{width:'100%'}}/></Icon>
            <IconText>설탕을 넣은 커피</IconText>
          </IconBox>
          <IconBox>
            <Icon><img src="/icon/syrup.png" alt="아이콘" style={{width:'100%'}}/></Icon>
            <IconText>시럽을 넣은 커피</IconText>
          </IconBox>
        </IconOuterBox>

        <Title>원두 노트</Title>
        <Blend><GiCoffeeBeans/>&nbsp;&nbsp;블렌드 정보</Blend>
        <BeenList>
          <Been>브라질 모지아나 내추럴</Been>
          <Been>과테말라 안티구아 엔트레 볼카네스 워시드</Been>
          <Been>콜롬비아 나리노 유니온 워시드</Been>
        </BeenList>

        <ImageBox> 
          <img src="" alt="로스터리 사진1" style={{ width:'180px', height: '180px' }}/>
          <img src="" alt="로스터리 사진2" style={{ width:'180px', height: '180px' }}/>
          <img src="" alt="로스터리 사진3" style={{ width:'180px', height: '180px' }}/>
          <LogoImg>
            <img src="" alt="로스터리 로고" />  
            {/* 링크 삽입 */}
          </LogoImg>
        </ImageBox>
        <Title>&#123;로스터스명&#125; 로스터스</Title>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti veniam exercitationem necessitatibus consectetur expedita. Odio aut ipsam voluptate soluta pariatur tempore cumque maxime, dolor laudantium animi nobis neque autem dolore, assumenda in aliquid numquam suscipit doloribus officia atque ullam vero, reiciendis quia. Inventore iure nam pariatur veniam adipisci in blanditiis.</p>
    </Outer>
  )
}
