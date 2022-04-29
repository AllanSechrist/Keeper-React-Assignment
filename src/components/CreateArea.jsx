import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          onChange={props.handleChange}
          name="title"
          placeholder="Title"
          value={props.note.title}
        />
        <textarea
          onChange={props.handleChange}
          name="content"
          placeholder="Take a note..."
          value={props.note.content}
          rows="3"
        />
        <button
          onClick={() => {
            props.addNote(props.note);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
