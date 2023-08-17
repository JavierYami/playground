import { Route, Routes } from "react-router-dom";
import SignIn from "./Views/SignIn";
function App() {
  return (
    <div className="bg-indigo-200">
      <Routes>
        <Route path="/SignIn" element={<SignIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
