
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiWindows11,
  SiUbuntu,
} from "react-icons/si"; // Import Ubuntu icon
import { useMediaQuery } from "react-responsive";

function Toolstack() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <>
      {isDesktopOrLaptop ? (
        <div className="flex text-white justify-center flex-wrap pb-12">
          <div className="p-4 mx-4 px-5 border border-white rounded tech-icons hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg" style={{ backgroundColor: "#007ACC" }}>
            <SiVisualstudiocode className="text-7xl" style={{ color: "#FFFFFF" }} /> {/* Original color for VS Code */}
          </div>
          <div className="p-4 mx-4 px-5 border border-white rounded tech-icons hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg" style={{ backgroundColor: "#FF6C37" }}>
            <SiPostman className="text-7xl" style={{ color: "#FFFFFF" }} /> {/* Original color for Postman */}
          </div>
          <div className="p-4 mx-4 px-5 border border-white rounded tech-icons hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg" style={{ backgroundColor: "#00A3E0" }}>
            <SiWindows11 className="text-7xl" style={{ color: "#FFFFFF" }} /> {/* Original color for Windows */}
          </div>
          
          <div className="p-4 mx-4 px-5 border border-white rounded tech-icons hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg" style={{ backgroundColor: "#F5F5F5" }}>
            <SiLinux className="text-7xl" style={{ color: "#FCC624" }} /> {/* Original color for Linux */}
          </div>
         
        </div>
      ) : (
        <div className="flex text-white justify-center flex-wrap pb-12">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 mx-1 px-5 border border-white rounded tech-icons hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg" style={{ backgroundColor: "#007ACC" }}>
              <SiVisualstudiocode className="text-7xl" style={{ color: "#FFFFFF" }} />
            </div>
            <div className="p-4 mx-1 px-5 border border-white rounded tech-icons hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg" style={{ backgroundColor: "#FF6C37" }}>
              <SiPostman className="text-7xl" style={{ color: "#FFFFFF" }} />
            </div>
            <div className="p-4 mx-1 px-5 border border-white rounded tech-icons hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg" style={{ backgroundColor: "#00A3E0" }}>
              <SiWindows11 className="text-7xl" style={{ color: "#FFFFFF" }} />
            </div>
            <div className="p-4 mx-1 px-5 border border-white rounded tech-icons hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg" style={{ backgroundColor: "#F5F5F5" }}>
              <SiLinux className="text-7xl" style={{ color: "#FCC624" }} />
            </div>
            </div>
        </div>
      )}
    </>
  );
}

export default Toolstack;