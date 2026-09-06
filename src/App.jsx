import React, { useState } from "react";

import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Problem from "./components/Problem/Problem.jsx";
import Services from "./components/Services/Services.jsx";
import HowItWorks from "./components/HowItWorks/HowItWorks.jsx";
import Team from "./components/Team/Team.jsx";
import CtaAudit from "./components/CtaAudit/CtaAudit.jsx";
import Proof from "./components/Proof/Proof.jsx";
import Products from "./components/Products/Products.jsx";
import Faq from "./components/Faq/Faq.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <HowItWorks />
      <Team />
      <CtaAudit />
      <Proof />
      <Products />
      <Faq />
      <Footer />
    </>
  );
}
