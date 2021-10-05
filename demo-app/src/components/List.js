import React, { Fragment, useEffect, useState } from "react";

import EditNote from "./Edit";

const ListNotes = () => {

  const [notes, setNotes] = useState([]);
  var token = localStorage.getItem("idToken")


  const deleteNote = async id => {
    try {
      const deleteNote = await fetch(`https://ujp0mi213b.execute-api.us-east-1.amazonaws.com/test/deleteone?id=${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      setNotes(notes.filter(note => note.id !== id));

    } catch (err) {
      console.error(err.message);
    }
  };

  const getNotes = async () => {
    var token = localStorage.getItem("idToken")
    try {
      const response = await fetch("https://ujp0mi213b.execute-api.us-east-1.amazonaws.com/test/notes", {
        headers: {
          "Authorization": `Bearer ${token}` 
        }
      });
      const jsonData = await response.json();
      console.log(jsonData)
      setNotes(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };


  useEffect(() => {
    getNotes();
  }, []);


  return (
    <Fragment>
      <table class="table text-center"  margin-top = '0px'>
        <thead>
          <tr>
            <th>Title</th>
            <th>TimeStamp</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody> 
          {notes.map(note => (
            <tr key={note.id}>
              <td>{note.title}</td>
              <td>{note.timestamp}</td>
              <td>
                <EditNote note={note} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteNote(note.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListNotes;