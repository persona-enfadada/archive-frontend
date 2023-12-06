import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import ExamList from "./examList";
import Detail from "./detail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/home"} element={<Home />}></Route>
          <Route path={"/examList/:category"} element={<ExamList />}></Route>
          <Route path={"/detail/:pathValue"} element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
