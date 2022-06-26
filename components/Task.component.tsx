import Image from "next/image";
import React, { useState } from "react";

interface TaskProps {
  isChecked?: boolean;
  children: string;
}

export const Task: React.FC<TaskProps> = ({
  isChecked: defaultIsChecked = false,
  children,
}) => {
  const [isChecked, setIsChecked] = useState(defaultIsChecked);

  return (
    <div className="flex gap-x-1.5 items-center">
      <button className="h-4 w-4 bg-[#E1E4E8] rounded flex justify-center items-center" onClick={() => setIsChecked(!isChecked)}>
        {isChecked ? (
          <Image src="/icons/check.svg" height={6} width={9} />
        ) : (
          <span className="h-1 w-1 bg-darkgrey"></span>
        )}
      </button>
      <p className={`${isChecked && "line-through text-grey opacity-60"}`}>
        {children}
      </p>
    </div>
  );
};
