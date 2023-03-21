import React from 'react';

function SectionTitle({ children, id }) {
   return (
      <h1
         id={id && id}
         className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white text-center md:text-left"
      >
         {children}
      </h1>
   )
}

export default SectionTitle;
