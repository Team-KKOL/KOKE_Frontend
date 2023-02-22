import React, { useEffect } from 'react'

import { useDispatch } from "react-redux";
import { unMainPage, unTopHeader } from "../store";


export default function OrderComplete() {
  
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(unTopHeader());
    dispatch(unMainPage());
  }, []);


  return (
    <div>OrderComplete_주문완료페이지</div>
  )
}
