import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(".main-layout", {
        opacity: 0,
        y: 40,
        scale: 0.98,
        duration: 1.2,
        ease: "power4.out",
      });

      tl.from(
        ".intro-text",
        { y: 40, opacity: 0, stagger: 0.2, duration: 0.8 },
        "-=0.6"
      )
        .from(".skill-tag", { scale: 0, opacity: 0, stagger: 0.1 }, "-=0.4")
        .from(".social-link", { y: 20, opacity: 0, stagger: 0.15 }, "-=0.4")
        .from(
          ".profile-img",
          {
            opacity: 0,
            scale: 0.8,
            rotate: -10,
            duration: 1,
          },
          "-=0.8"
        );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="main-layout min-h-screen bg-gradient-to-b from-gray-950 via-gray-950 to-gray-950 flex items-center justify-center px-6 py-10 text-white overflow-hidden"
    >
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-14 items-center">
        {/* --- LEFT: IMAGE --- */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-xl opacity-30"></div>
            <img
              src="/my_picture.jpg"
              alt="Narzullayev Javohir"
              className="profile-img relative w-72 h-72 object-cover rounded-full border-4 border-gray-800 shadow-2xl"
            />
          </div>
        </div>

        {/* --- RIGHT: TEXT CONTENT --- */}
        <div className="space-y-8">
          <div className="intro-text">
            <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Narzullayev Javohir
            </h1>
            <p className="text-gray-400 text-lg mt-1">Frontend Developer</p>
          </div>

          <p className="intro-text text-gray-300 leading-relaxed">
            I create <span className="text-purple-400 font-medium">modern</span>{" "}
            and <span className="text-pink-400 font-medium">responsive</span>{" "}
            web applications using React, TypeScript, and Tailwind CSS.
          </p>

          {/* --- Skills --- */}
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "JavaScript", "Tailwind"].map((skill) => (
              <span
                key={skill}
                className="skill-tag px-3 py-1 bg-gray-800/60 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-purple-500 hover:text-purple-400 transition"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* --- Buttons + Social Links --- */}
          <div className="intro-text flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-transform transform hover:scale-105">
              <FileText className="w-5 h-5" />
              View Work
            </button>

            <div className="flex items-center gap-3">
              <a
                href="mailto:javohir@example.com"
                className="social-link p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-transform transform hover:-translate-y-1"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-transform transform hover:-translate-y-1"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-transform transform hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
