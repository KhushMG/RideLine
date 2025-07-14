import React from 'react'
import { Button } from './ui/button'

const JournalEntryModal = ({ setIsOpen }: {  setIsOpen: (isOpen: boolean) => void }) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
      <Button className='bg-white text-black hover:bg-red-600 hover:text-white' onClick={() => {setIsOpen(false); document.body.style.overflow = 'auto'}}>Close</Button>
    </div>
  )
}

export default JournalEntryModal