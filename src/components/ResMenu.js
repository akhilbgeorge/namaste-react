import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router";
import useResMenu from "../utils/useResMenu";
import ResMenuCategory from "./ResMenuCategory";

const ResMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();
  const resInfo = useResMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { text } = resInfo?.data?.cards[0]?.card?.card;
  const { cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  const cards = resInfo?.data?.cards?.find((card) => card.groupedCard);
  const categories = cards?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (card) =>
      card?.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div>
      <div className="text-center my-3">
        <h1 className="font-bold text-2xl">{text}</h1>
        <h3>
          {cuisines.join(", ")} - {costForTwoMessage}
        </h3>
      </div>
      {categories.map((category, index) => (
        <ResMenuCategory
          key={category?.card?.card?.categoryId}
          data={category}
          showList={index === showIndex ? true : false}
          setCatIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default ResMenu;
