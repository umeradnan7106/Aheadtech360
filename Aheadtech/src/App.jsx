import { useState } from 'react'
import './App.css'
// import { createBrowserRouter } from 'react-router-dom'

// import { Index } from './components/home';


import { Navbar1 } from './components/home/Navbar1';
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


function App() {
  const [count, setCount] = useState(0)

  // const router = createBrowserRouter ([

  //   ]);

  return (
    <>

    {/* <Index /> */}

      <Navbar1 />
      <Header84 />
      <Layout522 />
      <Layout358 />
      <Layout32 />
      <Layout298 />
      <Testimonial42 />
      <Logo3 />
      <Blog34 />
      {/* <Pricing7 /> */}
      <Faq13 />
      <Footer3/>

    </>
  )
}

export default App
