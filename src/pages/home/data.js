<button onClick={toggleFavorite}>
{isFavorite ? (
  <IoHeartSharp size={26} className="text-red-500" />
) : (
  <IoHeartOutline size={26} />
)}
</button>
 const [thumbsSwiper, setThumbsSwiper] = useState(null);
 const { id } = useParams();
 const navigate = useNavigate();
 const setTicket = useStore((state) => state.setTicket);

 const { data, loading } = useFetchData(
   `https://66ceca18901aab24841f8da1.mockapi.io/api/ecomerce/${id}`
 );

 const [isFavorite, setIsFavorite] = useState(false);

 useEffect(() => {
   const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
   setIsFavorite(favorites.includes(id));
 }, [id]);

 const toggleFavorite = () => {
   const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
   const updatedFavorites = isFavorite
     ? favorites.filter((favId: string) => favId !== id)
     : [...favorites, id];

   localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
   setIsFavorite(!isFavorite);
 };