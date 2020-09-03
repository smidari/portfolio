import React from "react";
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const test = 'Lorem ipsum dolor sit amet, consectetur\n' +
  '        adipisicing elit. Aliquam, cupiditate delectus\n' +
  '        dicta dignissimos enim est eum illum in magnam\n' +
  '        magni minus nemo neque quidem quos repudiandae\n' +
  '        tempore, unde voluptates voluptatibus.';

const Skills = () => {
  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <h2 className={style.title}>Skills</h2>
        <div className={style.skills}>
          <Skill title={'React'} description={test}/>
          <Skill title={'Redux'} description={test}/>
          <Skill title={'Typescript'} description={test}/>
        </div>
      </div>
    </div>
  )
};

export default Skills;