import { MdPersonOutline } from "react-icons/md";
import { PiNotepadBold } from "react-icons/pi";
import { FC, useContext } from "react";
import { FaRegHeart, FaIdCard } from "react-icons/fa";
import { LuRocket, LuWallet } from "react-icons/lu";
import { BsEmojiSmile } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import { TiTick } from "react-icons/ti";

import { AuthContext } from "../../pages/authcontext/authcontext";
import { useNavigate } from "react-router";

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  const { favoriteCount } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleExit = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <div className="flex bg-[white] h-screen p-4">
      <aside className="w-1/4 bg-white p-[60px] shadow-lg overflow-y-scroll rounded-lg">
        <nav className="space-y-6">
          <div className="text-gray-600 font-semibold flex hover:text-secondary gap-2 mt-[75px] items-center space-x-2">
            <span>
              <MdPersonOutline size={26} />
            </span>
            <span>Мой профиль</span>
          </div>
          <div className="text-gray-600 font-semibold flex hover:text-secondary items-center gap-2 space-x-2">
            <span>
              <PiNotepadBold size={26} />
            </span>
            <span>Мои объявления</span>
          </div>
          <div className="text-gray-600 font-semibold gap-2 hover:text-secondary flex items-center space-x-2">
            <FaRegHeart size={26} />
            {favoriteCount > 0 && (
              <span className="absolute bottom-4 left-3 py-1 px-2 bg-secondary rounded-md text-xs text-white">
                {favoriteCount}
              </span>
            )}
            <span>Избранное</span>
          </div>
          <div className="text-gray-600 font-semibold hover:text-secondary gap-2 flex items-center space-x-2">
            <span>
              <LuWallet size={26} />
            </span>
            <span>
              Баланс:{" "}
              <span className="font-normal text-xl text-textcolor">
                10,000 UZS
              </span>
            </span>
          </div>
          <div className="text-gray-600 font-semibold hover:text-secondary gap-2 flex items-center space-x-2">
            <span>
              <FaIdCard size={26} />
            </span>
            <span>
              Ваш ID:{" "}
              <span className="font-normal text-textcolor text-xl">1001</span>
            </span>
          </div>
          <div className="text-gray-600 font-semibold hover:text-secondary gap-2 flex items-center space-x-2">
            <span>
              <LuRocket size={26} />
            </span>
            <span>Тарифы</span>
          </div>
          <div className="text-gray-600 font-semibold hover:text-secondary gap-2 flex items-center space-x-2">
            <span>
              <BsEmojiSmile size={26} />
            </span>
            <span>Отзывы</span>
          </div>
          <button onClick={handleExit} className="text-[red] font-semibold pt-[110px] flex items-center gap-2">
            <span className="text-[red]">
              <CiLogin size={26} />
            </span>
            Выйти из аккаунта
          </button>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-white shadow-lg rounded-lg ml-4">
        <h1 className="text-2xl font-semibold mt-[10px] mb-[20px]">
          Изменить профиль
        </h1>

        <form className="space-y-6">
          <div>
            <label className="block text-textcolor font-medium mb-2 ">
              Имя
            </label>
            <input
              type="text"
              defaultValue="Александр"
              className="w-[330px] p-3 border border-secondary rounded-lg focus:outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block text-textcolor font-medium mb-2">
              Телефон
            </label>
            <input
              type="text"
              value="+998 99 895 90-95"
              disabled
              className="w-[330px] p-3 border border-secondary rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>

          <button
            type="button"
            className="py-[15px] px-[92px] bg-secondary mt-[60px] rounded-xl"
          >
            Сохранить
          </button>
        </form>

        <div className="mt-10 space-y-4">
          <div className="flex flex-col gap-2">
            <span className="text-textcolor font-bold">Текущий тариф:</span>{" "}
            <span className="font-semibold">Optimal Plan 3</span>
          </div>
          <div className="flex flex-col gap-2 mt-[30px]">
            <span className="text-textcolor font-bold">
              Разрешение на размещение объявлений
            </span>
            <span className="font-semibold text-third flex items-center">
              Есть <TiTick size={26} />
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-textcolor">
              Разрешение на просмотр дополнительной информации об объявлении
            </span>
            <div className="flex items-center gap-[55px] mt-4">
              <span className="text-[red] font-semibold">Нет ✘</span>
              <button className="text-yellow-500 font-semibold text-base">
                Подписаться на{" "}
                <span className="text-secondary text-sm">тарифный план</span>
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="py-[15px] px-[39px] bg-secondary mt-[20px] rounded-xl"
        >
          Поднять объявление в топ
        </button>
      </main>
    </div>
  );
};

export default Profile;
