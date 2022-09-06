import React, { useState } from 'react'


const AddNote = ({handleAddNote}) => {

    const [noteText, setNoteText] = useState("");

    const handleChange = (e) => {
        setNoteText(e.target.value)
    }

    const handleSave = () => {
        handleAddNote(noteText)
    }

    return (
        <div className='note new'>
            <textarea 
                cols="10" 
                rows="8" 
                placeholder='Type to add a note...'
                onChange={handleChange}
            ></textarea>
            <div className='note-footer'>
                <small>200 remaining</small>
                <button className='save' onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export default AddNote