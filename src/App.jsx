import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Test from './views/Test';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: Verdana;
  }
`

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/test' element={<Test />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
      <GlobalStyle/>
    </Router>
  );
}

export default App;
