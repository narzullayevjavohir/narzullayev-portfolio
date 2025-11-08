import { useRef, useEffect } from "react";
import gsap from "gsap";

const projects = [
  {
    name: "Furniro",
    desc: "Modern Furniture Ecommerce Website",
    tech: "React, Zustand, Tailwind",
  },
  {
    name: "Todo App",
    desc: "Simple task manager app",
    tech: "React, Zustand, LocalStorage",
  },
  {
    name: "Portfolio 3D",
    desc: "3D Interactive Portfolio",
    tech: "React Three Fiber",
  },
];

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!projectsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".project-card");

            gsap.to(cards, {
              duration: 0.8,
              opacity: 1,
              y: 0,
              stagger: 0.2,
              ease: "back.out(1.7)",
              delay: 0.2,
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(projectsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={projectsRef}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 max-w-6xl"
    >
      {projects.map((proj, i) => (
        <div
          key={i}
          className="project-card bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition opacity-0 translate-y-[50px]"
        >
          <h3 className="text-2xl font-semibold mb-2">{proj.name}</h3>
          <p className="text-gray-400 mb-3">{proj.desc}</p>
          <p className="text-sm text-teal-400">{proj.tech}</p>
        </div>
      ))}
    </div>
  );
}
