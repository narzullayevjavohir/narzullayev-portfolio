import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Activities() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !bgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = gsap.timeline();

            // Background scale animation
            tl.fromTo(
              bgRef.current,
              { scale: 0.8, opacity: 0 },
              {
                duration: 1.2,
                scale: 1,
                opacity: 1,
                ease: "power2.out",
              }
            );

            // Content animation
            tl.to(
              sectionRef.current,
              {
                duration: 0.8,
                opacity: 1,
                y: 0,
                ease: "back.out(1.7)",
              },
              "-=0.5"
            );
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
    <div className="relative flex justify-center items-center p-6">
      {/* Animated background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl"
      />

      {/* Content */}
      <div
        ref={sectionRef}
        className="max-w-2xl text-center p-8 opacity-0 translate-y-[100px] relative z-10"
      >
        <h2 className="text-4xl font-semibold mb-4">Activities</h2>
        <p className="text-gray-400">
          Outside of coding, I practice calisthenics, create tech videos, and
          explore creative projects that combine design and development.
        </p>
      </div>
    </div>
  );
}
