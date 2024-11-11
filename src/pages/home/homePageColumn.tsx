import { HiOutlineHeart, HiHeart } from 'react-icons/hi2';
import { FC } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducer/store';
import { toggleFavorite } from "../../reducer/redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { RingLoader } from "react-spinners";

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

const HomePageColumn: FC = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  const { data: products, isLoading, error } = useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await axios.get('https://66ceca18901aab24841f8da1.mockapi.io/api/ecomerce');
      return response.data;
    },
  });

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <RingLoader color="orange" size={100} />
      </div>
    );
  }

  if (error instanceof Error) {
    return <p>Error loading products: {error.message}</p>;
  }

  const handleToggleFavorite = (productId: number) => {
    dispatch(toggleFavorite(productId));
  };

  return (
    <div>
      <ul className="gap-10 flex flex-col">
        {products?.map((product) => (
          <li key={product.id} className="flex shadow-lg relative rounded-[10px] max-w-[1400px] bg-[white]">
            <Link to={`/product/${product.id}`}>
              <div>
                <img className="w-[290px] h-[200px] rounded-l-[10px]" src={product.photo} alt={product.title} />
              </div>
            </Link>
            <div className="px-10">
              <div className="flex items-center mb-[57px] justify-between w-[1075px]">
                <h2 className="font-normal text-[22px] text-primary mt-4">{product.title}</h2>
                <button onClick={() => handleToggleFavorite(product.id)} className="text-2xl">
                  {favorites.includes(product.id) ? <HiHeart className="text-[red]" /> : <HiOutlineHeart />}
                </button>
              </div>
              <div className="flex justify-between"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src="./sofa_img.svg" alt="img" />
                  <p className="text-base text-[#999] font-normal">10</p>
                  <img src="./Area_icon.svg" alt="img" />
                  <p className="text-base text-[#999] font-normal">{product.price}M<sup>2</sup></p>
                  <img src="./brush.svg" alt="img" />
                  <p className="text-base text-[#999] font-normal">Евроремонт</p>
                </div>
                <p className="font-light text-2xl text-third">${product.number}</p>
              </div>
              <div className="flex items-center justify-between mt-4 mb-[17px]">
                <p className="text-primary text-xs font-normal">г.Ташкент, Юнусабадский р-н, ул.Янгишахар</p>
              </div>
            </div>
            <div>
              <span className="w-[10px] h-[200px] bg-secondary block rounded-br-[10px] rounded-r-[10px] absolute right-[-7px]"></span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePageColumn;