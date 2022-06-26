import { useEffect, useState } from "react";

interface KanbanColumnProps {
  children: React.ReactNode;
}

export const KanbanColumn: React.FC<KanbanColumnProps> = ({ children }) => {
  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
    setwinReady(true);
  }, []);
  return (
    <div className="flex flex-col gap-y-3 p-3 items-start">
      {" "}
      {winReady && children}
    </div>
  );
};
