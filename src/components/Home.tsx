import { Mail, Github, Linkedin, FileText } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen text-white flex items-center justify-center px-4">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="/my_picture.jpg"
            alt="Narzullayev Javohir"
            className="w-64 h-64 object-cover rounded-full border-4 border-gray-700"
          />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Narzullayev Javohir</h1>
            <p className="text-gray-400 text-lg">Frontend Developer</p>
          </div>

          <p className="text-gray-300 leading-relaxed">
            I build modern web applications with React and TypeScript.
          </p>

          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "JavaScript", "Tailwind"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm border border-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              <FileText className="w-5 h-5" />
              View Work
            </button>

            <div className="flex gap-3">
              <a
                href="mailto:javohir@example.com"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
