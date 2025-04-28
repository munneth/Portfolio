
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center pt-16 pb-32">
      <div className="container px-4 mx-auto">
        <p 
          className="font-mono text-aqua mb-5 opacity-0 animate-fade-in" 
          style={{ animationDelay: '100ms' }}
        >
          Hi, my name is
        </p>
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-light mb-4 opacity-0 animate-fade-in" 
          style={{ animationDelay: '200ms' }}
        >
          Munneth.
        </h1>
        <h2 
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-6 opacity-0 animate-fade-in" 
          style={{ animationDelay: '300ms' }}
        >
          I build things for the web.
        </h2>
        <p 
          className="text-slate max-w-xl mb-12 opacity-0 animate-fade-in" 
          style={{ animationDelay: '400ms' }}
        >
          I'm a software engineer specializing in building exceptional digital experiences.
          Currently focused on building accessible, human-centered products.
        </p>
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '500ms' }}>
          <Button asChild className="bg-transparent text-aqua border border-aqua hover:bg-aqua/10 py-6 px-7 rounded text-base font-mono">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
