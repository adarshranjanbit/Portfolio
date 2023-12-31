import React from "react";
import portImage from "../assets/portfolio/portfolio-wesite-image.jpg";
import mts from "../assets/portfolio/mts.png";
import bloodbank from "../assets/portfolio/blood-bank.jpg";
import web3fundhub from "../assets/portfolio/web3.png"
import { GoFileCode } from "react-icons/go"
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: portImage,
      demoLink: "", // Add your demo link here
      codeLink: "https://github.com/adarshranjanbit/Portfolio/tree/master", // Add your code link here
      demoName: "Portfolio",
    },
    {
      id: 2,
      src: mts,
      demoLink: "https://meet-the-stranger-adarsh.onrender.com/", // Add your demo link here
      codeLink: "https://github.com/adarshranjanbit/meet-the-strangers", // Add your code link here
      demoName: "MTS",
    },
    {
      id: 3,
      src: bloodbank,
      demoLink: "", // Add your demo link here
      codeLink: "https://github.com/adarshranjanbit/Blood-Bank-Manager", // Add your code link here
      demoName: "Blood-Bank",
    },
    {
      id: 4,
      src: web3fundhub,
      demoLink: "", // Add your demo link here
      codeLink: "https://github.com/adarshranjanbit/project-web3-crowdfunding", // Add your code link here
      demoName: "WEB3FUNDHUB",
    },
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 text-white md:h-fit"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="mt-6 py-6">
            Explore some of my projects right here....
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink, demoName }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-300 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105 text-md font-semibold 
                  bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-md "
                >
                  {demoName}
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-8 py-3 m-4 duration-300 hover:scale-105"
                >
                  <GoFileCode size={30} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
