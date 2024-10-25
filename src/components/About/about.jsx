import { useMediaQuery } from "react-responsive";
import Techstack from "./techstack";
import Toolstack from "./toolstack";
import Github from "./github";

function About() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <div className="font-poppins bg-gradient-to-r from-purple-500 to-green-400 h-fit w-full p-8">
      {isDesktopOrLaptop ? (
        <>
          <div className="w-full pb-12 pt-36 flex justify-center">
            <div className="w-[80%] pt-10">
              <h1 className="text-white text-2xl pb-6">
                A little about <span className="text-lime-600">ME</span>
              </h1>
              <p className="text-white text-2xl mb-5 mx-10 text-justify">
                Hello there, <span className="px-3 text-lime-500">Mulugeta</span> here. Born in Filakit around North Wollo, Ethiopia. I'm a fresh graduate in Electrical and Computer Engineering from Axum/Dire Dawa University who is in love with programming and problem-solving, specializing in the computer stream.
                <br />
                <br />
                Apart from coding, what do I enjoy?
                <br /> <br /> 👉🏾 Playing basketball
                <br /> 👉🏾 Gaming
                <br /> 👉🏾 Reading books
                <br /> 👉🏾 Traveling
                
              
                <br/>
              <br/>I’m eager to leverage my technical skills and enthusiasm for technology in a challenging engineering role.
              
                
                
              </p>
            </div>
          </div>
          <h1 className="bg-gradient-to-r from-purple-600 to-green-500 shadow-lg  text-white text-3xl p-3 text-center rounded">
            Professional <span className="text-lime-600">Skillset</span>
          </h1>
          <Techstack />
          <h1 className="bg-gradient-to-r from-purple-600 to-green-500 text-white text-3xl mb-8 p-3 text-center rounded">
            <span className="text-lime-600">Tools</span> I use
          </h1>
          <Toolstack />
          <Github />
        </>
      ) : (
        <>
          <h1 className="text-white text-2xl pt-36 pb-3 text-center">
            A little about <span className="text-lime-600">ME</span>
          </h1>
          <p className="text-white text-lg mb-10 mx-6 text-left">
            Hello there, <span className="text-lime-500">Mulugeta</span> here. Born in Filakit around North Wollo, Ethiopia. I'm a fresh graduate in Electrical and Computer Engineering from Axum/Dire Dawa University who is in love with programming and problem-solving, specializing in the computer stream.
            <br />
            <br />
            Apart from coding, what do I enjoy?
            <br /> <br /> 👉🏾 Playing basketball
            <br /> 👉🏾 Gaming
            <br /> 👉🏾 Reading books
            <br /> 👉🏾 Traveling
            <br/>
              <br/>I’m eager to leverage my technical skills and enthusiasm for technology in a challenging engineering role.
              
          </p>
          <h1 className="bg-gradient-to-r from-purple-600 to-green-500 text-white text-2xl p-3 text-center">
            Professional <span className="text-lime-600">Skillset</span>
          </h1>
          <Techstack />
          <h1 className="bg-gradient-to-r from-purple-600 to-green-500 text-white text-2xl mb-5 p-3 text-center">
            <span className="text-lime-600">Tools</span> I use
          </h1>
          <Toolstack />
          <Github />
        </>
      )}
    </div>
  );
}

export default About;