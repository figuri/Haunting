import "./index.css";
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
    <NavBar/>
      <Outlet />
      <Footer/>
    </>
  );
}

export default App;