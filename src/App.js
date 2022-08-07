import HomePage from "./pages/HomePage";
import GlobalStyle from "./components/GlobalStyle";
import {Route, Routes} from "react-router-dom";
import Menu from "./pages/Menu";
import NavBar from "./components/NavBar";

const App = ()  =>{
  return (
    <>
        <GlobalStyle />
        {/*<HomePage />*/}
        <NavBar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="menu" element={<Menu />} />
        </Routes>
    </>
  );
}

export default App;
