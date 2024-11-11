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
  createdAt: string;
  name: string;
  photo: string;
  number: string;
};

const HomePageRow: FC = () => {
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
    <div className="pt-[68px]">
      <ul className="flex flex-wrap gap-[52px] mx-auto">
        {products?.map((product: Product) => (
          <li key={product.id} className="w-[390px] shadow-lg bg-[white] relative rounded-[10px]">
            <Link to={`/product/${product.id}`}>
              <div><img className="h-[231.6px] w-full rounded-t-[10px]" src={product.photo} alt={product.title} /></div>
            </Link>
            <div className="p-4">
              <h2 className="font-normal text-[22px] text-primary mb-7">{product.title}</h2>
              <div className="flex justify-between">
                <p className="font-light text-2xl text-third">${product.number}</p>
                <button onClick={() => handleToggleFavorite(product.id)} className="text-2xl">
                  {favorites.includes(product.id) ? <HiHeart className="text-[red]" /> : <HiOutlineHeart />}
                </button>
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
            <div><span className="w-[10px] h-[390px] bg-secondary block rounded-br-[10px] rounded-r-[10px] rotate-90 absolute left-[190px] top-[285px]"></span></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePageRow;
