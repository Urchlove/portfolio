import React from 'react';
import { BsInfoCircleFill }  from 'react-icons/bs';
import PageHeaderContent from '../../../../component/pageHeaderContent';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import  'react-vertical-timeline-component/style.min.css';
import {MdWork} from 'react-icons/md'
import './resume.scss';
import { data } from './uti';


const Resume= ()=> {
    return(
        <section id='resume' className='resume'>
           <PageHeaderContent
           headerText = "My Resume"
           icon= {<BsInfoCircleFill size={40}/>}
           />
            <div className='timeline'>
                <div className='timeline_exp'>
                    <h3 className='timeline_exp_header'>
                        Experience
                    </h3>
                    <VerticalTimeline
                    layout={'1-column'}
                    lineColor='var(--yellow-theme-main-color)'
                    >
                        {
                            data.experience.map((item,i)=>(
                                <VerticalTimelineElement
                                key={i}
                                className='timeline_cll'
                                contentStyle={{
                                    background: 'none',
                                    color: 'var(--yellow-theme-sub-text-color)',
                                    border: '1.5px solid var(--yellow-theme-main-color)'
                                }}
                                icon={<MdWork/>}
                                iconStyle={{
                                    background : '#181818',
                                    color : 'var(--yellow-theme-main-color)'
                                }}
                                >
                                    <div className='timline_cll_div'>
                                        <h3>
                                            {item.tittle}
                                        </h3>
                                        <h4>
                                            {item.subTittle}
                                        </h4>
                                        
                                    </div>
                                    <p className='pp'>
                                            {item.description}
                                        </p>
                                </VerticalTimelineElement>
                            ))
                        }

                    </VerticalTimeline>
                </div>
                <div className='timeline_edu'>
                    <h3 className='timeline_edu_header'>
                        Education
                    </h3>
                    <VerticalTimeline
                    layout={'1-column'}
                    lineColor='var(--yellow-theme-main-color)'
                    >
                    {
                    data.Education.map((item,i) => (
                                <VerticalTimelineElement
                                key={i}
                                className='timeline_cll'
                                contentStyle={{
                                    background: 'none',
                                    color: 'var(--yellow-theme-sub-text-color)',
                                    border: '1.5px solid var(--yellow-theme-main-color)'
                                }}
                                icon={<MdWork/>}
                                iconStyle={{
                                    background : '#181818',
                                    color : 'var(--yellow-theme-main-color)'
                                }}
                                >
                                    <div className='timline_cll_div'>
                                        <h3>
                                            {item.tittle}
                                        </h3>
                                        <h4>
                                            {item.subTittle}
                                        </h4>
                                        
                                    </div>
                                    <p className='pp'>
                                            {item.description}
                                        </p>
                                </VerticalTimelineElement>
                            ))

                    }
                    </VerticalTimeline>
                </div>

            </div>
        </section>
    )
}

export default Resume;