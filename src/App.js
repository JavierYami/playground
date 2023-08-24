import { Route, Routes } from "react-router-dom";
import SignIn from "./Views/SignIn";
import { Toaster, toast } from 'react-hot-toast';

function App() {
  return (
    <div>
      <div><Toaster/></div>
      <Routes>
        <Route />
        <Route path="/SignIn" element={<SignIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
