import useAuthStore from "@/store/authStore";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";
import useProfile from "../customhook/useProfile";

type Props = {};

export default function Header({ }: Props) {
  const { logout, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  const {removeProfile}=useProfile()

  const handleLogout = async () => {
    removeProfile()
    logout(); 
    navigate('/auth'); 
  };

  return (
    <header className="relative bg-gradient-to-b from-teal-700 via-teal-500 to-teal-300 p-8 px-20 py-[5rem] text-white rounded-bl-[20%] text-2xl flex flex-col justify-between z-50 h-[44rem]">
      <div className="absolute bottom-0 top-0 right-0 left-0 bg-[url('src/assets/download.svg')] bg-center bg-[length:40%] bg-no-repeat opacity-50" />
      <div className="absolute inset-0 z-50 px-20 py-[5rem]">
        <div className="flex justify-between w-full items-center ">
          <figure>
            <img src="src/assets/no background image.png" alt="" />
          </figure>
          <h1>Ethiopia Election Board</h1>
        </div>
        <div className="flex justify-between w-full">
          <nav>
            <ul className="flex gap-4 ">
              <li>Home</li>
              <li>Profile</li>
              <li>Contact us</li>
              <li>About us</li>
            </ul>
          </nav>
          <div className="space-x-3">
            {isAuthenticated ? (
              <Button 
                className="border-[0.1rem]"
                variant='ghost'
                onClick={handleLogout} // Call handleLogout on click
              >
                Logout
              </Button>
            ) : (
              <>
                <Button 
                  className="border-[0.1rem]"
                  variant='ghost'
                  onClick={() => navigate('/auth')} // Direct navigation for login
                >
                  Login
                </Button>
                <Button 
                  className="border-[0.1rem]"
                  variant='ghost'
                  onClick={() => navigate('/auth')} // Direct navigation for signup
                >
                  Signup
                </Button>
              </>
            )}
          </div>
        </div>
        <div className="z-[99999] text-center px-[20rem] py-7 space-y-2">
          <h1 className="text-[2rem] font-bold">"Empower Yourself: Every Vote Shapes Our Future!"</h1>
          <p className="font-serif">Voting is a fundamental right and responsibility in a democracy, allowing citizens to shape their future by choosing leaders and policies.</p>
        </div>
      </div>
    </header>
  );
}
