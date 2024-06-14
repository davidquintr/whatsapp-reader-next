import { FaUser } from "react-icons/fa";

interface DefaultUserItemProps {
  userColor: string;
  element: string;
}

const UserItem = ({ userColor, element }: DefaultUserItemProps) => {
  return (
    <li
      style={{ color: userColor }}
      className="flex bg-white dark:bg-dark-gray-500/30 px-2 items-center justify-center gap-2 py-1 rounded-xl"
    >
      <FaUser/>
      <span>{element}</span>
    </li>
  );
};

export default UserItem;
