import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

import Home from './pages/Home';
import Project from './pages/Project';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blog';
import HireMe from './pages/HireMe';
import BlogDetail from "./pages/BlogDetail";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Project />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="hire-me" element={<HireMe />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
