import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router";
import useResMenu from "../utils/useResMenu";

const ResMenu = () => {
  const { resId } = useParams();

  const resInfo = useResMenu(resId)

  if (resInfo === null) return <Shimmer />;

  const { text } = resInfo?.data?.cards[0]?.card?.card;

  const { cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
      (card) => card.card.card.title?.toLowerCase() === "recommended"
    ).card?.card;

  return (
    <div className="res-info">
      <h1>{text}</h1>
      <h3>{`${cuisines.join(", ")} - ${costForTwoMessage}`}</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>{`${item?.card?.info?.name} - ₹ ${
            (item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100
          }`}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResMenu;
