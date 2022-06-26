import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Card } from "../components/Card.component";
import { Subtitle } from "../components/Subtitle.component";
import { Task } from "../components/Task.component";


const Home: NextPage = () => {
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
        <div className="flex flex-col gap-y-3 p-3 items-start">
          <Subtitle className="font-semibold bg-lightgrey text-grey px-3 py-1 rounded-[20px]">
            Last Week
          </Subtitle>
          <Card>
            <Subtitle>Review scope</Subtitle>
            <p className="text-darkgrey">
              Review <u>#390.</u>
            </p>
            <p className="text-grey font-medium bg-[#FFDCE0] py-1 px-2.5 rounded-lg">
              Due 4/11
            </p>
          </Card>
          <Card>
            <Subtitle>Team retro</Subtitle>
            <div className="flex flex-col py-2 gap-y-2">
              <Task isChecked={true}>Schedule time</Task>
              <Task>Set up a Figma board</Task>
            </div>
          </Card>
        </div>

        <div className="flex flex-col gap-y-3 p-3 items-start">
          <Subtitle className="font-semibold bg-lavender text-grey px-3 py-1 rounded-[20px]">
            This week
          </Subtitle>
          <Card>
            <div className="flex gap-x-1">
              <div className="rounded-full overflow-hidden h-[18px] w-[18px]">
                <Image src="/images/avatar-2.png" height={18} width={18} />
              </div>
              <div className="rounded-full overflow-hidden h-[18px] w-[18px]">
                <Image src="/images/avatar-1.png" height={18} width={18} />
              </div>
            </div>
            <Subtitle>Usability test</Subtitle>
            <p className="text-darkgrey">Research questions with Carina</p>
            <p className="text-grey font-medium bg-[#CBDFD8] py-1 px-2.5 rounded-lg">
              Research
            </p>
          </Card>
        </div>

        <div className="flex flex-col gap-y-3 p-3 items-start">
          <Subtitle className="font-semibold bg-rose text-grey px-3 py-1 rounded-[20px]">
            Next week
          </Subtitle>
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
        </div>
      </div>
    </div>
  );
};

export default Home;
