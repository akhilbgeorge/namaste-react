import { useState } from "react";
import ResMenuCategoryList from "./ResMenuCategoryList";

const ResMenuCategory = ({ data, showList, setCatIndex }) => {
  return (
    <div className=" w-7/12 mx-auto border-b border-gray-200 px-10 shadow-md">
      <div
        onClick={() => setCatIndex()}
        className="flex justify-between py-5 cursor-pointer"
      >
        <h2 className="font-bold text-lg">{`${data?.card?.card?.title} (${data?.card?.card?.itemCards?.length})`}</h2>

        <div
          className={`transition-transform duration-300  ${
            showList ? "rotate-0" : "rotate-180"
          }`}
        >
          ↑
        </div>
      </div>
      {showList &&
        data?.card?.card?.itemCards?.map((dish) => (
          <ResMenuCategoryList key={dish.card.info.id} data={dish} showAddButton={true} />
        ))}
    </div>
  );
};

export default ResMenuCategory;
