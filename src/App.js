import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home';
import Faq from './routes/Faq/Faq';
// import Sidebar from './components/SideBar/Sidebar';
// import Principal from './components/Principal/Principal';

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/principal" element={<Principal />} > */}
        {/* </Route> */}
        <Route path="home" element={<Home />} />
          <Route path="faq" element={<Faq />} />
        
      </Routes>
    </>
  );
}

export default App;