import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";

function AppLayout() {
  const location = useLocation();

  // Pages without Navbar & Footer
  const hideLayout = ["/login", "/signup"];

  const shouldHide = hideLayout.includes(location.pathname);

  return (
    <>
      {!shouldHide && <Navbar />}

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>

      {!shouldHide && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
