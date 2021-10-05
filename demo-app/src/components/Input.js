import React, { Fragment, useState } from "react";

const Input = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() +" "+ today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const body = { title, content, date};
      var token = localStorage.getItem("idToken")

      const response = await fetch("https://ujp0mi213b.execute-api.us-east-1.amazonaws.com/test/addone", {
        method: "POST",
        mode: 'cors',
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
          },
        body: JSON.stringify(body)
      });

      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

    return (
      <Fragment>      
        <form className="" onSubmit={onSubmitForm} >
          <div class="form-group">
          <label for="exampleFormControlTextarea1">Title</label> 
            <input
              type="text"
              placeholder = "title"
              className="form-control"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Content</label>
            <textarea 
              class="form-control" 
              id="exampleFormControlTextarea1" 
              rows="15" 
              placeholder= "write down how you feel"
              onChange={e => setContent(e.target.value)}
              >
            </textarea>
            <hr></hr>
          </div>
          <button className="btn btn-success" >Add</button>
        </form>
      </Fragment>
    );
};

export default Input;