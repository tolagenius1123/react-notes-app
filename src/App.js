import React from 'react'
import NotesList from './components/NotesList'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import Search from './components/Search'
import Header from './components/Header'
import { useEffect } from 'react'

const App = () => {

  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("react-notes-app-data")) ?? [])
// [{
//       id: nanoid(),
//       text: "This is my first note!",
//       date: "05/09/2022"
//     },
//     {
//       id: nanoid(),
//       text: "This is my second note!",
//       date: "06/09/2022"
//     },
//     {
//       id: nanoid(),
//       text: "This is my third note!",
//       date: "07/09/2022"
//     },
//   ]);

  const [darkMode, setDarkMode] = useState(false)

  const [searchText, setSearchText] = useState("")

  // useEffect(() => {
  //   const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))

  //   if (savedNotes) {
  //     setNotes(savedNotes)
  //   }
  // }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className={darkMode && 'dark-mode'}>
      <div className='container'>
        <Header handleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList 
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}  
          handleAddNote={addNote} 
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  )
}

export default App