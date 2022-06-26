import { randomUUID } from "crypto";
import Image from "next/image";
import { Card } from "../components/Card.component";
import { Subtitle } from "../components/Subtitle.component";
import { Task } from "../components/Task.component";


interface Card {
  id: string;
  content: React.ReactNode;
}

export const defaultCards: Card[] = [
  {
    id: "first",
    content: (
      <Card>
        <Subtitle>Review scope</Subtitle>
        <p className="text-darkgrey">
          Review <u>#390.</u>
        </p>
        <p className="text-grey font-medium bg-[#FFDCE0] py-1 px-2.5 rounded-lg">
          Due 4/11
        </p>
      </Card>
    ),
  },
  {
    id: "second",
    content: (
      <Card>
        <Subtitle>Team retro</Subtitle>
        <div className="flex flex-col py-2 gap-y-2">
          <Task isChecked={true}>Schedule time</Task>
          <Task>Set up a Figma board</Task>
        </div>
      </Card>
    ),
  },
  {
    id: "third",
    content: (
      <Card>
        <div className="flex gap-x-1">
          <div className="rounded-full overflow-hidden h-[18px] w-[18px]">
            <Image src="/images/avatar-2.png" height={18} width={18} />
          </div>
          <div className="rounded-full overflow-hidden h-4 w-4">
            <Image src="/images/avatar-1.png" height={18} width={18} />
          </div>
        </div>
        <Subtitle>Usability test</Subtitle>
        <p className="text-darkgrey">Research questions with Carina</p>
        <p className="text-grey font-medium bg-[#CBDFD8] py-1 px-2.5 rounded-lg">
          Research
        </p>
      </Card>
    ),
  },
  {
    id: "fourth",
    content: (
      <Card>
        <div className="flex gap-x-1">
          <div className="rounded-full overflow-hidden h-[18px] w-[18px]">
            <Image src="/images/avatar-1.png" height={18} width={18} />
          </div>
        </div>
        <Subtitle>Culture workshop</Subtitle>
        <p>Let's build a great team.</p>
        <div className="flex flex-col py-2 gap-y-2">
          <Task isChecked={true}>Schedule time</Task>
          <Task>Set up a Figma board</Task>
          <Task>Review exercises with the team</Task>
        </div>
        <p className="text-grey font-medium bg-[#FFDCE0] py-1 px-2.5 rounded-lg">
          Due 2/11
        </p>
      </Card>
    ),
  },
];


export interface Column {
  label: string;
  labelColor: string;
  items: Card[];
}

export const defaultColumns: { [key: string]: Column } = {
  lastweek: {
    label: "Last Week",
    // bg-lightgrey
    labelColor: "lightgrey",
    items: [
      defaultCards[0],
      defaultCards[1]
    ],
  },
  thisweek: {
    label: "This week",
    // bg-lavender
    labelColor: "lavender",
    items: [
      defaultCards[2]
    ],
  },
  nextweek: {
    label: "Next week",
    // bg-rose
    labelColor: "rose",
    items: [
      defaultCards[3]
    ],
  },
};
