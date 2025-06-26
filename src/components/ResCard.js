import { CDN_URL } from "../utils/constants";

const ResCard = ({ resData }) => {
  const {
    name = "",
    cuisines = [],
    avgRating = "N/A",
    sla = {},
    cloudinaryImageId = "",
  } = resData?.info || {};

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
        alt="restaurant-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default ResCard;