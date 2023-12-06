import { Link } from "react-router-dom";

export default function Home() {
  const textStyle = {
    fontSize: "100px", // 텍스트 크기 조절
    fontWeight: "bold", // 필요에 따라 다른 스타일 속성도 추가할 수 있습니다.
    color: "black",
  };

  return (
    <div className="App">
      <p style={textStyle}>Software Archive</p>
      <br />
      <Link to={"/examList/computer_architecture"}>컴퓨터 구조</Link>
    </div>
  );
}
