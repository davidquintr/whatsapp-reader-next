import DateItem from "./dateItem";
import MessageItem from "./messageItem";

const messages = [
  {
    defaultMessage: false,
    message: "Hello, I'm a dog",
    date: new Date("2021-06-07"),
    username: "Dog",
  },
  {
    defaultMessage: false,
    message: "Yes, meow.",
    date: new Date("2021-06-07"),
    username: "Cat",
  },
];

const TestingMessage = () => {
  return (
    <>
      <DateItem date={new Date("2003-09-11")}></DateItem>
      {messages.map((msg, index) => (
        <MessageItem
          colorUser="rgb(142, 120, 208)"
          element={msg}
          index={index}
          povUser={messages[1].username}
          key={index}
        />
      ))}
    </>
  );
};

export default TestingMessage;
