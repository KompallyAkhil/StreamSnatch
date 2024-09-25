import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import FAQ from './Components/FAQ/FAQ';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/home' element={<Navbar/>}/>
        <Route path='/faq' element={<FAQ />} />
      </Routes>
    </>
  );
}

export default App;
