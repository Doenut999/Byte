import HomePage from "./pages/HomePage";
import GlobalStyle from "./components/GlobalStyle";
import {Route, Routes} from "react-router-dom";
import Menu from "./pages/Menu";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

const App = ()  =>{
  return (
    <>
        <GlobalStyle />
        <Sidebar />
        <NavBar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="menu" element={<Menu />} />
        </Routes>
    </>
  );
}

export default App;
