import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import Inventory from './components/Inventory';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


export function App() {
  return(
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route  path ="Home" element = {<Home />} />
          <Route  path = "Inventory" element = {<Inventory />} />
          <Route  path = "Signin" element = {<SignIn />} />
          <Route  path = "Signup" element = {<SignUp />} /> 
          <Route  path = "*" element = {<Home />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;
