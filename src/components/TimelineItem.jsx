import React from 'react';

function TimelineItem({ year, title, institution, duration, details }) {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700 text-left">
      <li className="flex flex-col mb-4 ml-4">
        <div className="flex gap-4 flex-row items-center justify-start text-sm">
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
          <div>
            <span className="inline-block w-16 md:w-32 px-2 text-center py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
              {year}
            </span>
          </div>
          <div>
            <span className="text-xl font-semibold text-stone-900 dark:text-white">
              {title}
            </span>{' '}
            -{' '}
            <span className="text-base font-normal text-stone-500 dark:text-stone-400">
              {institution}
            </span>{' '}
            -{' '}
            <span className="text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
              {duration}
            </span>
          </div>
        </div>
        <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
          {details}
        </p>
      </li>
    </ol>
  );
}

export default TimelineItem;
