import React from "react";
import plus from "../assets/plus.svg";
import mag from "../assets/mag.svg";
import filter from "../assets/filter.svg";
import refresh from "../assets/refresh.png";
import printer from "../assets/printer.png";
import banner from "../assets/people-banner.png";

const Banner = () => {
  return (
    <div className="w-full bg-[#5D5FEF] h-[25%]  rounded-lg flex justify-between">
      <div className="space-y-4 ml-4 w-[40%]  h-full text-white">
        <p className="text-[2rem]">Customer</p>
        <p>
          On this menu you will be able to create, edit, and also delete the customer. Also you can
          manage it easily.
        </p>
        <div className="absolute z-50 left-[22%] ">
          <div className="flex   w-[180%] z-50 gap-4">
            <button className="rounded-lg bg-[#FFFFFF33] flex items-center justify-around flex w-[20%] h-12">
              <div className="flex justify-around gap-2">
                <img className="w-4" src={plus} alt="/" />
                Add New Customer
              </div>
            </button>
            <div className="bg-white w-[40%] rounded-lg h-12  flex align-middle p-3">
              <div className="flex  w-full  items-center">
                <img className="w-7" src={mag} alt="/" />
                <input
                  className="border-none w-[80%] text-[#D1D0D3] focus:ring-0 focus:border-[#D1D0D3]"
                  type="search"
                  placeholder="Search Customer"
                />
                <button className="bg-[#5D5FEF] w-[20%] rounded-lg h-9">Search</button>
              </div>
            </div>
            <button className="bg-[#FFFFFF33] w-[7%] rounded-lg h-12 flex items-center  justify-center gap-1">
              <img width={15} src={filter} alt="/" />
              Filter
            </button>
            <button className="bg-[#FFFFFF33] w-[8%] rounded-lg h-12 flex items-center  justify-center gap-1">
              <img width={15} src={refresh} alt="/" />
              Refresh
            </button>
            <button className="bg-[#FFFFFF33] w-[4%] rounded-lg h-12 flex items-center  justify-center gap-1">
              <img width={15} src={printer} alt="/" />
            </button>
          </div>
        </div>
      </div>
      <img className=" rounded-r-lg " src={banner} alt="" />
    </div>
  );
};

export default Banner;
