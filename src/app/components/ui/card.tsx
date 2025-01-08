'use client';
import React from "react";

interface CardProps {
  name: string;
  designation: string;
}

const Card: React.FC<CardProps> = ({ name, designation }) => {
  return (
    <div className="w-[327px] h-[355px] bg-purple-700 rounded-lg flex flex-col items-center justify-center shadow-lg">
      <div className="w-24 h-24 bg-white rounded-full mb-4"></div>
      <h2 className="text-white text-lg font-bold">{name}</h2>
      <p className="text-gray-300">{designation}</p>
    </div>
  );
};

export default Card;
