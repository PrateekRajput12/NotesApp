import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NoteCard from '../../components/Cards/NoteCard'
import { MdAdd } from 'react-icons/md'
import AddEditNotes from './AddEditNotes'
const Home = () => {
  return (
    <div>
      <Navbar />

      <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-4 mt-8'>
          <NoteCard title="Meeting on 7th October"
            date='3rd Oct 2025'
            content="Meeting on 7th October Metting on same day and need to be attended"
            tags="#Meeting #Important"
            isPinned={true}
            onEdit={() => { }}
            onDelete={() => { }}
            onPinNote={() => { }}
          />


        </div>
      </div>
      <button className='w-16 h-16 flex items-center rounded-2xl justify-center bg-primary hover:bg-blue-600 absolute right-10 bottom-10' onClick={() => { }}>
        <MdAdd className='text-[32px] text-white' />
      </button>
      <AddEditNotes />
    </div>
  )
}

export default Home