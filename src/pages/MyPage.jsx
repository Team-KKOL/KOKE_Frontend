import React from "react";
import { Outlet } from "react-router-dom";

export default function MyPage() {
  return (
    <>
      <div>Mypage</div>
      <Outlet></Outlet>
    </>
  );
}
