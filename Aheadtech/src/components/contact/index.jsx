import React from "react";
import { Header62 } from "./components/Header62";
import { Contact14 } from "./components/Contact14";
import { Contact6 } from "./components/Contact6";
import { Logo3 } from "./components/Logo3";
import { Testimonial42 } from "./components/Testimonial42";
import { Faq13 } from "./components/Faq13";
import { ContactForm } from "./components/ContactForm";

export default function Page() {
  return (
    <div>
      <Header62 />
      {/* <Contact14 /> */}
      {/* <Contact6 /> */}
      <ContactForm />
      <Logo3 />
      <Testimonial42 />
      <Faq13 />
    </div>
  );
}
