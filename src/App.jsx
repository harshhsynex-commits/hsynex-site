import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import SolutionDetail from './pages/SolutionDetail';
import Products from './pages/Products';
import RestaurantProduct from './pages/RestaurantProduct';
import Work from './pages/Work';
import CaseStudy from './pages/CaseStudy';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only"
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          zIndex: 9999,
          background: 'var(--hsynex-surface)',
          color: 'var(--hsynex-cyan)',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
        }}
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" style={{ flex: 1, minHeight: 'calc(100vh - var(--nav-height))' }}>
        <Routes>
          {/* 1. Home */}
          <Route path="/" element={<Home />} />

          {/* 2. Solutions Suite */}
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:slug" element={<SolutionDetail />} />
          <Route path="/solutions/web-applications" element={<SolutionDetail />} />
          <Route path="/solutions/mobile-applications" element={<SolutionDetail />} />
          <Route path="/solutions/business-software" element={<SolutionDetail />} />
          <Route path="/solutions/saas-development" element={<SolutionDetail />} />
          <Route path="/solutions/cms-admin-systems" element={<SolutionDetail />} />
          <Route path="/solutions/automation-integrations" element={<SolutionDetail />} />

          {/* 3. Products Suite */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/restaurant" element={<Navigate to="/products" replace />} />

          {/* 4. Company & Contact */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Work Page Redirects */}
          <Route path="/work" element={<Navigate to="/contact" replace />} />
          <Route path="/work/case-study" element={<Navigate to="/contact" replace />} />

          {/* Backward Compatibility Redirects & Retained Routes */}
          <Route path="/services" element={<Navigate to="/solutions" replace />} />
          <Route path="/portfolio" element={<Navigate to="/work" replace />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
