import React from "react";

interface CardProps {
  name: string;
  designation: string;
  img: string;
}

const Card: React.FC<CardProps> = ({ name, designation, img }) => {
  return (
    <div className="w-72 h-72 bg-purple-800 rounded-lg flex flex-col items-center justify-center shadow-lg">
      <div className="w-40 h-40 bg-white rounded-full mb-4 overflow-hidden">
        <img
          src={img}
          alt={`${name}'s profile`}
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="text-black text-lg font-semibold tracking-widest">
        {name}
      </h2>

      <p className="text-gray-300 tracking-widest font-semibold">
        {designation}
      </p>
    </div>
  );
};

export default Card;
