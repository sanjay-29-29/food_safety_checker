import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRobot, faCog } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { useUser } from "./Context";


const Navbar = () => {
  const { userInfo } = useUser();
  const nav = useNavigate();
  return (
    <>
      <div className="h-screen w-[20vh] flex flex-row bg-slate-100 justify-center">
        <div className="space-y-8 mt-20">
          <button className="flex items-center space-x-2">
            {userInfo &&
              <>
                <Avatar>
                  <AvatarFallback>{userInfo.name.slice(0, 1)}</AvatarFallback>
                </Avatar>
                <div className="font-thin">{userInfo.name}</div>
              </>
            }
          </button>
          <button className="flex items-center justify-between space-x-3 mt-5" onClick={() => { nav('/profile') }}>
            <FontAwesomeIcon icon={faUser} className="text-xl" />
            <div className="font-thin">Profile</div>
          </button>
          <button className="flex items-center justify-between space-x-3" onClick={() => { nav("/update") }}>
            <FontAwesomeIcon icon={faCog} className="text-xl" />
            <div className="font-thin">Update</div>
          </button>
          <button className="flex items-center justify-between space-x-3" onClick={() => { nav('/chatbot') }}>
            <FontAwesomeIcon icon={faRobot} className="text-xl" />
            <div className="font-thin">ChatBot</div>
          </button>
        </div>
      </div>
    </>
  );
};


export default Navbar;
