import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import MainPage from "./components/MainPage_Component/MainPage"

function App() {
  return (
< BrowserRouter>
    <Routes>
      <Route path="/" exact={true} element={<MainPage/>} >
        
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
