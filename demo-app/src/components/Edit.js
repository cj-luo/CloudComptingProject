import React, { Fragment, useState } from "react";
import Modal from 'react-modal';


const EditNote = ({ note }) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content)
  const [modalIsOpen, setIsOpen] = React.useState(false);


  const updateNote = async e => {
    e.preventDefault();

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() +" "+ today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var token = localStorage.getItem("idToken")
    var id = note.id

    try {
      const body = { id, title, content, date };
      console.log(body)
      const response = await fetch(
        `https://ujp0mi213b.execute-api.us-east-1.amazonaws.com/test/getone`,{
          method: "PUT",
          headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(body)
        }
      );

      if(response.status === 200){
        alert("update successfully!")
      }

    } catch (err) {
      console.error(err.message);
    }
  };


  function closeModal() {
    setIsOpen(false);
    window.location.reload();
  }

  function openModal() {
    setIsOpen(true);
  }

  Modal.setAppElement('#root');

  return (
    <Fragment >
      <button
        onClick={openModal}
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${note.id}`}
      >
        Edit
      </button>
      <Modal
        isOpen={modalIsOpen}

        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
            <div class="modal-header">
              <h4 class="modal-title">Edit Note</h4>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
              <br/>
              <textarea
                class="form-control" 
                id="FormControlTextarea1" 
                rows="15" 
                value ={content}
                onChange={e => setContent(e.target.value)}
              >

              </textarea>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateNote(e)}
              >
                Save
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={closeModal}
              >
                Close
              </button>
            </div>

      </Modal>
    </Fragment>
  );
};

export default EditNote;
