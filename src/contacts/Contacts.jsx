import React from "react";
import style from './Contacts.module.css'
import Footer from "../footer/Footer";
import {RemoteWork} from "./remoteWork/RemoteWork";

const Contacts = () => {
  return (
    <div className={style.wrapper}>
      <RemoteWork/>
      <div className={style.contacts}>
        <div className={style.container}>
          <h2>Contact with me</h2>
          <form action="">
            <input type="text"/>
            <input type="text"/>
            <textarea></textarea>
          </form>
          <div><a href=''>Send</a></div>
        </div>
      </div>
      <Footer/>
    </div>
  )
};

export default Contacts;