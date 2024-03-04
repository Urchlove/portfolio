import React from 'react';
import { BsInfoCircleFill }  from 'react-icons/bs';
import PageHeaderContent from '../../../../../../../component/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import './contact.scss';


const Contact= ()=> {
    return(
        <section id='contact' className='contact' >
           <div className='contact_content'>
                <Animate
                play
                duration={1}
                delay={0}
                start={{
                    transform : "translateX(-200px)"
                }}
                end={{
                    transform : "translateX(0px)"
                }}
                >
                    <h3 className='contact_content_header-text'>Let's Talk</h3>
                </Animate>
                <Animate
                play
                duration={1}
                delay={0}
                start={{
                    transform : "translate(200px)"
                }}
                end={{
                    transform : "translate(0px)"
                }}
                
                >
                    <div className='divv'>
                        <div className='div'>
                            <div>
                                <input required name='Name' className='name' type='text'/>
                                <label htmlFor="name" className='namee'>Name</label>
                            </div>
                            <div>
                            <input required name='Email' className='email' type='text'/>
                                <label htmlFor="Email" className='emaill'>Email</label>
                            </div>
                            <div>
                            <textarea required name='Description' className='Drip' type='text' rows="5"/>
                                <label htmlFor="Description" className='dripp'>Description</label>
                            </div>

                        </div>
                        <button>Submit</button>
                    </div>
                </Animate>
           </div>
            </section>
    )
}

export default Contact;