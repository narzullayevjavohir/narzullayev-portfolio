import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate in when section comes into view
            gsap.to(entry.target, {
              duration: 0.8,
              opacity: 1,
              scale: 1,
              ease: "back.out(1.7)",
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="text-center max-w-md p-6 opacity-0 scale-90"
    >
      <h2 className="text-4xl font-semibold mb-4">Contact Me</h2>
      <p className="text-gray-400 mb-6">
        Let's work together or talk about exciting ideas!
      </p>
      <a
        href="mailto:asadbek@example.com"
        className="bg-teal-500 hover:bg-teal-400 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        Say Hello 👋
      </a>
    </div>
  );
}
