import { Route, Routes } from "react-router-dom";
import SignIn from "./Views/SignIn";
function App() {
  return (
    <div>
      <Routes>
        <Route />
        <Route path="/SignIn" element={<SignIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
