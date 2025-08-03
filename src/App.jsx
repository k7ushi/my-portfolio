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
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="projects" element={<Project></Project>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="contact" element={<Contact></Contact>}></Route>
          <Route path="blogs" element={<Blogs></Blogs>}></Route>
          <Route path="hire-me" element={<HireMe></HireMe>}></Route>
          <Route path="/blogs/:id" element={<BlogDetail></BlogDetail>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
