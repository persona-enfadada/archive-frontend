import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./examList.css";

export default function ExamList() {
  const { category } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post(`https://enfadada.com/exam/${category}`)
      .then((response) => {
        setData(response.data); // 받아온 데이터를 state에 저장
      })
      .catch((error) => {
        console.log(error);
      });
    // 데이터를 가져오는 Axios 요
  }, [category]); // 빈 배

  console.log(data.length);

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
