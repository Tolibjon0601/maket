import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import useFetchData from "../../hooks/useFetchData";
import { RingLoader } from "react-spinners";
import { BiArrowBack } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { RiFireLine } from "react-icons/ri";
import { GoShareAndroid } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

const SinglePage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, loading } = useFetchData(
    `https://66ceca18901aab24841f8da1.mockapi.io/api/ecomerce/${id}`
  );

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <RingLoader color="orange" size={100} />
      </div>
    );
  }

  return (
    <div className="flex gap-[30px] mx-auto mt-[35px] mb-10">
      <div className="">
        <div className=" SWIPER mb-[38px]">
          <div
            onClick={() => navigate("/")}
            className="flex  cursor-pointer items-center gap-2 text-textcolor mb-10"
          >
            <BiArrowBack size={22} />
            <h1 className="font-medium text-base">Вернуться</h1>
          </div>

          <div className=" w-full max-w-[700px]">
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={{ nextEl: ".next", prevEl: ".prev" }}
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mainSwiper rounded-3xl"
            >
              {data.photo &&
                [...Array(4)].map((_, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="w-full h-[500px] object-cover rounded-3xl"
                      src={data.photo}
                      alt=""
                    />
                  </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex justify-center mt-2">
              <button className="next text-gray-700 mr-4">prev </button>
              <button className="prev text-gray-700 mr-4">next</button>
            </div>

            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={20}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="thumbSwiper mt-[35px]"
            >
              {data.photo &&
                [...Array(4)].map((_, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="w-full h-[140px] object-cover rounded-3xl"
                      src={data.photo}
                      alt=""
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>

        <div className="CARD">
          <div className="flex items-center gap-[22px] justify-end">
            <a className="text-[22px] text-primary font-light" href="#">
              +998 99 555 60-70
            </a>
            <button className="py-3 px-[38px] bg-secondary rounded-[10px]">
              Показать номер
            </button>
          </div>
          <div className="flex items-center gap-[22px] justify-end">
            <a
              className="text-[22px] text-right max-w-[260px] text-primary font-light"
              href="#"
            >
              г.Ташкент, Чиланзарский р-н ул.Улица, Дом 65
            </a>
            <button className="py-3 px-[22px] mt-6 bg-secondary rounded-[10px]">
              Посмотреть на карте
            </button>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "20px",
            marginTop: "38px",
          }}
        >
          <a
            href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "0px",
            }}
          >
            Toshkent
          </a>
          <a
            href="https://yandex.uz/maps/10335/tashkent/?ll=69.251891%2C41.310618&utm_medium=mapframe&utm_source=maps&z=13.65"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "14px",
            }}
          >
            Toshkent — Yandex Xarita
          </a>
          <iframe
            src="https://yandex.uz/map-widget/v1/?ll=69.251891%2C41.310618&z=13.65"
            width="700"
            height="495"
            frameBorder="1"
            allowFullScreen="true"
            style={{ position: "relative" }}
          ></iframe>
        </div>
      </div>

      <div className=" rounded-2xl bg-[white] mt-[64px] w-[545px] px-[37px]">
        <div className="flex items-center justify-between pt-[33px] mb-[30px]">
          <div className="flex items-center gap-4">
            <h1 className="text-secondary">
              <RiFireLine size={26} />
            </h1>
            <h2 className="font-medium text-3xl text-primary">{data.title}</h2>
          </div>
          <div className="flex items-center gap-6">
            <GoShareAndroid size={26} />
            <IoHeartOutline size={26} />
          </div>
        </div>

        <div className="relative mb-[30px]">
          <h2 className="font-normal text-4xl text-third ">${data.price}</h2>
          <span className="absolute top-[-10px] left-16 bg-[#fe6633]  text-center rounded-xl font-bold text-[white] px-3 py-1">
            1%
          </span>
        </div>

        <ul className="flex items-center gap-12 mb-[30px]">
          <li className="px-[10px] py-[13px] bg-[#f6f6f6] rounded-[10px] w-[125px]">
            <h2 className="font-medium text-textcolor text-base">
              Стоимость м2{" "}
            </h2>
            <p className="text-base font-light">${data.price / 100}</p>
          </li>
          <li className="px-[10px] py-[13px] bg-[#f6f6f6] rounded-[10px] w-[125px]">
            <h2 className="font-medium text-textcolor text-base">Предоплата</h2>
            <p className="text-base font-light">85%</p>
          </li>
          <li className="px-[10px] py-[13px] bg-[#f6f6f6] rounded-[10px] w-[125px]">
            <h2 className="font-medium text-textcolor text-base">Рассрочка</h2>
            <p className="text-base font-light">Есть </p>
          </li>
        </ul>
        <div>
          <h2 className="font-medium text-textcolor text-base gap-[58px] mb-[9px] flex">
            Месячный платеж <span className="text-primary">1%</span>
          </h2>
          <h2 className="font-medium text-textcolor text-base gap-[142px] mb-[9px] flex">
            Скидка <span className="text-primary">1%</span>
          </h2>
          <h2 className="font-medium text-textcolor  text-base gap-[151px] flex">
            Акция{" "}
            <span className="text-primary mb-[9px]">
              Описание акции, здесь будет подробная информация об акции
            </span>
          </h2>
          <h2 className="text-base text-third  font-medium gap-[81px] flex mb-[30px] ">
            Комиссионные <span>Нет</span>
          </h2>
          <hr className="text-[#eee] mb-[30px]" />
          <ul>
            <li className="flex gap-[49px] mb-[9px]">
              <h1 className="font-medium text-textcolor  text-base ">
                Количество комнат
              </h1>
              <p className="text-primary">28 комнат</p>
            </li>
            <li className="flex gap-[125px] mb-[9px]">
              <h1 className="font-medium text-textcolor  text-base ">
                Площадь
              </h1>
              <p className="text-primary">
                100 м <sup>2</sup>
              </p>
            </li>
            <li className="flex gap-[49px] mb-[9px]">
              <h1 className="font-medium text-textcolor  text-base ">
                Количество этажей
              </h1>
              <p className="text-primary">3 этажа и подвал</p>
            </li>
            <li className="flex gap-[135px] mb-[9px]">
              <h1 className="font-medium text-textcolor  text-base ">
                Санузел
              </h1>
              <p className="text-primary">10 отдельных санузлов</p>
            </li>
            <li className="flex gap-[105px] mb-[9px]">
              <h1 className="font-medium text-textcolor  text-base ">
                Планировка
              </h1>
              <p className="text-primary">Планировка</p>
            </li>
            <li className="flex gap-[88px] mb-[9px]">
              <h1 className="font-medium text-textcolor  text-base ">
                Год постройки
              </h1>
              <p className="text-primary">2020</p>
            </li>
            <li className="flex gap-[77px] mb-[9px]">
              <h1 className="font-medium text-textcolor  text-base ">
                Высота потолка
              </h1>
              <p className="text-primary">3.5 м</p>
            </li>
            <li className="flex gap-[120px] mb-[9px]  ">
              <h1 className="font-medium text-textcolor  text-base   ">
                В доме имеется
              </h1>
              <div className="gap-2 flex flex-wrap  ">
                <h2 className="py-1 px-2 bg-[#eee] text-sm rounded-2xl">
                  интернет
                </h2>
                <h2 className="py-1 px-2 bg-[#eee] text-sm rounded-2xl">
                  телефон
                </h2>
                <h2 className="py-1 px-2 bg-[#eee] text-sm rounded-2xl">
                  мебель
                </h2>
                <h2 className="py-1 px-2 bg-[#eee] text-sm rounded-2xl">
                  холодильник
                </h2>
                <h2 className="py-1 px-2 bg-[#eee] text-sm rounded-2xl">
                  кондиционер
                </h2>
              </div>
            </li>
            <li className="flex gap-[90px] mb-[9px]">
              <h1 className="font-medium text-textcolor  text-base ">
                Прочие удобства
              </h1>
              <div className="gap-2 flex flex-wrap  ">
                <h2 className="py-1 px-2 bg-[#eee] text-sm rounded-2xl">
                  видеонаблюдение
                </h2>
                <h2 className="py-1 px-2 bg-[#eee] text-sm rounded-2xl">
                  бассейн
                </h2>
                <h2 className="py-1 px-2 bg-[#eee] text-sm rounded-2xl">
                  сауна
                </h2>
                <h2 className="py-1 px-2 bg-[#eee] text-sm rounded-2xl">
                  гараж
                </h2>
              </div>
            </li>
            <li className="flex gap-[150px] mb-[9px]">
              <h1 className="font-medium text-textcolor  text-base ">Рядом</h1>
              <div className="gap-2 flex flex-wrap mb-[13px]  ">
                <h2 className="py-1 px-2 bg-[#eee] text-sm rounded-2xl">
                  поликлиника
                </h2>
                <h2 className="py-1 px-2 bg-[#eee] text-sm rounded-2xl">
                  школа
                </h2>
                <h2 className="py-1 px-2 bg-[#eee] text-sm rounded-2xl">
                  парк
                </h2>
                <h2 className="py-1 px-2 bg-[#eee] text-sm rounded-2xl">
                  детский сад
                </h2>
                <h2 className="py-1 px-2 bg-[#eee] text-sm rounded-2xl">
                  супермаркет
                </h2>
              </div>
            </li>

            <li className="flex gap-[50px] mb-[30px]">
              <h1 className="font-medium text-textcolor  text-base ">
                Брокерское обслуж.
              </h1>
              <p className="text-primary">Есть</p>
            </li>
            <hr className="text-[#eee] mb-[30px]" />
          </ul>
          <div className="mt-[35px]">
            <h2 className="font-medium text-textcolor  text-base mb-4">
              Дополнительная информация
            </h2>
            <p className="font-normal text-sm max-w-[450px] text-primary mb-[63px]">
              Это стильная вилла с потрясающим видом на море и находится всего в
              нескольких метрах от Кала Vadella. Просторная гостиная, большая
              полностью оборудованная кухня открытого плана столовая и
              многочисленные зоны отдыха и террасы, кондиционер, пол с
              подогревом, сигнализация, спутниковое телевидение, интернет, hi-
              фантастические и электронные жалюзи
            </p>
            <h2 className="text-3xl font-medium text-primary mb-[30px]">
              Имя Пользователя
            </h2>
          </div>
          <div className="flex items-center justify-between mb-[19px]">
            <div>
              {" "}
              <p className="text-textcolor mb-[17px] font-normal text-sm ">
                Опубликовано 22:38 25-Окт 2021
              </p>
              <p className="text-textcolor font-normal text-sm flex items-center">
                <span>
                  <IoEyeOutline />
                </span>
                12983
              </p>
            </div>
            <button className="py-3 px-8 bg-secondary rounded-[10px]">
              Продлить топ
            </button>
          </div>
        </div>
        <Swiper/>
      </div>
    </div>
  );
};

export default SinglePage;
