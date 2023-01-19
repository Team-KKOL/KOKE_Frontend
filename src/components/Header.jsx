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

export default function Header() {
  let navigate = useNavigate();
 

  const Form_box = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
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
  `;

  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#B4712F", height: "70px", fontStyle: "" }}
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
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
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
                // className="me-2 search_form"
                aria-label="Search"
              />
              <Button_search>
                <FaSearch style={{color: "#B4712F", marginTop: "-6px"}}/>
              </Button_search>
            </Form_box>
          </Form>

          <Nav
            // className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
