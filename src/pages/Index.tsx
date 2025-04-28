
import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Experience from "../components/home/Experience";
import Education from "../components/home/Education";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Index;
