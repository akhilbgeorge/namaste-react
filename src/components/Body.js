import ResCard, { UseDiscountLabel } from "./ResCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useShowOnlineStatus from "../utils/useShowOnlineStatus";
import { KOCHI_RES_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [displayedRestaurants, setDisplayedRestaurants] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchText, setSearchText] = useState("");
  const {userName,setUserInfo} = useContext(UserContext);

  const ResCardDiscount = UseDiscountLabel(ResCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      KOCHI_RES_URL
    );
    const json = await data.json();
    const resDataCard = json?.data?.cards?.find(
      (c) =>
        c.card.card.gridElements?.infoWithStyle["@type"] ===
        "type.googleapis.com/swiggy.seo.widgets.v1.FoodRestaurantGridListingInfo"
    );
    const { restaurants } =
      resDataCard?.card?.card?.gridElements?.infoWithStyle;
    setAllRestaurants(restaurants);
    setDisplayedRestaurants(restaurants);
  };

  const onlineStatus = useShowOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1>
        "Looks like you're offline!. Please check your internet connection"
      </h1>
    );
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mx-20 my-5">
      <div className="flex items-center m-3 gap-64">
        <div className="flex gap-3">
          <button
            disabled={isFiltered}
            className={`${
              isFiltered ? "bg-gray-300" : "bg-gray-200"
            } px-3 py-1 rounded-sm`}
            onClick={() => {
              setDisplayedRestaurants(
                allRestaurants.filter((res) => res.info.avgRating > 4.5)
              );
              setIsFiltered(true);
            }}
          >
            Filter Top Restaurants
          </button>
          <button
            disabled={!isFiltered}
            className="bg-gray-200 px-3 py-1 rounded-sm"
            onClick={() => {
              setDisplayedRestaurants(allRestaurants);
              setIsFiltered(false);
              setSearchText("");
            }}
          >
            Reset
          </button>
        </div>
        <div>
          <input onChange={(e)=>setUserInfo(e.target.value)} value={userName} className="border px-2 py-1" type="text" />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gray-300 rounded-sm outline-none px-3"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setIsFiltered(e.target.value.length !== 0 ? true : false);
            }}
          />
          <button
            className="bg-gray-200 px-3 py-1 rounded-sm"
            onClick={() => {
              const filtered = allRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.trim().toLowerCase())
              );
              setDisplayedRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-8">
        {displayedRestaurants?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            {restaurant?.info?.aggregatedDiscountInfoV3 ? (
              <ResCardDiscount resData={restaurant} />
            ) : (
              <ResCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
