import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />}     />
        <Route path="/about"    element={<About />}    />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact"  element={<Contact />}  />
        {/* 404 fallback */}
        <Route path="*" element={
          <main style={{ textAlign: 'center', padding: '8rem 1rem' }}>
            <h1 style={{ fontSize: '4rem', fontWeight: 700, marginBottom: '1rem' }}>404</h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
              Page not found.
            </p>
            <a href="/" className="btn btn-primary">Go home</a>
          </main>
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
