import React, { useRef, useEffect, useState } from "react";

const ShowcaseSection = () => {
  const sectionRef = useRef(null);

  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100); // Delay for effect
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className={`app-showcase transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="w-full">
        <div className="showcaselayout">
          {/*Left */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
             <a href="https://carpenters-ease-life.tech/"><img src="/images/carpenter.svg" alt="carpenter-ease-life" /></a>  
            </div>
            <div className="text-content">
              <h2>
                {" "}
                Your one-stop solution for all carpentry needs. Manage your
                projects efficiently with our innovative tools and features.
              </h2>
              <p className="text-white-50 md:text-xl">
                Developed as a final-year project using MERN stack
              </p>
            </div>
          </div>

          {/*Right*/}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
               <a href=""><img src="/images/sleakspeak.png"  alt="SleakSpeak" /></a> 
              </div>
              <h2>Community for men fasion</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7db]">
                <img src="/images/weather.png" alt="weather" />
              </div>
              <h2>Weather App</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
