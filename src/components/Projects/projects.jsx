import { useMediaQuery } from "react-responsive";
import axum from "../../assets/axum.png";
import scanner from "../../assets/scanner.png";
import exit from "../../assets/exitprep.png";
import gpt from "../../assets/gpt api.png";
import ProjectCards from "./projectcards";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsBoxArrowUpRight } from "react-icons/bs";

function Projects() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <div className="font-barlow bg-gradient-to-r from-purple-500 to-green-400 h-fit w-full p-8">
      <div className="text-white pt-12 pb-10 text-center">
        <h1 className="text-3xl pb-3">
          My Recent <strong className="text-lime-600">Works</strong>
        </h1>
        <p>Here are a few projects I have worked on recently.</p>
      </div>
      <div className="flex items-center justify-center">
        <div className={`grid ${isDesktopOrLaptop ? 'grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'} gap-8`}>
          <ProjectCards
            imgPath={axum}
            title="Axum"
            description="Movie streaming web app"
            demoLink="https://github.com/muliopia"
          />
          <ProjectCards
            imgPath={gpt}
            title="Chat Bot"
            description="Chat bot using ChatGPT API"
            demoLink="https://github.com/muliopia"
          />
          <ProjectCards
            imgPath={exit}
            title="Exit"
            description="Ethiopian exit exam preparation web app using MERN"
            demoLink="https://github.com/muliopia"
          />
          <div className="flex justify-center">
            <Card className="w-full max-w-xs h-[450px] text-white hover:scale-105 transition-transform duration-300 rounded overflow-hidden shadow-lg border border-lime-600 bg-gradient-to-r from-purple-600 to-green-500">
              <Card.Img
                src={scanner}
                alt="QR Code Scanner"
                className="h-48 w-full object-cover object-center"
              />
              <Card.Body className="mb-3 mt-6">
                <Card.Title className="font-bold text-xl mb-2">
                  v25 QR Code Scanner
                </Card.Title>
                <Card.Text className="mb-3 mx-2">
                  Flutter mobile app to scan QR codes version 25
                </Card.Text>
                <Button
                  href="https://github.com/muliopia"
                  target="_blank"
                  className="bg-slate-900 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded inline-flex items-center transition-colors duration-300"
                >
                  <BsBoxArrowUpRight className="mr-2" />
                  Preview
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;