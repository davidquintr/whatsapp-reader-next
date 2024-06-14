"use client"

import { useState, useEffect } from 'react';

interface DateItemProps {
  date: Date;
}

const DateItem = ({ date }: DateItemProps) => {
  const [tdate, setDate] = useState<Date | null>(null);

  useEffect(() => {
    setDate(tdate);
  }, [tdate]);

  return (
    <>
      <li className="flex text-center items-center justify-center">
        <p className="bg-light-gray-200 shadow-md text-black/90 dark:bg-dark-gray-50 dark:text-white/90 text-sm rounded-md px-5">
          {date?.toLocaleString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          })}
        </p>
      </li>
    </>
  );
};

export default DateItem;
