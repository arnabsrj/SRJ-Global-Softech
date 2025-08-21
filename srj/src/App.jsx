import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import Blog from "./pages/BlogPage";
import BlogDetails from "./components/BlogDetails";
import PricingChart from "./pages/Pricing";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";

// Admin Pages
import AdminLogin from "./admin/pages/AdminLogin";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminProtectedRoute from "./admin/routes/AdminProtectedRoute";
import AddBlog from "./admin/components/AddBlog";

// Layout for public pages
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <CustomCursor />
      {children}
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <>
      {/* ScrollToTop must be inside Router context */}
      <ScrollToTop />

      <Routes>
        {/* Public Website Pages */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/services/:id"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/industries"
          element={
            <Layout>
              <Industries />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <Layout>
              <BlogDetails />
            </Layout>
          }
        />
        <Route
          path="/pricing"
          element={
            <Layout>
              <PricingChart />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/privacy"
          element={
            <Layout>
              <Privacy />
            </Layout>
          }
        />
        <Route
          path="/terms"
          element={
            <Layout>
              <Terms />
            </Layout>
          }
        />
        <Route
          path="/cookies"
          element={
            <Layout>
              <Cookies />
            </Layout>
          }
        />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard/*"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        >
          <Route path="add-blog" element={<AddBlog />} />
          <Route index element={<div>Welcome to the Admin Panel</div>} />
        </Route>
      </Routes>

      {/* Toast container for global notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
