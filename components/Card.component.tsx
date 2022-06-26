import React from "react";
import { useDrag } from "react-dnd";

interface CardProps {
  children: React.ReactNode;
}

export type CardComponent = React.FC<CardProps>;

export const Card: CardComponent = ({ children }) => {
  return (
    <div className="w-full rounded-lg bg-white border border-[##DDDDDD] p-4 card-shadow flex flex-col items-start gap-y-2 mt-3">
      {children}
    </div>
  );
};
