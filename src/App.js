import Home from "./components/routes/home/Home";
import Navigation from "./components/routes/navigation/Navigation";
import Authentication from "./components/routes/sign-in/Authentication";
import Shop from "./components/routes/shop/Shop";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path="auth" element={<Authentication/>}/>
          <Route path="shop" element={<Shop/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
