import React from "react";
import style from './Project.module.css'

const Project = props => {
    return (
        <div className={style.project}>
            <div className={style.icon}>
              <div><a href=''>View</a></div>
            </div>
            <h4>{props.title}</h4>
            <span className={style.description}>
        {props.description}
      </span>
        </div>
    )
};

export default Project;