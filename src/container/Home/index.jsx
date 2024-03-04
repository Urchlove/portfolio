import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Animate } from 'react-simple-animate';
import './home.scss';

const Home= ()=> {
    const navigate = useNavigate();

    const handlenav=() => {
        navigate('/contact')
    }

    return(
        <section id='home' className='home'>
            <div className='homee'>
                <h1>
                    Hello,I'm Uchechukwu
                    <br/>
                    Front end developer
                </h1>
            </div>
            <Animate play
            duration={1.5}
            delay={1}
            start={{
                transform : "translateY(550px)"
            }}

            end={{
                transform : "translate(0px)"
            }}
            >
                
            <div className='contact'>
                <button onClick={handlenav}>Hire Me</button>
            </div>
            </Animate>
           
        </section>
    )
}

export default Home;