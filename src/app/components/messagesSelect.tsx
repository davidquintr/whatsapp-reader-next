"use client"
import { FaUpload } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { parse, isValid } from "date-fns";
import MessageItem from "./messageItem";
import DefaultAlert from "./defaultAlert";
import TestingMessage from "./testingMessage";
import UserItem from "./userItem";
import React from "react";
import DateItem from "./dateItem";

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

const FileSelect = () => {
  const textDrop = useRef<HTMLParagraphElement>(null);
  let [dropStatus, setDropStatus] = useState(false);
  let [povUser, setPovUser] = useState("");
  let [allMessages, setAllMessages] = useState<Message[]>([]);
  let [usersMessage, setUserMessages] = useState<string[]>([]);
  let [usersColors, setUserColor] = useState<string[]>([]);
  let actualDate: Date | null = null;
  let selectUserPov = useRef<HTMLSelectElement>(null);
  let [messageLoad, setMessageLoad] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const newUserColor = getRandomColor();
    setUserColor((prevColors) => [...prevColors, newUserColor]);
  }, [usersMessage, usersColors]);

  const handleDragEnter = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    if (!textDrop || !textDrop.current) return;

    if (!dropStatus) {
      textDrop.current.innerText = "Drop the file.";
    }
  
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    if (!textDrop || !textDrop.current) return;


    textDrop.current.innerText = "Drag or Upload a file.";
  };

  const handleChangeSelect = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    let selectedUser = e.target.selectedIndex;
    setPovUser(usersMessage[selectedUser]);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    if (!textDrop || !textDrop.current) return;

    !dropStatus ? (textDrop.current.innerText = "Drop the file.") : null;
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    if (!textDrop || !textDrop.current) return;

    textDrop.current.innerText = "Drag or Upload a file.";

    const file = e.dataTransfer.files[0];

    openFile(file)

  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {

    if(!event.target.files) return;

    const selectedFile = event.target.files[0];
    openFile(selectedFile)

  };

  function openFile(file: Blob | null){
    if (file != null) {
      if (file.type.startsWith("text/")) {
        const reader = new FileReader();

        reader.onload = () => {
          const fileContent = reader.result;
          const lines = (fileContent as string)?.split("\n");

          const newMessages = lines.map((element: string, index) =>
            setFormatedLines(element, index)
          );
          setAllMessages((prevMessages) => [...prevMessages, ...newMessages]);
          setDropStatus(true);
        };

        reader.readAsText(file);
      } else {
        console.log("Error: Only text files are supported.");
      }
    }
  }

  function setFormatedLines(messageLine: string, index : number) {
    setMessageLoad(index)
    const [dateTimePart, usernameAndMessage] = messageLine.split(" - ");
    let [datePart, timePart, meridem] = dateTimePart.split(" ");
    let defaultMessage = false;
    let username = "";
    let message = "";
    let date = parse(`${datePart} ${timePart} ${meridem}`,`d/M/yyyy h:mm a`, new Date());

    if (usernameAndMessage?.includes(":")) {
      username = usernameAndMessage.substring(0,usernameAndMessage.indexOf(":"));
      message = usernameAndMessage.substring(usernameAndMessage.indexOf(":") + 2);
    
    } else {
      const lastDashIndex = usernameAndMessage?.lastIndexOf("-");
       if(!isValid(date)) {
        message = messageLine;
        defaultMessage = false
      } else if (lastDashIndex !== -1) {
        message = usernameAndMessage?.substring(lastDashIndex + 2);
        defaultMessage = true;
      } else {
        message = usernameAndMessage;
        defaultMessage = true
      }
    }

    meridem = meridem != null ? meridem.replaceAll(" ", "") : "";
    const messageObject = new Message(username, message, date, defaultMessage);
    settingUsers(username);
    return messageObject;
  }

  function settingUsers(username: string) {
    if (username == "") return;
    setUserMessages((prevUsers) => [...new Set([...prevUsers, username])]);

    if (povUser == "") setPovUser(username);
  }

  function getRandomColor() {
    const minValue = 85;
    const r = Math.floor(Math.random() * (256 - minValue) + minValue);
    const g = Math.floor(Math.random() * (256 - minValue) + minValue);
    const b = Math.floor(Math.random() * (256 - minValue) + minValue);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function getColorByUsername(username: string) {
    const index = usersMessage.findIndex((u) => u === username);
    if (index !== -1) {
      return usersColors[index];
    }
    return "";
  }

  function mayShowActualDate(currentDate: Date) {
    if(!isValid(currentDate)) return false
    if (
      currentDate.getDate() === actualDate?.getDate() &&
      currentDate.getMonth() === actualDate?.getMonth() &&
      currentDate.getFullYear() === actualDate?.getFullYear()
    ) {
      return false;
    } else {
      actualDate = currentDate;
      return true;
    }
  }

  return (
    <>
      {dropStatus == false ? (
        <button
          className="flex min-h-[128px] py-8 transition-all active:scale-[0.98] items-center flex-col justify-center border-[6px] bg-light-green-200/70 hover:bg-light-green-200 border-light-green-300 text-white dark:bg-dark-green-300/25 hover:bg-dark-green-300/60 grow-0 border-dashed dark:border-dark-green-300 rounded-xl dark:text-dark-green-200 gap-2"
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => {
            if (fileInputRef.current) {
              fileInputRef.current.click();
            }
          }}        >
        <input
          className="hidden"
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
        />
          <FaUpload className="h-10 w-auto" />
          <p ref={textDrop}>Drag or Upload a file.</p>
        </button>
      ) : (
        <>
          <section className="dark:text-dark-green-200 text-white bg-light-green-300 dark:bg-dark-green-300/25 py-2 rounded-xl flex gap-2 flex-col justify-center items-center">
            <p className=" font-semibold">Control panel</p>
            <select
              ref={selectUserPov}
              onChange={handleChangeSelect}
              className="w-32 rounded-md dark:text-white bg-dark-green-200 px-2"
              name="selectedPov"
            >
              {usersMessage.map((element, index) => (
                <option
                  key={index}
                  value={element}
                  selected={element == povUser}
                >
                  {element}
                </option>
              ))}
            </select>
            <p className="font-semibold">
              Users in the conversation
            </p>
            <ul className="flex justify-center items-center w-full gap-2 flex-wrap">
              {usersMessage.map((element, index) => (
                <UserItem
                  element={element}
                  userColor={getColorByUsername(element)}
                  key={index}
                ></UserItem>
              ))}
            </ul>
            <p className="font-semibold">
              Loaded {messageLoad} messages
            </p>
          </section>
        </>
      )}
      
      <ul className="bg-[url('/img/background-light.png')] dark:bg-[url('/img/background-dark.png')] bg-half flex flex-col rounded-md p-3 gap-1 overflow-hidden">
        {allMessages.length < 1 ? (
            <TestingMessage></TestingMessage>
        ) : (
          allMessages.map((element: Message, index) => {
            return (
              <React.Fragment key={index}>
                {mayShowActualDate(element.date) ? <DateItem date={element.date}></DateItem> : null}
                {!element.defaultMessage ? (
                  <MessageItem
                    element={element}
                    index={index}
                    povUser={povUser}
                    colorUser={getColorByUsername(element?.username)}
                  />
                ) : element.message !== ("" || undefined) ? (
                  <DefaultAlert key={index} message={element.message} />
                ) : null}
              </React.Fragment>
            );
          })
        )}
      </ul>
    </>
  );
};

export default FileSelect;
