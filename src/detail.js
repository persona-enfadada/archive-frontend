import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
  const { pathValue } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    // 데이터를 가져오는 Axios 요청
    axios
      .post(`https://enfadada.com/exam/detail/${pathValue}`)
      .then((response) => {
        setData(response.data); // 받아온 데이터를 state에 저장
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pathValue]);

  return (
    <iframe title="detail" src={data.imgUrl} width="100%" height="1000px" />
  );
}
