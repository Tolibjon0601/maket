import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { HiOutlinePhone } from "react-icons/hi";
import { LiaTelegram } from "react-icons/lia";
import { SlSocialYoutube } from "react-icons/sl";
import { TbBrandFacebook } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="flex pt-[50px] justify-around bg-[white]">
      <ul>
        <li>

          <h1 className="text-primary font-medium text-base mb-5">Полезные Ссылки</h1>
        </li>
        <li>
          <a href="#" className="font-normal text-sm text-[#999] mb-2">О Нас</a>
        </li>
        <li>
          <a  href="#" className="font-normal text-sm text-[#999] mb-[65px] block">Пользовательское Соглашение</a>
        </li>
        <li>
          <a href="#" className="font-normal text-sm text-[#999]">©️ 2021 <span className="font-bold text-primary">Utopia</span> | Все права защищены</a>
        </li>
      </ul>
      <ul>
        <li>
          <h1 className="text-primary font-medium text-base mb-[15px]">Наши Страницы</h1>
        </li>
        <div className="flex gap-2" >
          <li>
            <a href="#" className="hover:text-secondary">
              <LiaTelegram  size={23} />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-secondary">
              <SlSocialYoutube size={23} />
            </a>{" "}
          </li>
          <li>
            <a href="#" className="hover:text-secondary">
              <TbBrandFacebook size={23} />
            </a>{" "}
          </li>
          <li>
            <a href="#" className="hover:text-secondary" >
              <FaInstagram size={23} />{" "}
            </a>{" "}
          </li>
        </div>
      </ul>


      <ul>
        <li className="flex gap-[17px] items-center mb-2"><a  href="" ><HiOutlinePhone  size={22}  /> </a>
        <p className="text-primary font-light" >Тех. поддержка</p></li>
        <a href="#" className="font-medium text-2xl text-primary mb-[13px] block">+998 99 880 80-80</a>
        <li className="flex gap-[17px] items-center mb-2"><a href=""><AiOutlineMail size={22} /></a>
        <p className="text-primary font-light"> info@utopia.uz</p></li>
        <li className="flex gap-[17px] items-center"><a href="#"><FiHome  size={22}/>

</a>
<p className="text-primary font-light">г. Ташкент, Чиланзарский р-н, ул. Гульхани,  д-52</p></li>
      </ul>
    </div>
  );
};

export default Footer;
