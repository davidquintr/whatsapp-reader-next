import { isValid } from "date-fns";

class Message {
    defaultMessage: boolean;
    message: string;
    date = new Date();
    username: string;
  
    constructor(
      username: string,
      message: string,
      date: Date,
      defaultMessage: boolean
    ) {
      this.message = message;
      this.defaultMessage = defaultMessage;
      this.username = username;
      this.date = date;
    }
  }

interface MessageItemProps{
    element : Message
    index : number
    povUser : string
    colorUser : string
}


const MessageItem = ({element, index, povUser, colorUser } : MessageItemProps) => {
  return (
    <>
    {element?.message != "" ? (<li
      className={`flex ${
        povUser == element?.username ? "justify-end" : "justify-start"
      }`}
      key={index}
    >
      <div
        className={`${
          povUser == element?.username ? "dark:bg-dark-green-300 bg-light-green-100" : "dark:bg-dark-gray-200 bg-white"
        } flex flex-wrap max-w-[75%] items-end rounded-md py-2 px-2  shadow-md`}
      >
        <div className="flex flex-col max-w-full">
          {povUser == element?.username ? null : (
            <h4 className="dark:text-dark-green-100 text-light-green-300 leading-none font-medium" style={{ color: colorUser}}>
              {element?.username}
            </h4>
          )}
          <p className=" dark:text-white text-sm break-all">{element?.message }</p>
        </div>
        { isValid(element?.date) ? <p className=" dark:text-white/50 text-black/50 pl-2 flex-1 text-right text-xs">{`${element?.date
          ?.getHours()
          .toString()
          .padStart(2, "0")}:${element?.date
          ?.getMinutes()
          .toString()
          .padStart(2, "0")}`}</p> : null}
      </div>
    </li>) : null}
    </>
  );
};

export default MessageItem;
