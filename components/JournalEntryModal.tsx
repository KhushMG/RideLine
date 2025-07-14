import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const JournalEntryModal = ({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="bg-black rounded-lg p-4 grid place-content-center  border border-white overflow-auto ">
        <div className="flex flex-col gap-4 w-[80vw] p-6 sm:w-[60vh] sm:h-[50vh] justify-between">
          <div className="flex flex-col flex-1 gap-6">
            <h1 className="text-2xl font-bold">Create a new journal entry</h1>
            <Input className="py-[10px]" type="text" placeholder="Title" />
            <Textarea className="h-full" placeholder="Write your journal entry here" />
          </div>
          <Button
            className="bg-white text-black hover:bg-red-600 hover:text-white "
            onClick={() => {
              setIsOpen(false);
              document.body.style.overflow = "auto";
            }}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JournalEntryModal;
