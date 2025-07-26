import { useDispatch, useSelector } from "react-redux";
import ResMenuCategoryList from "./ResMenuCategoryList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearItem = () =>{
    dispatch(clearCart())
  }
  return (
    <div>
      <div className="font-bold text-2xl text-center my-5">Cart</div>

      {cartItems.length === 0 ? (
        <div className="text-center">Your cart is empty! You can go to home page to view restaurants.</div>
      ) : (
        <div className="flex flex-col items-center">
          <button onClick={handleClearItem} className="border px-3 py-2 rounded-lg bg-gray-800 text-white font-medium">Clear Cart</button>
          <div className="w-7/12 border-b mt-5 border-gray-200 px-10 shadow-md">
            {cartItems.map((item) => (
              <ResMenuCategoryList
                key={item.card.info.id}
                data={item}
                showAddButton={false}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
