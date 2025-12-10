import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";

function Nav() {
  let { input, setInput, cate, setCate, showCart, setShowCart, id } = useContext(dataContext);

  useEffect(() => {
    let newList = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setCate(newList);
  }, [input]);

  const item = useSelector(state=>state.cart)
  
  return (
    <nav className="w-full h-[100px] flex justify-between items-center px-5  md:px-8">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-lg">
        <MdFastfood className="w-[30px] h-[30px] text-green-600" />
      </div>

      <form
        className="w-[45%] md:w-[70%] h-[60px] bg-white flex items-center px-5 gap-5 md:gap-10 rounded-md shadow-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoIosSearch className="w-[40px] md:w-[20px] h-[40px] md:h-[20px]text-green-500" />
        <input
          type="text"
          placeholder="Search item..."
          className="w-[100%] outline-none text-[16px] md:text-[20px]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>

      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-lg relative cursor-pointer" onClick={()=> {setShowCart(true)}}>
        <span className="absolute top-0 right-2 font-bold text-green-500">
          {item.length}
        </span>
        <FaShoppingCart className="w-[30px] h-[30px] text-green-600" />
      </div>
    </nav>
  );
}

export default Nav;
