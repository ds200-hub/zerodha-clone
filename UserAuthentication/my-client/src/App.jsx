import {Route, Routes} from "react-router-dom";
import Home from "../src/pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";




function App() {
  return ( 
    <>
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
    </Routes>
    </>
   );
}

export default App;