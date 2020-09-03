import React from "react";
import style from './MyProjects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";

const MyProject = () => {
  return (
    <div className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
        <h2 className={style.title}>My Projects</h2>
        <div className={style.projects}>
          <Project title={'Social Network'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
          <Project title={'Todolist'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
        </div>
      </div>
    </div>
  )
};

export default MyProject;
