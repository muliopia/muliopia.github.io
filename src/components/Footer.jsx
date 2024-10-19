import { useMediaQuery } from "react-responsive";
import { FaEnvelope, FaWhatsapp, FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <footer className="bg-gradient-to-r from-purple-600 to-green-500 text-xl text-white py-4 text-center">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="mb-4">Copyright &copy; 2024 Muliopia</p>
        <div className="inline-flex space-x-4">
          <a
            href="mailto:mulugetasahil31@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-2xl hover:text-lime-400 transition-colors duration-300" />
          </a>
          <a
            href="https://wa.me/+251946277434"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-2xl hover:text-lime-400 transition-colors duration-300" />
          </a>
          <a
            href="https://t.me/Muliopia1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram className="text-2xl hover:text-lime-400 transition-colors duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/muliopia/">
            <FaLinkedin className="text-2xl hover:text-lime-400 transition-colors duration-300" />
          </a>
          <a
            href="https://github.com/muliopia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-lime-400 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;