import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Home/Services/Services';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
