import { AiOutlineFire } from "react-icons/ai";
import { FiGrid, FiServer } from "react-icons/fi";
import HomePageRow from "./homePageRow";
import HomePageColumn from "./homePageColumn";
import { FC, useState } from "react";

const HomePage: FC = () => {
  const [tab, setTab] = useState<number>(1);

  return (
    <div className="p-4">
      <div className="mb-14 mt-[68px] flex justify-between items-center">
        <div>
          <h1 className="font-medium text-3xl gap-4 text-primary flex items-center">
            Топ объявления
            <span>
              <AiOutlineFire />
            </span>
          </h1>
        </div>
        <div className="gap-2 flex">
          <button
            onClick={() => setTab(1)}
            className={`p-2 rounded-full ${tab === 1 ? "text-primary" : "text-textcolor"}`}
          >
            <FiServer size={28} />
          </button>
          <button
            onClick={() => setTab(2)}
            className={`p-2 rounded-full ${tab === 2 ? "text-primary" : "text-textcolor"}`}
          >
            <FiGrid size={28} />
          </button>
        </div>
      </div>

      {tab === 1 ? <HomePageColumn /> : <HomePageRow />}
    </div>
  );
};

export default HomePage;
