import { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Customer");
  const activeClass =
    "inline-block p-4  text-blue-600 border-b-2 w-[250%]   border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 ";

  const unActiveClass =
    "inline-block p-4 border-b-2 border-transparent  w-[250%] rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";

  return (
    <div className=" ">
      <h1 className=" text-3xl font-semibold my-4">Customer</h1>
      <p className=" text-gray-500 tracking-wide">
        You can manage and organize your customer and other things here
      </p>
      <div className="text-sm  font-medium text-center mt-[-2%]  text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex  flex-wrap justify-end mr-24 -mb-px  gap-36">
          <li>
            <a
              href="#"
              className={activeTab == "Customer" ? activeClass : unActiveClass}
              onClick={() => setActiveTab("Customer")}
            >
              Customer
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeTab == "Promo" ? activeClass : unActiveClass}
              onClick={() => setActiveTab("Promo")}
            >
              Promo
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeTab == " Voucher" ? activeClass : unActiveClass}
              onClick={() => setActiveTab(" Voucher")}
            >
              Voucher
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
