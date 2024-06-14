interface DefaultAlertProps {
  message: string;
}

const DefaultAlert = ({ message }: DefaultAlertProps) => {
  return (
    <li>
      <div className="gap-2 flex justify-center items-centerrounded-md py-1 px-2 text-center my-3">
        <p className="dark:bg-dark-gray-200 p-1 rounded-md bg-light-gray-200 shadow-md dark:text-white text-sm break-all">
          {message}
        </p>
      </div>
    </li>
  );
};

export default DefaultAlert;
