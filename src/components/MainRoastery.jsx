import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function MainRoastery() {

  const [roastery, setRoastery] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://13.125.91.209:9002/roastery?sort=NAME",
      // timeout: 5000,
      responseType: "json",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8;",
      },
    })
      .then((res) => {
        const data = JSON.stringify(res.data);
        setRoastery(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <>
    <div>메인로스터리 4곳</div>
    </>
  )
}
