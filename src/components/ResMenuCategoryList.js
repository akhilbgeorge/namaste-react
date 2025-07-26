import { useEffect, useRef, useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addItem} from "../utils/cartSlice"

const ResMenuCategoryList = ({ data, showAddButton }) => {
  const [truncated, setTruncated] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const ref = useRef();
  useEffect(() => {
    if (ref.current.scrollHeight > ref.current.offsetHeight) {
      setTruncated(true);
    }
  }, []);
  return (
    <div className="flex justify-between py-6 border-b border-gray-200">
      <div className="w-8/12">
        <h4 className="font-semibold text-lg text-gray-700">
          {data?.card?.info?.name}
        </h4>
        <h5 className="font-medium">
          ₹{(data?.card?.info?.price ?? data?.card?.info?.defaultPrice) / 100}
        </h5>
        <div className="flex mt-3">
          <p
            ref={ref}
            className={`text-gray-600 font-light text-justify ${
              showMore ? "" : "line-clamp-2"
            }`}
          >
            {data?.card?.info?.description}
          </p>
          {truncated && !showMore && (
            <button
              className="self-end font-medium text-gray-500 cursor-pointer"
              onClick={() => setShowMore(true)}
            >
              more
            </button>
          )}
        </div>
      </div>
      <div className="relative">
        {data?.card?.info?.imageId && (
          <img
            className="w-40 h-30 object-cover"
            src={CDN_URL + data?.card?.info?.imageId}
            alt="menu-logo"
          />
        )}
        {showAddButton && (
          <button
            onClick={() => handleAddItem(data)}
            className="absolute left-1/2 -translate-x-1/2 -bottom-4 bg-white border border-gray-200 shadow-2xs rounded-lg py-2 px-8 text-green-700 font-medium"
          >
            ADD
          </button>
        )}
      </div>
    </div>
  );
};

export default ResMenuCategoryList;
