import { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Activities from "./components/Activities";
import Contact from "./components/Contact";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playMusic = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Auto-play was prevented:", error);
        }
      }
    };

    const timer = setTimeout(() => {
      playMusic();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <main className="bg-gray-950 text-white">
      <Navbar
        toggleMusic={toggleMusic}
        isPlaying={isPlaying}
        audioRef={audioRef}
      />

      <section
        id="home"
        className="min-h-screen flex items-center justify-center"
      >
        <Home />
      </section>

      <section
        id="about"
        className="min-h-screen flex items-center justify-center"
      >
        <About />
      </section>

      <section
        id="projects"
        className="min-h-screen flex items-center justify-center"
      >
        <Projects />
      </section>

      <section
        id="activities"
        className="min-h-screen flex items-center justify-center"
      >
        <Activities />
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center"
      >
        <Contact />
      </section>
    </main>
  );
}

export default App;
