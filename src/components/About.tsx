import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (
        !container.current ||
        !headingRef.current ||
        !textRef.current ||
        !imageRef.current
      )
        return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%", // container top reaches 80% of viewport
        },
      });

      // Heading: left to right
      tl.from(headingRef.current, {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Text: right to left
      tl.from(
        textRef.current,
        {
          x: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );

      // Image: bottom to top
      tl.from(
        imageRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.8,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.6"
      );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto p-6"
    >
      {/* --- Text Content --- */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h2
          ref={headingRef}
          className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
        >
          About Me
        </h2>
        <p ref={textRef} className="text-gray-400 text-lg leading-relaxed">
          I'm a passionate Frontend Developer who loves building immersive web
          experiences using React, Three.js, and modern tools like Zustand and
          Framer Motion. I enjoy creating clean UI and smooth animations that
          bring interfaces to life.
        </p>
      </div>

      {/* --- Image --- */}
      <div
        ref={imageRef}
        className="flex-1 relative w-140 h-140 rounded-xl overflow-hidden shadow-2xl border-4 border-gray-800"
      >
        <img
          src="/3d_about_picture.jpg"
          alt="3D About Illustration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-purple-500 via-indigo-500 to-pink-500 opacity-20 blur-2xl"></div>
      </div>
    </section>
  );
}
