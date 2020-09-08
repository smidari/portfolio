import React  from "react";
import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h4>Daria Avlasko</h4>
        <div className={style.iconNetwork}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>© 2020 </p>
      </div>
    </div>
  )
};

export default Footer;