// import {useState} from "react";
import Paywall from "./components/Paywall";
import Home from "./pages/Home"
import {Route, Routes} from "react-router-dom";

const App = ()  =>{
  // const [loggedIn, setLoggedIn] = useState(false)
  return (
    <>
      {/*{loggedIn ? <Home /> : <Paywall setLoggedIn={setLoggedIn} />}*/}
      <Routes>
        <Route path="/" element={<Paywall />} />
        <Route path="/welcome" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
