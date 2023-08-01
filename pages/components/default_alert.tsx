interface DefaultAlertProps {
  message: string;
}

const DefaultAlert = ({ message }: DefaultAlertProps) => {
  return (
    <li>
      <div className="gap-2 flex justify-center items-centerrounded-md py-1 px-2 text-center my-3">
        <p className="bg-graymsg p-1 rounded-md text-white text-sm break-all">
          {message}
        </p>
      </div>
    </li>
  );
};

export default DefaultAlert;
