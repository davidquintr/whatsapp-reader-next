import {  FaUser} from "react-icons/fa";

interface DefaultUserItemProps {
    userColor: string;
    element: string;
}

const UserItem = ({userColor, element}: DefaultUserItemProps) =>{
    return(
        <li style={{ color: userColor }} className="flex bg-darkgreen/30 px-2 items-center justify-center gap-2 py-1 rounded-xl">
        <FaUser></FaUser>
        <p>{element}</p>
      </li>
    )
}

export default UserItem