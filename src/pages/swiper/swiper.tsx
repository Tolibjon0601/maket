import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

type Product = {
  id: number;
  img: string;
  isLiked: boolean;
  title: string;
  price: string;
  createdAt: number;
  name: string;
  photo: string;
  number: string;
};

const Swiper = () => {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await axios.get('https://66ceca18901aab24841f8da1.mockapi.io/api/ecomerce');
      return response.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products</p>;

  return (
    <div>
      <SwiperComponent
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
      >
        <ul className="flex flex-wrap gap-[52px] mx-auto">
          {products?.map((product: Product) => (
            <SwiperSlide key={product.id}>
              <li className="w-[390px] shadow-lg bg-[white] relative rounded-[10px]">
                <Link to={`/product/${product.id}`}>
                  <div>
                    <img
                      className="h-[231.6px] w-full rounded-t-[10px]"
                      src={product.photo}
                      alt={product.title}
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <h2 className="font-normal text-[22px] text-primary mb-7">{product.title}</h2>
                  <div className="flex justify-between">
                    <p className="font-light text-2xl text-third">${product.number}</p>
                  </div>
                  <div className="flex justify-between items-center mt-8">
                    <div className="flex items-center gap-2">
                      <img src="./sofa_img.svg" alt="img" />
                      <p className="text-base text-[#999] font-normal">10</p>
                      <img src="./Area_icon.svg" alt="img" />
                      <p className="text-base text-[#999] font-normal">{product.price}M<sup>2</sup></p>
                      <img src="./brush.svg" alt="img" />
                      <p className="text-base text-[#999] font-normal">Евроремонт</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-5 mb-[26px]">
                    <p className="text-primary text-xs font-normal">г.Ташкент</p>
                    <p className="text-base text-[#999] font-normal">{product.createdAt}</p>
                  </div>
                </div>
              </li>
            </SwiperSlide>
          ))}
        </ul>
      </SwiperComponent>
    </div>
  );
};

export default Swiper;
