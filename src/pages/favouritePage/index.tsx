import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";

type Product = {
  id: number;
  img: string;
  isLiked: boolean;
  title: string;
  price: string;
  createdAt: number;
  name: string;
  photo: string;
};

const FavoritePage: FC = () => {
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const favoritesFromStorage = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(favoritesFromStorage);
    fetchFavoriteProducts(favoritesFromStorage);
  }, []);

  const fetchFavoriteProducts = async (favoriteIds: number[]) => {
    try {
      const { data: products } = await axios.get<Product[]>("https://66ceca18901aab24841f8da1.mockapi.io/api/ecomerce");
      const filteredProducts = products.filter((product) => favoriteIds.includes(product.id));
      setFavoriteProducts(filteredProducts);
    } catch (error) {
      console.error("Error fetching favorite products:", error);
    }
  };

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => {
      const updatedFavorites = prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      fetchFavoriteProducts(updatedFavorites);

      return updatedFavorites;
    });
  };

  return (
    <div>
      {favoriteProducts.length > 0 ? (
        <ul className="flex flex-col gap-10 mx-auto mt-[54px] mb-[67px]">
          {favoriteProducts.map((product) => (
            <li key={product.id} className="flex shadow-lg relative rounded-l-[10px] mx-auto max-w-[1300px] bg-[white]">
              <Link to={`/product/${product.id}`}>
                <div>
                  <img className="w-[290px] h-[200px] rounded-l-[10px]" src={product.photo} alt={product.title} />
                </div>
              </Link>
              <div className="px-10">
                <div className="flex items-center mb-[57px] justify-between w-[1000px]">
                  <h2 className="font-normal text-[22px] text-primary mt-4">{product.title}</h2>

                  <button onClick={() => toggleFavorite(product.id)} className="text-2xl">
                    {favorites.includes(product.id) ? (
                      <HiHeart className="text-[red]" />
                    ) : (
                      <HiOutlineHeart />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="./sofa_img.svg" alt="sofa" />
                    <p className="text-base text-[#999] font-normal">10</p>
                    <img src="./Area_icon.svg" alt="area" />
                    <p className="text-base text-[#999] font-normal">
                      60M<sup>2</sup>
                    </p>
                    <img src="./brush.svg" alt="brush" />
                    <p className="text-base text-[#999] font-normal">Евроремонт</p>
                  </div>
                  <p className="font-light text-2xl text-third">${product.price}</p>
                </div>

                <div className="flex items-center justify-between mt-4 mb-[17px]">
                  <p className="text-primary text-xs font-normal">
                    г.Ташкент, Юнусабадский р-н, ул.Янгишахар
                  </p>

                  <div className="gap-[43px] flex items-center">
                    <div className="flex items-center gap-[6px]">
                      <img src="eye_icon.svg" alt="eye" />
                      <p className="text-base text-[#999] font-normal">12983</p>
                    </div>
                    <p className="text-base text-[#999] font-normal">
                      Опубликовано 22:38 25-Окт 2021
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <span className="w-[10px] h-[200px] bg-secondary block rounded-br-[10px] rounded-r-[10px] absolute right-[-7px]"></span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>This Page is Empty!</p>
      )}
    </div>
  );
};

export default FavoritePage;
