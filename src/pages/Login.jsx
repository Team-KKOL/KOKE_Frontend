import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "../components/Input";
import Styles from "./Login.module.scss";
import { Link } from "react-router-dom";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelected] = useState(false);

  // let accessToken = "";
  // localStorage.getItem("accessToken").then((token) => {
  //   accessToken = token;
  // });

  // // checkbox 확인
  // let check = "";
  // localStorage.getItem("checkbox").then((result) => {
  //   // console.log("checkbox 확인: " + result);
  //   check = result;
  // });

  useEffect(() => {
    if (isSelected) {
      console.log("자동로그인 체크");
      autoSignin();
    } else {
      console.log("자동로그인 안함");
    }
  }, []);

  const autoSignin = () => {
    console.log("자동로그인API");
    const axios = axios.create();

    axios.interceptors.request.use(
      (request) => {
        console.log("Signin Request", JSON.stringify(request));
        return request; // 요청이 전달되기 전에 작업 수행
      },
      (err) => {
        return Promise.reject(err); // 요청 오류가 있는 작업 수행
      }
    );
    axios.interceptors.response.use(
      (res) => {
        console.log("signin intercepter:" + JSON.stringify(res));
        return res;
      },
      (err) => {
        if (err.response.status === 403) {
          console.log("-----auto interceptor 403-----");
        } else {
          return Promise.reject(err);
        }
      }
    );

    // axios({
    //   method: "GET",
    //   url: "http://192.168.10.54:8500/login/auto",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json;charset=UTF-8;",
    //     Authorization: "Bearer " + accessToken,
    //   },
    // })
    //   .then((res) => {
    //     console.log("자동 로그인 완료: " + res);
    //   })
    //   .catch((err) => {
    // refreshSignin()
    //     console.log("자동로그인" + err);
    //     alert("자동로그인 기간이 만료되었습니다.");
    //   });
  };

  //refresh 재발급
  const refreshSignin = () => {
    axios({
      method: "POST",
      url: "http://192.168.10.54:8500/login/auto",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8;",
      },
      data: {
        refreshToken: localStorage.getItem("refreshToken"),
      },
    })
      .then((res) => {
        console.log("자동 로그인 완료: " + res);
      })
      .catch((err) => {
        console.log("자동로그인" + err);
        alert("자동로그인 기간이 만료되었습니다.");
      });
  };

  // const _handleCheckBtnPress = () => {
  //   // 체크박스값을 localStorage에 저장(useState 활용)
  //   setSelected(!isSelected);
  //   if (!isSelected) {
  //       localStorage.removeItem("checkbox"),
  //       localStorage.setItem("checkbox", "true");
  //     localStorage.getItem("checkbox").then((result) => {
  //       console.log("check:" + result);
  //     });
  //   } else {
  //     localStorage.removeItem("checkbox"),
  //       localStorage.setItem("checkbox", "false");
  //     localStorage.getItem("checkbox").then((result) => {
  //       console.log("check:" + result);
  //     });
  //   }
  // };

  const onSubmitLogin = () => {
    axios({
      method: "POST",
      url: "http://13.125.91.209:9002/login",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8;",
      },
      data: {
        userId: id,
        password: password,
      },
    })
      .then((res) => {
        const data = res.data.body;
        localStorage.clear();
        localStorage.setItem("userId", data.accessToken.userId);
        localStorage.setItem("accessToken", data.accessToken.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken.refreshToken);
        console.log(
          "id" +
            data.accessToken.userId +
            "access" +
            data.accessToken.accessToken +
            "refresh" +
            data.refreshToken.refreshToken
        );
        alert("로그인에 성공하였습니다.");
      })
      .catch((err) => {
        console.log("login" + err);
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      });
  };

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePw = (e) => {
    setPassword(e.target.value);
  };

  const onChangeSelect = () => {
    setSelected(!isSelected);
  };

  return (
    <div className={Styles.main}>
      <div className={Styles.border}>
        <div className={Styles.title}>koke 로그인</div>
        <div className={Styles.context}>
          <Input
            name="id"
            label="ID"
            type="text"
            value={id}
            onChange={onChangeId}
          ></Input>
          <Input
            name="pw"
            label="비밀번호"
            type="password"
            value={password}
            onChange={onChangePw}
          ></Input>
          <div className={Styles.checkbox}>
            <input className={Styles.cb} type="checkbox" id="cb" />
            <label
              className={Styles.cbLabel}
              htmlFor="cb"
              value={isSelected}
              onClick={onChangeSelect}
            >
              자동로그인
            </label>
            <span className={Styles.text}>
              아이디/비밀번호를 읽어버리셨나요?
            </span>
          </div>
          <button className={Styles.signinBtn} onClick={onSubmitLogin}>
            로그인
          </button>
          <Link to="/SignUp">
            <button className={Styles.signupBtn}>회원가입</button>
          </Link>

          <div className={Styles.footer}>
            <span>다른 계정으로 로그인</span>
          </div>
        </div>
      </div>
    </div>
  );
}
