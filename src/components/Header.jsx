/* eslint-disable react/jsx-pascal-case */
import React from "react";

// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { useSelector } from "react-redux";

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Header() {
  let navigate = useNavigate();

  // 로그인 상태 불러오기
  let User = useSelector((state) => {
    return state;
  });
  console.log(User.user);

  // 메인페이지에서 스크롤 최상단에 위치했는지 구분 불러오기
  let headerTop = useSelector((state) => {
    return state.header;
  });
  // console.log(headerTop);

  // 메인페이지와 아닌 페이지 구분 불러오기  
  let mainPage = useSelector((state) => {
    return state.page;
  });
  // console.log(mainPage);


  const Form_box = styled.div`
    display: flex;
    justify-content: space-between;
    /* background-color: white; */
    background-color: ${headerTop === true ? 'transparent' : "white"};
    border: ${headerTop === true && "2px solid #fff"};

    width: 250px;
    height: 40px;
    border-radius: 20px;
    padding: 0 20px;
    margin-right: 80px;
  `;

  const Button_search = styled.button`
  
    background-color: transparent;
    border: none;
  `;

 
  const Search_form = styled.input`
    background-color: transparent;
    width: 200px;
    border-color: transparent;
    outline: none;
    color: ${headerTop === true ? 'white' : '#333'};
    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${headerTop === true ? 'white' : 'grey'};
    }
    /* :-ms-input-placeholder {
      color: red;
    } */
  `;

  return (
    <Navbar
      // expand="lg"
      variant="dark"
      sticky={mainPage === false && "top"}
      // sticky="top"
      fixed={mainPage === true && "top"}
      // fixed="top"
      // mainPage === true ? fixed="top" : sticky="top"

      style={{ backgroundColor: headerTop === true ? "transparent" : "#B4712F", height: "70px", minWidth: "850px", width: "100vw", transition: "0.4s" }}
    >
      <Container fluid style={{ maxWidth: "1276px" }}>
        <Navbar.Brand
          onClick={() => {
            navigate("/");
          }}
          style={{ cursor: "pointer" }}
        >
          <img
            alt="로고 이미지"
            src="/img/koke_logo.png"
            width="130"
            height="auto"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", fontSize: "16px" }}
            navbarScroll
          >
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
              className="text-white"
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/AllCoffee");
              }}
              className="text-white"
            >
              모든 커피
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/AllRoastery");
              }}
              className="text-white"
            >
              로스터리
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form_box>
              <Search_form
                type="search"
                placeholder="Search"
                placeholderTextColor= "#fff"
                // className="me-2 search_form"
                aria-label="Search"
              />
              <Button_search>
                <FaSearch style={{ color: headerTop === true ? "#fff" : "#B4712F", marginTop: "-6px" }} />
              </Button_search>
            </Form_box>
          </Form>
          {User.user === null ? (
            <Nav
              // className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px", fontSize: "16px" }}
              navbarScroll
            >
              <Nav.Link
                onClick={() => {
                  navigate("/Login");
                }}
                className="text-white"
              >
                로그인
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/SignUp");
                }}
                className="text-white"
              >
                회원가입
              </Nav.Link>
            </Nav>
          ) : (
            <Nav
              // className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                onClick={() => {
                  navigate("/MyPage/MyCart");
                }}
                className="text-white"
              >
                <BsBag style={{ fontSize: "30px" }} />
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/MyPage");
                }}
                className="text-white"
              >
                <BiUser style={{ fontSize: "32px" }} />
              </Nav.Link>

              <NavDropdown id="collasible-nav-dropdown" align="end" >
                <NavDropdown.Item style={{ textAlign: "end", color: "#222",  }} disabled>{User.user} 님</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => { navigate("/MyPage"); }} style={{ textAlign: "center" }}>
                  마이페이지
                </NavDropdown.Item> 
                <NavDropdown.Item onClick={() => { navigate("/MyPage"); }} style={{ textAlign: "center" }}>
                  로그아웃
                </NavDropdown.Item>
              </NavDropdown>
 
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
