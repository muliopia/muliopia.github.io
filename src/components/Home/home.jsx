import { useMediaQuery } from "react-responsive";
import mu from "../../assets/mu.png";
import Type from "./type";

function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <div className="font-roboto bg-gradient-to-r from-purple-500 to-green-400 h-fit w-full p-8">
      {isDesktopOrLaptop ? (
        <div className="flex flex-col pb-12 pt-44">
          <div className="flex">
            <div className="text-gray-100 w-[60%] pt-10">
              <h1 className="text-4xl pb-6">
                Hello! <span>👋🏻</span>
              </h1>
              <h1 className="text-4xl pb-6">
                I am
                <strong className="text-lime-400"> Mulugeta Sahil</strong>
              </h1>
              <div className="text-4xl text-lime-400">
                <Type />
              </div>
            </div>

            <div className="w-[20%] ">
              <img src={mu} className="rounded-lg" alt="mu" />
            </div>
          </div>

          <div className="w-full pb-12 pt-36 flex justify-center">
            <div className="w-[80%] pt-10">
              <h1 className="text-gray-100 text-2xl pb-6">
                <span>Somethings</span> you should
                Know about me
              </h1>
              <p className="text-gray-200 text-xl mx-10 text-justify">
                I'm in love with the process of learning and figuring things
                out. Tech enthusiast!!! <br />
                <br />
                I started my programming journey In my second year of studying
                computer      engineering with C++.       Then continued to learn java
                eventually As my interest in web development grew mastered
                JavaScript. <br />
                <br />
                My learning journey underwent a significant shift during my
                internship at NID, where I had the privilege of learning from
                some of the best in the field. <br />
                <br />
                I'm highly interested in Machine Learning and Computer vision.
                Want to continue my learning journey and figure more things out.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-gray-100 pt-56 mb-10">
          <h1 className="text-3xl pb-6">
            Hello! <span>👋🏻</span>
          </h1>
          <h1 className="text-3xl pb-6">
            I am
            <strong className="text-lime-400"> Mulugeta Sahil</strong>
          </h1>
          <div className="text-xl text-lime-400">
            <Type />
          </div>
          <div className="w-[50%] flex mx-auto mb-28">
            <img src={mu} className="rounded-sm" alt="mu" />
          </div>
          <div className="pb-10">
            <h1 className="text-gray-100 mx-10 text-lg pb-6">
              <span className="text-lime-400">Somethings</span> you should Know
              about me
            </h1>
            <p className="text-gray-200 text-md mx-8 text-left">
              I'm in love with the process of learning and figuring things out.
              Tech enthusiast!!! <br />
              <br />
              I started my programming journey In my second year of studying
              computer engineering with C++. Then continued to learn java 
              eventually As my interest in web development grew mastered
              JavaScript. <br />
              <br />
              My learning journey underwent a significant shift during my
              internship at NID, where I had the privilege of learning from some
              of the best in the field. <br />
              <br />
              I'm highly interested in Machine Learning and Computer vision.
              Want to continue my learning journey and figure more things out.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;