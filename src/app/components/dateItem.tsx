interface DateItemProps {
  date: Date;
}

const DateItem = ({ date }: DateItemProps) => {
  return (
    <>
      <li className="flex text-center items-center justify-center">
        <p className="bg-light-gray-200 shadow-md text-black/90 dark:bg-dark-gray-50 dark:text-white/90 text-sm rounded-md px-5">
          {date?.toLocaleString("default", {
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
