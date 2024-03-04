import React from 'react';
import { BsInfoCircleFill }  from 'react-icons/bs';
import PageHeaderContent from '../../../../../component/pageHeaderContent';
import {Animate, AnimateKeyframes} from 'react-simple-animate'
import { skillsData } from './utilis';
import { Line } from 'rc-progress';
import './skill.scss';

const Skills= ()=> {
    return(
        <section id='skill' className='skill'>
        <PageHeaderContent
        headerText = "My Skills"
        icon= {<BsInfoCircleFill size={40}/>}
        />
         <div className='skill_cont'>
            {
                skillsData.map((item,i)=>(
                    <div key={i} className='skill_cont_inner'>
                    <Animate
                    play
                    duration={1}
                    delay={0.3}
                    start={{
                        transform : 'translateX(-200px)'
                    }
                    }
                    end={{
                        transform : 'translateX(0px)'
                    }}
                    >
                        <h3 className='skill_cont_hhh'>{item.label}</h3>
                        <div>
                            {
                                item.data.map((skillItem, j)=>(
                                    <AnimateKeyframes
                                    play
                                    duration={1}
                                    keyframes={["opacity : 1", "opacity : 0"]}
                                    iterationCount="1"
                                    >
                                        <div className='progress' key={j}>
                                            <p>{skillItem.skillsName}</p>

                                            <Line
                                            percent={skillItem.percentage}
                                            strokeWidth="2"
                                            strokeColor="var(--yellow-theme-main-color)"
                                            trailWidth="2"
                                            strokeLinecap="square"
                                            />
                                        </div>

                                    </AnimateKeyframes>
                                ))
                            }
                        </div>

                    </Animate>

                    </div>

                ))
            }
         </div>
     </section>
    )
}

export default Skills;