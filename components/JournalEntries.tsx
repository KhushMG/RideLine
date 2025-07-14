'use client'
import React from 'react'
import JournalEntryCard from './JournalEntryCard';
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
        <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 lg:grid-cols-3 xl:grid-cols-2">
          <JournalEntryCard
            title="Journal Entry 1"
            content="This is a journal entry about my day. It was quite eventful and I learned a lot of new things. It was quite eventful and I learned a lot of new things.It was quite eventful and I learned a lot of new things. It was quite eventful and I learned a lot of new things. It was quite eventful and I learned a lot of new things.It was quite eventful and I learned a lot of new things.It was quite eventful and I learned a lot of new things."
            createdAt="June 1st, 2025"
          />
          <JournalEntryCard
            title="Weekend Reflections"
            content="Spent the weekend hiking and reflecting on life goals. The mountains were beautiful and the weather was perfect."
            createdAt="June 2nd, 2025"
          />
          <JournalEntryCard
            title="Work Thoughts"
            content="Had an interesting meeting today about the new project direction."
            createdAt="June 3rd, 2025"
          />
        </div>
      </div>
    </>
  );
}

export default JournalEntries