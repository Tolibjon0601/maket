import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import headerIcon from "../../assets/icons/header_icon.svg";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

// Define the items for the menu
const items: MenuItem[] = [
  {
    key: "1",
    label: "Категория недвижимости",
    children: [
      { key: "1", label: "Новостройки" },
      { key: "2", label: "Квартиры" },
      { key: "3", label: "Участки" },
      { key: "4", label: "Земля" },
      { key: "5", label: "Офисы" },
      { key: "6", label: "Магазины" },
    ],
  },
  {
    key: "2",
    label: "Область",
    children: [
      { key: "7", label: "Ташкентская область" },
      { key: "8", label: "Самаркандская область" },
      { key: "9", label: "Бухарская область" },
      { key: "10", label: "Хорезмская область" },
      { key: "11", label: "Ферганская область" },
      { key: "12", label: "Наманганская область" },
      { key: "13", label: "Андижанская область" },
      { key: "14", label: "Кашкадарьинская область" },
      { key: "15", label: "Сурхандарьинская область" },
      { key: "16", label: "Джизакская область" },
      { key: "17", label: "Навоийская область" },
      { key: "18", label: "Сырдарьинская область" },
    ],
  },
  {
    key: "3",
    label: "Ремонт",
    children: [
      { key: "19", label: "Евроремонт" },
      { key: "20", label: "Hi-Tech" },
      { key: "21", label: "Обычный ремонт" },
      { key: "22", label: "Советский ремонт" },
      { key: "23", label: "Категория ремонта" },
    ],
  },
];

const DrawerPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = (): void => {
    setIsOpen(!isOpen);
  };

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
  };

  return (
    <>
      <div className="fixed top-0 left-0 h-full z-50 flex bg-[white] overflow-y-scroll">
        <div
          className={`h-full bg-[white] flex flex-col items-center py-4 transition-all duration-300 ease-in-out ${isOpen ? "w-3/4 max-w-sm" : "w-16"}`}
        >
          <div className={`transition-all duration-300 ${isOpen ? "flex flex-col" : "flex-row"}`}>
            <button onClick={toggleDrawer} className="text-3xl text-secondary p-4">
              {isOpen ? <HiOutlineMenuAlt2 /> : <FiMenu />}
            </button>
            <Link to="/" className="text-primary">
              <img src={headerIcon} alt="logo" className={`${isOpen ? "mt-8 mb-6" : ""}`} />
            </Link>
            <hr className="text-[#eee] w-full" />
          </div>

          {isOpen && (
            <div className="pl-10 mr-8 flex flex-col mx-auto">
              <h2 className="text-lg font-medium mb-[30px] mt-[33px]">Фильтр</h2>

              <div className="flex gap-2 mb-4">
                <select id="sale" className="rounded-md bg-[#eee] hover:bg-secondary py-4 px-2">
                  <option className="bg-[#dcd5d5] text-xs text-primary" value="Продажа">Продажа</option>
                  <option className="bg-[#dcd5d5] text-xs text-primary" value="Аренда">Аренда</option>
                  <option className="bg-[#dcd5d5] text-xs text-primary" value="Сожит.">Сожит.</option>
                </select>
                <select id="sale" className="rounded-md bg-[#eee] hover:bg-secondary py-4 px-2">
                  <option className="bg-[#dcd5d5] text-xs text-primary" value="Аренда">Аренда</option>
                  <option className="bg-[#dcd5d5] text-xs text-primary" value="Продажа">Продажа</option>
                  <option className="bg-[#dcd5d5] text-xs text-primary" value="Сожит.">Сожит.</option>
                </select>
                <select id="sale" className="rounded-md bg-[#eee] hover:bg-secondary py-4 px-2">
                  <option className="bg-[#dcd5d5] text-xs text-primary" value="Сожит.">Сожит.</option>
                  <option className="bg-[#dcd5d5] text-xs text-primary" value="Продажа">Продажа</option>
                  <option className="bg-[#dcd5d5] text-xs text-primary" value="Аренда">Аренда</option>
                </select>
              </div>

              <Menu
                onClick={onClick}
                style={{ width: 335 }}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                items={items}
              />

              <div className="my-4 flex items-center justify-between">
                <label className="block text-xs font-medium">Комнат</label>
                <div className="flex items-center gap-2 bg-[#f3f3f3] py-2 px-7 rounded-[5px]">
                  <span className="text-textcolor font-medium">от</span>
                  <input type="number" className="w-8 bg-[transparent] border-b-2 border-textcolor text-center" />
                  <span className="text-textcolor font-medium">до</span>
                  <input type="number" className="w-8 bg-[transparent] border-b-2 border-textcolor text-center" />
                </div>
              </div>

              <div className="my-4 flex items-center justify-between mb-[25px]">
                <label className="block text-xs font-medium">Площадь</label>
                <div className="flex items-center gap-2 bg-[#f3f3f3] py-2 px-3 rounded-[5px]">
                  <span className="text-textcolor font-medium">от</span>
                  <input type="number" className="w-8 bg-[transparent] border-b-2 border-textcolor text-center" />
                  <span className="text-textcolor font-medium">до</span>
                  <input type="number" className="w-8 bg-[transparent] border-b-2 border-textcolor text-center" />
                  <p className="text-textcolor font-medium">м<sup>2</sup></p>
                </div>
              </div>

              <div className="my-4">
                <p className="font-medium text-xs text-primary mb-6">Комиссионные</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-[18px]">
                    <label className="flex items-center">
                      <input type="radio" name="commission" className="mr-2" /> Да
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="commission" className="mr-2" /> Нет
                    </label>
                  </div>
                  <button className="w-full bg-secondary py-[15px] px-[19px] text-[white] rounded-lg font-semibold">
                    Применить
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0  z-40" onClick={toggleDrawer}></div>
      )}
    </>
  );
};

export default DrawerPage;
