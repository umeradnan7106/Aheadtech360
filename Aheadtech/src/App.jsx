import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import { Navbar1 } from './Navbar1';
import { Header84 } from "./components/home/Header84";
import { Layout522 } from "./components/home/Layout522";
import { Layout358 } from "./components/home/Layout358";
import { Layout32 } from "./components/home/Layout32";
import { Layout298 } from "./components/home/Layout298";
import { Testimonial42 } from "./components/home/Testimonial42";
import { Logo3 } from "./components/home/Logo3";
import { Blog34 } from "./components/home/Blog34";
import { Pricing7 } from "./components/home/Pricing7";
import { Faq13 } from "./components/home/Faq13";
import { Footer3 } from './components/home/Footer3';
import Contact from './components/contact';

// Home Page Component
function HomePage() {
  return (
    <>
      <Header84 />
      <Layout522 />
      <Layout358 />
      <Layout32 />
      <Layout298 />
      <Testimonial42 />
      <Logo3 />
      <Blog34 />
      <Faq13 />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer3 />
    </Router>
  )
}

export default App