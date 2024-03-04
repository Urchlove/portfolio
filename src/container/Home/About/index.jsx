import React from 'react';
import { BsInfoCircleFill }  from 'react-icons/bs';
import PageHeaderContent from '../../../component/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import {DiApple, DiAndroid} from 'react-icons/di';
import {FaDev, FaDatabase} from 'react-icons/fa'
import './about.scss'

const personalDetails =[
    {
        label: "Name:",
        value: "Uche Gloria Anthony"
    },
    {
        label: "Age:",
        value: "27"
    },
    {
        label: "Address:",
        value: "Abuja Nigeria"
    },
    {
        label: "Email:",
        value: "gloriaanthony177@gmail.com"
    },
    {
        label: "Contact:",
        value: "08068510570"
    }
]

const jobSummary = 'Seaseoned and independent Front End Developer with a 2 years of experience,driven by an unwavering passion for problem-sloving and design.Demonstraring proficiency in a range of technologies,including JavaScript,HTML,React.js(Next.js),Figma and CSS.A team player whose dedication to continuous learning fuels my commitment to producing exceptional code and working harmoniously with cross-functonal teams to craft transformative impactful solutions.'
const About= ()=> {
    return(
        <section id='about' className='about'>
           <PageHeaderContent
           headerText = "About me"
           icon= {<BsInfoCircleFill size={40}/>}
           />
           
           <div className='aboutcon'>
            <div className='aboutcon_person'>

            <Animate play
            duration={1.5}
            delay={1}
            start={{
                transform : "translateX(-900px)"
            }}

            end={{
                transform : "translate(0px)"
            }}
            >
            <h3>
                Front End Developer
            </h3>
            <p>{jobSummary}</p>
            </Animate>

            <Animate play
            duration={1.5}
            delay={1}
            start={{
                transform : "translateX(500px)"
            }}

            end={{
                transform : "translate(0px)"
            }}
            >
            <h3 className='hhh'>
                Personnal Information
            </h3>
            <ul className='ull'>
                {
                    personalDetails.map((item,i) => (
                        <li key={i}>
                            <span className='till'>{item.label}</span>
                            <span className='val'>{item.value}</span>
                        </li>
                    ))
                }
            </ul>
            </Animate>

            </div>
            <div className='aboutcon_detai'>

            <Animate play
            duration={1.5}
            delay={1}
            start={{
                transform : "translateX(500px)"
            }}

            end={{
                transform : "translate(0px)"
            }}
            >
                <div className='aboutcon_inner'>
                    <div>
                        <FaDev size={60} color='var(--yellow-theme-main-color)'/>
                    </div>
                    <div>
                        <DiAndroid size={60} color='var(--yellow-theme-main-color)' />
                    </div>
                    <div>
                    <FaDatabase size={60} color='var(--yellow-theme-main-color)' />

                    </div>
                    <div>
                    <DiApple size={60} color='var(--yellow-theme-main-color)' />
                    </div>
                </div>

                </Animate>
                   
            </div>
          
           </div>
           
        </section>
    )
}

export default About;