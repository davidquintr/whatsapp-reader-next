import DateItem from "./date_item";

const TestingMessage = () => {
  return (
    <>
      <DateItem date={new Date()}></DateItem>
      <li className={`flex justify-start gap`}>
        <div className=" bg-graymsg sm:max-w-[75%] flex items-end gap-2 rounded-md py-1 px-2">
          <div>
            <h4 className=" text-lightgreen">User</h4>
            <p className=" text-white text-sm">This is the text body</p>
          </div>
          <p className=" text-white text-xs">10:00 p.m</p>
        </div>
      </li>
      <li className=" flex justify-end">
        <div className=" bg-graymsg flex sm:max-w-[75%] items-end gap-2 rounded-md py-1 px-2">
          <div>
            <p className=" text-white text-sm">This is the text body</p>
          </div>
          <p className=" text-white text-xs">10:00 p.m</p>
        </div>
      </li>
    </>
  );
};

export default TestingMessage