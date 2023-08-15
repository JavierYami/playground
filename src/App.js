import { Route, Routes } from "react-router-dom";
import Login from "./Views/Login";
function App() {
  return (
    <div className="bg-indigo-200">
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
