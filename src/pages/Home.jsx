import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import { Categories } from "./Category";
import { food_items } from "../food";
import Card from "../components/Card";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import Cart2 from "../components/Cart2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Home() {
  let { cate, setCate, input, showCart, setShowCart, id } =
    useContext(dataContext);
  function filter(category) {
    if (category === "all") {
      setCate(food_items);
    } else {
      let newItem = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(newItem);
    }
  }

  const items = useSelector((state) => state.cart);

  const totalPrize = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  let deliveryFee = 20;
  let taxes = (totalPrize * 0.5) / 100;
  let grandTotal = Math.floor(totalPrize + deliveryFee + taxes);

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />

      {!input && (
        <div className="flex flex-wrap justify-center items-center gap-5 w-[100%]">
          {Categories.map((item) => {
            return (
              <div
                className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-md shadow-md hover:bg-green-100 cursor-pointer transition-all duration-200"
                onClick={() => filter(item.name.toLowerCase())}
              >
                {item.image}
                {item.name}
              </div>
            );
          })}
        </div>
      )}
      <div className="w-full flex flex-wrap gap-[20px] px-5 justify-center items-center pt-8 pb-5">
        {cate.length>1? cate.map((item) => (
          <Card
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            type={item.food_type}
            id={item.id}
          />
        )): <div className="text-3xl text-green-400 font-semibold">No Dish Found</div> }
        
      </div>
      {/* // Cart */}
      <div
        className={`w-[100%] md:w-[40vw] h-screen fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto ${
          showCart ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <header className="w-[100%] flex justify-between items-center">
          <span className="text-green-400 text-[18px] font-semibold">
            Order items
          </span>
          <RxCross2
            className=" w-[30px] h-[30px] text-green-400 text-[18px] font-semibold cursor-pointer hover:text-gray-600"
            onClick={() => setShowCart(false)}
          />
        </header>

        {/* <Cart2 /> */}
      
        {items.length>0 ?  <>
          <div className="w-full mt-8 flex flex-col gap-6">
            {items.map((item) => (
              <Cart2
                name={item.name}
                image={item.image}
                price={item.price}
                id={item.id}
                qty={item.qty}
              />
            ))}
          </div>

          <div className="w-full border-t-2 border-gray-400 mt-7 p-8 ">
            <div className="w-full flex justify-between items-center">
              <span className="text-lg text-gray-600 font-semibold ">
                SubTotal:{" "}
              </span>
              <span className="text-green-400 font-semibold text-lg">
                Rs {totalPrize}/-
              </span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="text-lg text-gray-600 font-semibold ">
                Delivery Charge:{" "}
              </span>
              <span className="text-green-400 font-semibold text-lg">
                Rs {deliveryFee}/-
              </span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="text-lg text-gray-600 font-semibold ">
                Taxes:{" "}
              </span>
              <span className="text-green-400 font-semibold text-lg">
                Rs {taxes}/-
              </span>
            </div>
          </div>

          <div className="w-full border-t-2 border-gray-400 p-4">
            <div className="w-full flex justify-between items-center">
              <span className="text-2xl text-gray-600 font-semibold ">
                Total:{" "}
              </span>
              <span className="text-green-400 font-semibold text-2xl">
                Rs {grandTotal}/-
              </span>
            </div>
          </div>

          <button className="w-[80%] p-3 bg-green-500 rounded-md r:bg-green-400 cursor-pointer transition-all  shadow-md text-white" onClick={()=>{toast.success("Order placed Sucessfully")}}>
            Place Order
          </button>
        </> : <div className="text-xl text-green-400 font-semibold mt-8">Empty cart</div> }
       
      </div>
    </div>
  );
}

export default Home;
