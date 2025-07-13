import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useShowOnlineStatus from "../utils/useShowOnlineStatus";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [displayedRestaurants, setDisplayedRestaurants] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setDisplayedRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useShowOnlineStatus();

  if(!onlineStatus){
    return <h1>"Looks like you're offline!. Please check your internet connection"</h1>
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter-container">
        <button
          disabled={isFiltered}
          className={isFiltered ? "btn isfiltered" : "btn"}
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
          className="btn"
          onClick={() => {
            setDisplayedRestaurants(allRestaurants);
            setIsFiltered(false);
            setSearchText("");
          }}
        >
          Reset
        </button>
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setIsFiltered(e.target.value.length !== 0 ? true : false);
            }}
          />
          <button
            className="btn search-btn"
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
      <div className="res-card-container">
        {displayedRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            <ResCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
