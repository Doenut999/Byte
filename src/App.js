import Paywall from "./components/Paywall";
import Home from "./pages/Home"
import {Route, Routes} from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import NavBar from "./components/NavBar";

const App = ()  =>{

  return (
    <>
        <GlobalStyle />
        <NavBar />
      <Routes>
        <Route path="/" element={<Paywall />} />
        <Route path="/welcome" element={<Home />} />
      </Routes>
    </>
  );
}



export default App;
