import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home';
import Faq from './routes/Faq/Faq';
// import Sidebar from './components/SideBar/Sidebar';
import Principal from './components/Principal/Principal';

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/principal" element={<Principal />} >
          <Route path="faq" element={<Faq />} />
        </Route>
        <Route path="home" element={<Home />} />
        
      </Routes>
    </>
  );
}

export default App;