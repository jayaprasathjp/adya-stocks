
import "./App.css";
import TopStocks from "./components/TopStocks";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/Navbar";
import HeroSection from "./components/hero-section";
import LoginPage from "./components/auth/login";
import MyStocks from "./components/MyStocks";
import RegisterPage from "./components/auth/register";
import AddStock from "./components/AddStock";
import Buy from "./components/Buy";
import Sell from "./components/Sell";
import ProfilePage from "./components/ProfilePage";

function App() {
  const location = useLocation();
  const showNavBar = !["/", "/login", "/register"].includes(location.pathname);

  return (
    <>
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/TopStocks" element={<TopStocks />} />
        <Route path="/myStocks" element={<MyStocks />} />
        <Route path="/addStocks" element={<AddStock />} />
        <Route path="/Buy" element={<Buy />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Sell" element={ <Sell/>}/>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
