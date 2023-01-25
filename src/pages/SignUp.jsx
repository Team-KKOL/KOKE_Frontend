import React, { useState } from "react";
import axios from "axios";
import Input from "../components/Input";
import Styles from "./SignUp.module.scss";

export default function SignUp() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [cb, setCb] = useState(false);

  //오류메세지 저장
  const [idMessage, setIdMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [phoneNumMessage, setPhoneNumMessage] = useState("");

  //유효성 검사
  const [isId, setIsId] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isPhoneNum, setIsPhoneNum] = useState("");

  //비밀번호 숨기기
  // const [passwordShown, setPasswordShown] = useState(false);

  const onSubmit = () => {
    axios({
      method: "POST",
      url: "http://13.125.91.209:9002/signUp",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8;",
      },
      data: {
        userId: id,
        password: password,
        name: name,
        email: email,
        phoneNo: phoneNum,
      },
    })
      .then((res) => {
        const data = JSON.stringify(res.data.message);
        alert(data);
      })
      .catch((err) => {
        console.log("login" + err);
        alert("다시 입력해주세요.");
      });
  };

  const onCheckDuplicateId = () => {
    axios({
      method: "GET",
      url: `http://13.125.91.209:9002/check/id`,
      params: { userId: id },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8;",
      },
    })
      .then((res) => {
        const data = JSON.stringify(res.data.message);
        alert(data);
      })
      .catch((err) => {
        console.log("login" + err);
        alert("이미 존재하는 ID입니다.");
      });
  };

  const onCheckDuplicateEmail = () => {
    axios({
      method: "GET",
      url: `http://13.125.91.209:9002/check/email`,
      params: { email: email },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8;",
      },
    })
      .then((res) => {
        const data = JSON.stringify(res.data.message);
        alert(data);
      })
      .catch((err) => {
        console.log("login" + err);
        alert("이미 존재하는 E-mail입니다.");
      });
  };

  const onChangeId = (e) => {
    const regex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,20}$/;
    setId(e.target.value);
    if (regex.test(e.target.value)) {
      setIdMessage("올바른 ID 형식입니다");
      setIsId(true);
    } else {
      setIdMessage("영문,숫자 조합 8자리 입력해주세요");
      setIsId(false);
    }
  };

  const onChangeName = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 5 || e.target.value.length > 11) {
      setNameMessage("5글자 이상 11글자 이하로 입력해주세요");
      setIsName(false);
    } else {
      setNameMessage("올바른 이름 형식입니다");
      setIsName(true);
    }
  };

  const onChangeEmail = (e) => {
    const regex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    setEmail(e.target.value);
    if (regex.test(e.target.value)) {
      setEmailMessage("올바른 이메일 형식입니다");
      setIsEmail(true);
    } else {
      setEmailMessage("올바른 이메일 형식을 입력해주세요");
      setIsEmail(false);
    }
  };

  const onChangePw = (e) => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,20}$/;
    setPassword(e.target.value);
    if (regex.test(e.target.value)) {
      setPasswordMessage("올바른 비밀번호 형식입니다");
      setIsPassword(true);
    } else {
      setPasswordMessage(
        "영문,숫자,특수문자 조합 8자리 이상 20자리 이하 입력해주세요"
      );
      setIsPassword(false);
    }
  };

  const onChangePwConfirm = (e) => {
    setPasswordConfirm(e.target.value);
    if (password === passwordConfirm) {
      setPasswordConfirmMessage("확인이 완료되었습니다");
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage("비밀번호가 일치하지 않습니다");
      setIsPasswordConfirm(false);
    }
  };

  const onChangePhoneNum = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    regex.test(e.target.value);
    setPhoneNum(e.target.value);
    if (e.target.value.length === 13) {
      setPhoneNumMessage("올바른 전화번호 형식입니다");
      setIsPhoneNum(true);
    } else {
      setPhoneNumMessage("전화번호 13자리를 입력해주세요");
      setIsPhoneNum(false);
    }
  };

  const onChangeCb = () => {
    setCb(!cb);
  };

  // const togglePassword = () => {
  //   setPasswordShown(!passwordShown);
  // };

  return (
    <div className={Styles.main}>
      <div className={Styles.border}>
        <div className={Styles.title}>koke 가입하기</div>
        <div className={Styles.context}>
          <div className={Styles.idCheck}>
            <div className={Styles.idCheckDiv}>
              <Input
                // style={{ width: "100%", textAlign: "left" }}
                value={id}
                name="id"
                label="ID"
                type="text"
                onChange={onChangeId}
              ></Input>
              <button
                className={Styles.duplicateCheck}
                onClick={onCheckDuplicateId}
              >
                중복체크
              </button>
            </div>
            <span className={`message ${isId ? "success" : "error"}`}>
              {idMessage}
            </span>
          </div>

          <div className={Styles.idCheck}>
            <div className={Styles.idCheckDiv}>
              <Input
                value={email}
                name="email"
                label="E-mail"
                type="email"
                onChange={onChangeEmail}
              ></Input>
              <button
                className={Styles.duplicateCheck}
                onClick={onCheckDuplicateEmail}
              >
                중복체크
              </button>
            </div>
            <span className={`message ${isEmail ? "success" : "error"}`}>
              {emailMessage}
            </span>
          </div>

          <Input
            value={name}
            name="text"
            label="Name"
            type="text"
            onChange={onChangeName}
          ></Input>
          <span className={`message ${isName ? "success" : "error"}`}>
            {nameMessage}
          </span>

          <Input
            value={password}
            name="password"
            label="비밀번호"
            type="password"
            // type={passwordShown ? "text" : "password"}
            onChange={onChangePw}
          >
            {/* <button onClick={togglePassword} button="dnsaknd"></button> */}
          </Input>
          <span className={`message ${isPassword ? "success" : "error"}`}>
            {passwordMessage}
          </span>
          <Input
            value={passwordConfirm}
            name="passwordConfirm"
            label="비밀번호 확인"
            type="password"
            onChange={onChangePwConfirm}
          ></Input>
          <span
            className={`message ${isPasswordConfirm ? "success" : "error"}`}
          >
            {passwordConfirmMessage}
          </span>
          <Input
            value={phoneNum}
            name="phoneNum"
            label="전화번호"
            type="text"
            placeholder="010-0000-0000"
            maxlength={13}
            onChange={onChangePhoneNum}
          ></Input>
          <span className={`message ${isPhoneNum ? "success" : "error"}`}>
            {phoneNumMessage}
          </span>
          <div className={Styles.checkbox}>
            <input
              className={Styles.cb}
              type="checkbox"
              id="cb"
              value={cb}
              onClick={onChangeCb}
            />
            <label className={Styles.cbLabel} htmlFor="cb">
              koke 이용약관 동의(필수)
            </label>
          </div>
          <button
            onClick={onSubmit}
            className={Styles.signupBtn}
            disabled={
              !(
                isId &&
                isName &&
                isEmail &&
                isPassword &&
                isPasswordConfirm &&
                isPhoneNum &&
                cb
              )
            }
          >
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
}
