import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home';
import Faq from './routes/Faq/Faq';
import Playlist from './components/Playlist/Playlist';
import SearchBar from './SearchBar/SearchBar';
import Register from './routes/Register/Register';
import Login from './routes/Login/Login';

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
          <Route path="playlist" element={<Playlist />} />
          <Route path="SearchBar" element={<SearchBar />} />
          <Route path="Register" element={<Register />} />
          <Route path="Login" element={<Login />} />


      </Routes>
    </>
  );
}

export default App;