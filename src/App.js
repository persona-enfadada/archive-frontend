import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import ExamList from "./examList";
import Detail from "./detail";
import { useEffect } from "react";

export const pages = {
  home: { title: "Home", path: "/", components: <Home /> },
  examList: {
    title: "ExamList",
    path: "/examList/:category",
    components: <ExamList />,
  },
  detail: {
    title: "Detail",
    path: "/detail/:pathValue",
    components: <Detail />,
  },
};

function App() {
  useEffect(() => {
    document.title = pages["home"].title;
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/examList/:category"} element={<ExamList />} />
        <Route path={"/detail/:pathValue"} element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
