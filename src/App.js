import Home from "./components/routes/home/Home";
import Navigation from "./components/routes/navigation/Navigation";
import SignIn from "./components/routes/sign-in/SignIn";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path="signin" element={<SignIn/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
