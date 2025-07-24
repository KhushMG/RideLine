'use client'
import React from 'react'
// import JournalEntryCard from './JournalEntryCard';
import { Button } from './ui/button';
import { useState } from "react";
import JournalEntryModal from './JournalEntryModal';

const JournalEntries = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <JournalEntryModal setIsOpen={setIsOpen} />}
      <div className="space-y-6">
        <h2 className="text-xl font-bold sm:text-2xl flex justify-between">
          <div className="flex justify-start w-1/2"> Your Journal Entries </div>
          <div className="flex justify-end w-1/2">
            <Button
              variant="outline"
              className="hover:bg-green-700 hover:text-white transition-colors duration-200"
              onClick={() => {setIsOpen(true); document.body.style.overflow = 'hidden'}}
            >
              Create a new entry
            </Button>
          </div>
        </h2>
      </div>
    </>
  );
}

export default JournalEntries