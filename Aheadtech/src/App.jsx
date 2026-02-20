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
import About from './components/about';
import Services from './components/services';
import Portfolio from './components/portfolio';
import Policies from './components/policies';
import TermsAndConditions from './components/terms-&-conditions';
import Blog from './components/blog';
import BlogPost from './components/blog-post';
import CaseStudy from './components/case-study';
import ConsultingServices from './components/consulting-services';
import DevelopmentServices from './components/development-services';
import GoogleAds from './components/google-ads';
import MarketingServices from './components/marketing-services';
import MetaAds from './components/meta-ads';
import Resources from './components/resources';
import ReviewsTestimonials from './components/reviews-&-testimonials';
import SEO from './components/seo';

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
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/terms&conditions" element={<TermsAndConditions />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-post" element={<BlogPost />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/consulting-services" element={<ConsultingServices />} />
        <Route path="/development-services" element={<DevelopmentServices />} />
        <Route path="/google-ads" element={<GoogleAds />} />
        <Route path="/marketing-services" element={<MarketingServices />} />
        <Route path="/meta-ads" element={<MetaAds />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/reviews" element={<ReviewsTestimonials />} />
        <Route path="/seo" element={<SEO />} />
      </Routes>
      <Footer3 />
    </Router>
  )
}

export default App
