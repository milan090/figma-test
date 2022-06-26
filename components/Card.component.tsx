import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="w-full rounded-lg bg-white border border-[##DDDDDD] p-4 card-shadow flex flex-col items-start gap-y-2"> 
      {children}
    </div>
  );
};
