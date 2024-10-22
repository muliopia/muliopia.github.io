import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiVuedotjs,
  SiFlutter,
  SiMysql,
  SiTensorflow,
  SiDocker,
  SiDjango,
  SiVite,
  SiFigma,
  SiWordpress,
} from "react-icons/si"; // Import Figma and WordPress icons
import { useMediaQuery } from "react-responsive";

function Techstack() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <div className="bg-gradient-to-r from-purple-500 to-green-400 p-8">
      <h1 className="text-white text-3xl text-center pb-5">
        My <span className="text-lime-600">Tech Stack</span>
      </h1>
      <div className="flex items-center pb-12 justify-center">
        <div className={`grid ${isDesktopOrLaptop ? 'grid-cols-5' : 'grid-cols-2'} gap-4`}>
          {[
            { icon: <DiJavascript1 />, color: "#F7DF1E", bgColor: "#323330" }, // JavaScript
            { icon: <DiNodejs />, color: "#8CC84B", bgColor: "#3C873A" }, // Node.js
            { icon: <DiReact />, color: "#61DAFB", bgColor: "#20232A" }, // React
            { icon: <SiVuedotjs />, color: "#41B883", bgColor: "#35495E" }, // Vue.js
            { icon: <SiFlutter />, color: "#02569B", bgColor: "#E3F2FD" }, // Flutter
            { icon: <DiGit />, color: "#F05032", bgColor: "#F5F5F5" }, // Git
            { icon: <DiPython />, color: "#3776AB", bgColor: "#F0F0F0" }, // Python
            { icon: <SiTensorflow />, color: "#FF6F20", bgColor: "#F5F5F5" }, // TensorFlow
            { icon: <DiMongodb />, color: "#4DB33D", bgColor: "#E3F2FD" }, // MongoDB
            { icon: <SiMysql />, color: "#00758F", bgColor: "#F5F5F5" }, // MySQL
            { icon: <SiDjango />, color: "#0E4B3A", bgColor: "#F5F5F5" }, // Django
            { icon: <SiVite />, color: "#646CFF", bgColor: "#E3F2FD" }, // Vite
            { icon: <SiDocker />, color: "#2496ED", bgColor: "#E3F2FD" }, // Docker
            { icon: <SiFigma />, color: "#F24E1E", bgColor: "#F5F5F5" }, // Figma
            { icon: <SiWordpress />, color: "#21759B", bgColor: "#F5F5F5" }, // WordPress
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 border border-white rounded tech-icons hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg"
              style={{ backgroundColor: item.bgColor }}
            >
              <div className="text-7xl" style={{ color: item.color }}>
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Techstack;