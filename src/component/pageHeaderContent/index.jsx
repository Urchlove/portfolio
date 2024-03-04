import React from 'react';
import './page.scss';

const PageHeaderContent = (props) => {

        const { headerText, icon } = props
    return(
        <div className='wrap'>
            <h2>{headerText}</h2>
            <span>{icon}</span>
        </div>
    )
}

export default PageHeaderContent;