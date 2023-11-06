import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home';
import Faq from './routes/Faq/Faq';
import Playlist from './components/Playlist/Playlist';
import AddPlaylist from './routes/AddPlaylist/AddPlaylist'
import Search from './routes/Search/Search';
import Register from './routes/Register/Register';
import Login from './routes/Login/Login';


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
          <Route path="search" element={<Search />} />
          <Route path="AddPlaylist" element={<AddPlaylist />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
      </Routes>

    </>
  );
}

export default App;