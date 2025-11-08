import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current || !textRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = gsap.timeline();

            // Animate the entire section
            tl.to(sectionRef.current, {
              duration: 1,
              opacity: 1,
              y: 0,
              ease: "power3.out",
            });

            // Stagger animation for heading and text
            tl.fromTo(
              [headingRef.current, textRef.current],
              { y: 50, opacity: 0 },
              {
                duration: 0.8,
                y: 0,
                opacity: 1,
                stagger: 0.3,
                ease: "back.out(1.7)",
              },
              "-=0.5"
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="max-w-2xl text-center p-6 opacity-0 translate-y-[100px]"
    >
      <h2 ref={headingRef} className="text-4xl font-semibold mb-4">
        About Me
      </h2>
      <p ref={textRef} className="text-gray-400">
        I'm a passionate Frontend Developer who loves building immersive web
        experiences using React, Three.js, and modern tools like Zustand and
        Framer Motion. I enjoy creating clean UI and smooth animations that
        bring interfaces to life.
      </p>
    </div>
  );
}
