import React, { Fragment, useState } from "react";
import banner from "./banner.jpeg"
import "./App.css";


import Input from "./components/Input";
import List from "./components/List";

function Dash() {

  return (
    <Fragment>
      <div className="container" >
      <img src={banner} alt="logo" height = "200" width = "100%" class="rounded mx-auto d-block"/>
      <h3 className="text-center mt-5">Personal Journal</h3>
      <div class="row">
        <div class= "col-sm-4">
          <Input />
        </div>
        <div class="col-sm-8">
          <List />
        </div>
      </div>
      </div>
    </Fragment>
  );
}

export default Dash;