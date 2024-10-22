import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Engineer",
          "Electrical Engineer",
          "Developer",
         "UI/UX Designer",
          "Open Source Contributor",
          "Freelancer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 150,
      }}
    />
  );
}

export default Type;
