import HomePage from "./pages/HomePage";
import GlobalStyle from "./components/GlobalStyle";
import {Route, Routes} from "react-router-dom";
import Menu from "./pages/Menu";

const App = ()  =>{
  return (
    <>
        <GlobalStyle />
        {/*<HomePage />*/}
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="menu" element={<Menu />} />
        </Routes>
    </>
  );
}

export default App;
