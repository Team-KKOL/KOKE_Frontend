import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  font-size: 35px;
  font-weight: 400;
  line-height: 50px;
  margin-bottom: 20px;
`;

function MainTitle({Mtext}) {
  return <Title>{Mtext}</Title>;
}


const SbTitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  margin-bottom: 50px;
`;

function SubTitle({Stext}) {
  return <SbTitle>{Stext}</SbTitle>;
}

// export default {MainTitle, SubTitle};
export {MainTitle, SubTitle};
