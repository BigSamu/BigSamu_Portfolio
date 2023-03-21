import React from 'react'
import TimelineItem from './TimelineItem';
import SectionTitle from './SectionTitle'

import timeline from '../data/timeline';

const Timeline = () => {
  return (
    <div className="min-h-[calc(100vh-56px)] py-10 text-center md:text-left">
         <div className="w-full md:w-9/12 md:max-w-2xl mx-auto">
            <SectionTitle>My Timeline</SectionTitle>
           
            {timeline.map((item,idx) => (
               <TimelineItem 
                  key= {idx}
                  year={item.year}
                  title={item.title}
                  institution={item.institution}
                  duration={item.duration}
                  details={item.details}
               />
            ))}
         </div>
      </div>
  )
}

export default Timeline