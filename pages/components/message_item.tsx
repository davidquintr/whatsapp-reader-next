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
          povUser == element?.username ? "bg-greenmsh" : "bg-graymsg"
        } flex sm:max-w-[75%] md:max-w-[75%] max-w-[50%] items-end gap-2 rounded-md py-1 px-2`}
      >
        <div>
          {povUser == element?.username ? null : (
            <h4 style={{ color: colorUser}}>
              {element?.username}
            </h4>
          )}
          <p className=" text-white text-sm break-all" dangerouslySetInnerHTML={{ __html: element?.message }}></p>
        </div>
        { isValid(element?.date) ? <p className=" text-white/50 text-xs">{`${element?.date
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
