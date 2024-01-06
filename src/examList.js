import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./examList.css";
import { pages } from "./App";

export default function ExamList() {
  const { category } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = `${category}`;
  }, [data]);

  useEffect(() => {
    const instance = axios.create({
      baseURL: "https://enfadada.com",
    });

    instance.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        instance
          .post(`/exam/${category}`)
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
      .post(`/exam/${category}`)
      .then((response) => {
        if (response.status === 200) {
          setData(response.data);
        }
      })
      .catch(() => {});
  }, [category]);

  return (
    <div className="App">
      <h1>Data Table</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={`/detail/${item.id}`}>{item.title}</Link>
            {/* 다른 필드에 대한 데이터를 추가할 수 있음 */}
          </li>
        ))}
      </ul>
    </div>
  );
}
