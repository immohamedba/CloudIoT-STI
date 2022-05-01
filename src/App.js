
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedRoute from './components/ProtectedRoute';
import Signup from "./components/Signup";
import { UserAuthContextProvider } from './context/UserAuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import SAaaS from './provider/SideBarF/SAaaS';
import SEaS from './provider/SideBarF/SEaS';
import Localisation from './provider/SideBarF/maps/Localisation';
import CSaaS from './provider/SideBarF/CSaaS';
import Enregistrement from './provider/SideBarF/Enregistrement-folder/Enregistrement';
import SaaS from './provider/SideBarF/SaaS';
import Appareils from './provider/SideBarF/devices-folder/Appareils';
import Navbar from './provider/SideBarF/Navbar';
import TopBar from './provider/TopBar';
//import './provider/top-bar.css'
function App() {
  return (
    <div className='App'>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/enregistrement" element={<ProtectedRoute><div className='top-bar'><Navbar /><TopBar /></div> <Enregistrement /></ProtectedRoute>} />

          <Route path="/appareils" element={<ProtectedRoute><div className='top-bar'><Navbar /><TopBar /></div> <Appareils /></ProtectedRoute>}/>
          <Route path="/enregistrement" element={<ProtectedRoute><div className='top-bar'><Navbar /><TopBar /></div> </ProtectedRoute>} />
          <Route path="/saaas" element={<ProtectedRoute> <div className='top-bar'><Navbar /><TopBar /></div><SAaaS /> </ProtectedRoute>}/>
          <Route path="/csaas" element={<ProtectedRoute> <div className='top-bar'><Navbar /><TopBar /></div><CSaaS /></ProtectedRoute>} />
          <Route path="/saas" element={<ProtectedRoute> <div className='top-bar'><Navbar /><TopBar /></div><SaaS /></ProtectedRoute>} />
          <Route path="/seas" element={<ProtectedRoute> <div className='top-bar'><Navbar /><TopBar /></div><SEaS /></ProtectedRoute>} />
          <Route path="/localisation" element={<ProtectedRoute> <div className='top-bar'><Navbar /><TopBar /></div><Localisation /></ProtectedRoute>} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}
export default App;
