import type { NextPage } from "next";
import { Card } from "../components/Card.component";
import { Subtitle } from "../components/Subtitle.component";
import { KanbanColumn } from "../components/KanbanColumn.component";
import { Dispatch, SetStateAction, useState } from "react";
import { Column, defaultColumns } from "../store/defaultColumns";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
  resetServerContext,
} from "react-beautiful-dnd";

resetServerContext();

const onDragEnd = (
  result: DropResult,
  columns: { [key: string]: Column },
  setColumns: Dispatch<SetStateAction<{ [key: string]: Column }>>
) => {
  if (!result.destination) return;
  const { source, destination } = result;
  // if (
  //   typeof source.droppableId !== "number" ||
  //   typeof destination.droppableId !== "number"
  // )
  //  throw new Error("Invalid droppableId");
  console.log(source, destination);
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];

    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

const Home: NextPage = () => {
  const [columns, setColumns] = useState(defaultColumns);
  console.log("test");
  return (
    <div className="m-10 text-sm">
      <h1 className="font-bold text-[32px] leading-[38px]">Design weekly</h1>
      <p className="text-[#5A5A65] text-sm mt-2">
        A board to keep track of design progress
      </p>

      <div
        id="board"
        className="bg-[#F8F8F8] w-full rounded-xl mt-6 p-2 grid gap-4 grid-cols-3"
      >
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <KanbanColumn key={columnId}>
                <Subtitle
                  // bg-lavender bg-lightgrey bg-rose
                  className={`font-semibold bg-${column.labelColor} text-grey px-3 py-1 rounded-[20px]`}
                >
                  {column.label}
                </Subtitle>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="flex flex-col w-full"
                      >
                        {column.items.map((item, cardIndex) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={cardIndex}
                              
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    {item.content}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </KanbanColumn>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
};

export default Home;
