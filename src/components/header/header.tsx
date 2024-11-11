import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { PiNotepadBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { AuthContext } from "../../pages/authcontext/authcontext";

interface AuthContextType {
  isLogin: boolean;
  logout: () => void;
  favoriteCount: number;
}

const Header: FC = () => {
  const { isLogin, logout, favoriteCount } = useContext<AuthContextType>(AuthContext);

  return (
    <div className="flex items-center justify-center mx-auto px-4 py-[33px] bg-[white]">
      <ul className="flex gap-x-10 items-center">
        <li className="flex items-center gap-[300px] ">
          <input
            type="text"
            className="py-4 px-12 text-sm bg-[#eee] text-textcolor rounded-lg"
            placeholder="Найти объявления..."
          />
          <a
            href="#"
            className="flex flex-col text-2xl font-medium text-primary"
          >
            +998 99 880 80-80
            <span className="text-right text-[12px] font-light">
              Тех. поддержка
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-medium text-[14px] text-primary py-[15px] px-[18px] bg-secondary rounded-md"
          >
            Разместить объявление
          </a>
        </li>
        <li className="flex items-center gap-5">
          <Link to="/formPage">
            <PiNotepadBold size={24} />
          </Link>
          <Link to="/favouritePage">
            <div className="relative">
              <FaRegHeart size={24} />
              {favoriteCount > 0 && (
                <span className="absolute bottom-4 left-3 py-1 px-2 bg-secondary rounded-md text-xs text-white">
                  {favoriteCount}
                </span>
              )}
            </div>
          </Link>
          {isLogin ? (
            <Link to="/profile">
              <IoPersonOutline size={28} />
            </Link>
          ) : (
            <Link to="/login">
              <IoPersonOutline size={28} />
            </Link>
          )}
        </li>
        <li>
          <select id="languages" className="p-3 bg-[#f3f3f3] rounded-md">
            <option value="py">Py</option>
            <option value="uz">Uz</option>
            <option value="eng">Eng</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default Header;
