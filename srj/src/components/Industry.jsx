import React from "react";

// Logos
import google from "../assets/google.png";
import amazon from "../assets/amazon.png";
import facebook from "../assets/facebook.png";
import netflix from "../assets/netflix.webp";
import apple from "../assets/apple.webp";
import tesla from "../assets/tesla.png";
import tcs from "../assets/tcs.png";
import infosys from "../assets/infosys.png";

const companies = [
  { name: "Google", logo: google },
  { name: "Amazon", logo: amazon },
  { name: "Facebook", logo: facebook },
  { name: "Netflix", logo: netflix },
  { name: "Apple", logo: apple },
  { name: "Tesla", logo: tesla },
  { name: "TCS", logo: tcs },
  { name: "Infosys", logo: infosys },
];

const Industry = () => {
  // Duplicate logos for infinite loop effect
  const loopedLogos = [...companies, ...companies];

  return (
    <div className="relative w-full bg-gradient-to-br from-white to-gray-100 py-16 overflow-hidden">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        🌟 Our Industry Partners
      </h2>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden py-2">
        <div className="flex animate-marquee gap-10 w-max">
          {loopedLogos.map((company, index) => (
            <div
              key={index}
              className="w-36 h-36 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex-shrink-0"
              title={company.name}
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-20 h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Animation Style */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            animation: marquee 30s linear infinite;
          }

          @media (max-width: 768px) {
            .animate-marquee {
              animation-duration: 45s;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Industry;
