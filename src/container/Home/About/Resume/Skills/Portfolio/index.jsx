import React from 'react';
import { BsInfoCircleFill }  from 'react-icons/bs';
import PageHeaderContent from '../../../../../../component/pageHeaderContent';
import './port.scss';

const Portfolio= ()=> {
    return(
        <section id='portfolio' className='port'>
           <PageHeaderContent 
           headerText = "My Portfolio"
           icon= {<BsInfoCircleFill size={40}/>}
           
           /> 
        </section>
    )
}

export default Portfolio;