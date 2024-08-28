import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import ProjectList from './ProjectList';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// Add Route for Contact
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/projects" element={<ProjectList />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />  {/* New Route */}
</Routes>

