import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/public/Navbar";
import Footer from "./components/public/Footer";
import AdminNavbar from "./components/admin/AdminNavbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Dashboard from "./pages/admin/Dashboard";
import ProductManagement from "./pages/admin/ProductManagement";
import CategoryManagement from "./pages/admin/CategoryManagement";
import ReservationManagement from "./pages/admin/ReservationManagement";
import NewsManagement from "./pages/admin/NewsManagement";
import CompanyConfig from "./pages/admin/CompanyConfig";
import AccessibilityPanel from "./components/common/AccessibilityPanel";

function App() {
  return (
    <>
      <div id="accessible-content" className="App">
        <Routes>
          {/* Public Routes */}
          <Route
            path="/*"
            element={
              <div className="d-flex flex-column min-vh-100">
                <Navbar />
                <main className="flex-grow-1">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            }
          />

          {/* Admin Routes */}
          <Route
            path="/admin/*"
            element={
              <div className="admin-panel min-vh-100">
                <AdminNavbar />
                <main>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/products" element={<ProductManagement />} />
                    <Route
                      path="/categories"
                      element={<CategoryManagement />}
                    />
                    <Route
                      path="/reservations"
                      element={<ReservationManagement />}
                    />
                    <Route path="/news" element={<NewsManagement />} />
                    <Route path="/config" element={<CompanyConfig />} />
                  </Routes>
                </main>
              </div>
            }
          />
        </Routes>
      </div>
      <AccessibilityPanel />
    </>
  );
}

export default App;
