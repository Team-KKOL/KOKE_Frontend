import React from 'react'
import styled from 'styled-components'
import CelebSlider from '../components/CelebSlider'
import MainImg from '../components/MainImg'
import MainRoastery from '../components/MainRoastery'
import SubscriptionEvent from '../components/SubscriptionEvent'

export default function Main() {
  const Maindiv = styled.div`
    background-color: ${({ theme }) => theme.colors.Beige};
  `

  return (
    <Maindiv>
    <MainImg /> 
    <CelebSlider />
    <MainRoastery />
    <SubscriptionEvent />
    </Maindiv>
  )
}
