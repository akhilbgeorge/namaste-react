import { useContext } from "react";
import StarRatingIcon from "../ui/icons/StarRatingIcon";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const ResCard = ({ resData }) => {
  const {userName} = useContext(UserContext);
  const {
    name = "",
    cuisines = [],
    avgRating = "N/A",
    sla = {},
    cloudinaryImageId = "",
  } = resData?.info || {};

  return (
    <div className="w-2xs h-80 p-4 rounded-sm transform transition-transform duration-300 hover:scale-95">
      <div className="relative">
        <img
          className="w-full h-40 rounded-2xl object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt="restaurant-logo"
        />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl"></div>
      </div>
      <h3 className="font-bold py-2">{name}</h3>
      <h4 className="truncate">{cuisines.join(", ")}</h4>
      <div className="flex items-center gap-1">
        <StarRatingIcon />
        <h4>{avgRating}</h4>
      </div>
      <h4>{sla?.slaString}</h4>
      <h4>{userName}</h4>
    </div>
  );
};

export const UseDiscountLabel = (WrapperComponent) => {
  return (props) => {
    const { aggregatedDiscountInfoV3 } = props.resData.info;

    return (
      <div>
        <label className="absolute ml-11 mt-36 text-white font-bold z-10 pointer-events-none">{`${aggregatedDiscountInfoV3.header} ${aggregatedDiscountInfoV3.subHeader}`}</label>
        <WrapperComponent {...props} />
      </div>
    );
  };
};

export default ResCard;
