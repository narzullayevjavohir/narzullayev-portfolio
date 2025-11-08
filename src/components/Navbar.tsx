import Music, { type MusicType } from "./Music";

const Navbar = ({ isPlaying, audioRef, toggleMusic }: MusicType) => {
  const sections = ["home", "about", "projects", "activities", "contact"];

  return (
    <nav className="fixed top-0 left-0 items-center w-full bg-black/40 backdrop-blur-md flex py-4 px-6 justify-around z-50">
      <div className="w-10 h-10 cursor-pointer">
        <img src="/icon.jpg" alt="logo" />
      </div>
      <ul className="flex space-x-6 text-gray-300 font-medium uppercase">
        {sections.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className="hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <Music
        toggleMusic={toggleMusic}
        isPlaying={isPlaying}
        audioRef={audioRef}
      />
    </nav>
  );
};

export default Navbar;
