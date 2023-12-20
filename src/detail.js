import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
  const { pathValue } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    // 데이터를 가져오는 Axios 요청
    const instance = axios.create({
      baseURL: "https://enfadada.com",
    });

    instance.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        instance
          .post(`/exam/detail/${pathValue}`)
          .then((response) => {
            if (response.status === 200) {
              setData(response.data);
            }
          })
          .catch(() => {});
        return Promise.reject(error);
      }
    );

    instance
      .post(`/exam/detail/${pathValue}`)
      .then((response) => {
        if (response.status === 200) {
          setData(response.data);
        }
      })
      .catch(() => {});
  }, [pathValue]);

  return (
    <iframe title="detail" src={data.imgUrl} width="100%" height="1000px" />
  );
}
