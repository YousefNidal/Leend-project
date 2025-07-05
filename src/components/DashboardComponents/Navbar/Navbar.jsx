import React, { useContext, useState } from "react";
import { assets } from "../../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { LeyndContext } from "../../../context/LeyndContext";

const Navbar = () => {
  const {lightTheme} = useContext(LeyndContext)
  const [nav, setNav] = useState("main");
  return (
    <>
      <div className="fixed lg:sticky flex flex-col top-0 left-0 min-w-14  md:min-w-64 bg-[#1F2937] border-r border-[#374151] h-screen text-white transition-all duration-300 border-none z-10 ">
        <div className="overflow-y-auto overflow-x-hidden  flex-grow">
          <h1 className="text-2xl text-white font-bold ml-4 mt-5">
            <p className="hidden md:block"> Leynd <span className="text-sm text-[#9CA3AF]">/leɪnd/</span></p> 
          </h1>
          <ul className="hidden flex-col pt-11 space-y-1 mx-4 md:flex">
            <li>
              <Link
                to={"/dashboard"}
                onClick={() => setNav("main")}
                className={`relative hover:bg-[#4F46E5] flex flex-row items-center rounded-lg   h-11 focus:outline-none  text-white-600 hover:text-white-800 border-l-4 border-transparent  pr-6 ${
                  nav === "main" ? "bg-[#4F46E5]" : ""
                }`}
              >
                <span className="inline-flex justify-center items-center ml-2">
                  <img src={assets.ChartWhite} alt="" />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate hidden md:block">
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"/dashboard/payments"}
                onClick={() => setNav("payments")}
                className={`relative hover:bg-[#4F46E5] flex flex-row items-center h-11  text-white-600 hover:text-white-800 border-l-4 border-transparent rounded-lg pr-6 ${
                  nav === "payments" ? "bg-[#4F46E5]" : ""
                } `}
              >
                <span className="inline-flex justify-center items-center ml-2">
                  <img src={assets.VisaWhite} alt="" />{" "}
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Payments
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"/dashboard/balance"}
                onClick={() => setNav("balances")}
                className={`relative hover:bg-[#4F46E5] flex flex-row items-center h-11 focus:outline-none rounded-lg text-white-600 hover:text-white-800 border-l-4 border-transparent  pr-6 ${
                  nav === "balances" ? "bg-[#4F46E5]" : ""
                }`}
              >
                <span className="inline-flex justify-center items-center ml-2">
                  <img src={assets.BalanceWhite} alt="" />{" "}
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Balances
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"/dashboard/customers"}
                onClick={() => setNav("customers")}
                className={`relative hover:bg-[#4F46E5] flex flex-row items-center h-11 focus:outline-none  text-white-600 hover:text-white-800 border-l-4 border-transparent rounded-lg pr-6 ${
                  nav === "customers" ? "bg-[#4F46E5]" : ""
                }`}
              >
                <span className="inline-flex justify-center items-center ml-2">
                  <img src={assets.CustomersWhite} alt="" />{" "}
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Customers
                </span>
              </Link>
            </li>

            <li>
              <Link
                to={"/dashboard/invoices"}
                onClick={() => setNav("invoices")}
                className={`relative hover:bg-[#4F46E5] flex flex-row items-center h-11 focus:outline-none rounded-lg text-white-600 hover:text-white-800 border-l-4 border-transparent  pr-6 ${
                  nav === "invoices" ? "bg-[#4F46E5]" : ""
                } `}
              >
                <span className="inline-flex justify-center items-center ml-2">
                  <img src={assets.InvoicesWhite} alt="" />{" "}
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Invoices
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"/dashboard/settings"}
                onClick={() => setNav("sittings")}
                className={`relative hover:bg-[#4F46E5] flex flex-row items-center h-11 focus:outline-none  text-white-600 hover:text-white-800 border-l-4 border-transparent rounded-lg pr-6 ${
                  nav === "sittings" ? "bg-[#4F46E5]" : ""
                }`}
              >
                <span className="inline-flex justify-center items-center ml-2">
                  <img src={assets.SettingsWhite} alt="" />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Settings
                </span>
              </Link>
            </li>
          </ul>
          <ul className="md:hidden">
          <li className="p-1 px-2">
              <Link
                to={"/dashboard"}
                onClick={() => setNav("main")}
                className={`relative hover:bg-[#4F46E5] flex  justify-center items-center rounded-lg   h-11 focus:outline-none  text-white-600 hover:text-white-800 border-l-4 border-transparent   ${
                  nav === "main" ? "bg-[#4F46E5]" : ""
                }`}
              >
                <span className="inline-flex justify-center items-center mr-[2px] ">
                  <img src={assets.ChartWhite} className="h-[16px]" alt="" />
                </span>
                
              </Link>
            </li>
            <li className="p-1 px-2">
              <Link
                to={"/dashboard/payments"}
                onClick={() => setNav("payments")}
                className={`relative hover:bg-[#4F46E5] flex mr-[1px] justify-center items-center h-11  text-white-600 hover:text-white-800 border-l-4 border-transparent rounded-lg  ${
                  nav === "payments" ? "bg-[#4F46E5]" : ""
                } `}
              >
                <span className="inline-flex justify-center items-center mr-[2px] ">
                  <img src={assets.VisaWhite} className="h-[16px]" alt="" />{" "}
                </span>
               
              </Link>
            </li>
            <li className="p-1 px-2">
              <Link
                to={"/dashboard/balance"}
                onClick={() => setNav("balances")}
                className={`relative hover:bg-[#4F46E5] mr-[1px] flex  justify-center items-center h-11 focus:outline-none rounded-lg text-white-600 hover:text-white-800 border-l-4 border-transparent   ${
                  nav === "balances" ? "bg-[#4F46E5]" : ""
                }`}
              >
                <span className="inline-flex justify-center items-center mr-[2px]">
                  <img src={assets.BalanceWhite} className="h-[16px]" alt="" />{" "}
                </span>
                
              </Link>
            </li>
            <li className="p-1 px-2">
              <Link
                to={"/dashboard/customers"}
                onClick={() => setNav("customers")}
                className={`relative hover:bg-[#4F46E5] mr-[1px] flex justify-center items-center h-11 focus:outline-none  text-white-600 hover:text-white-800 border-l-4 border-transparent rounded-lg  ${
                  nav === "customers" ? "bg-[#4F46E5]" : ""
                }`}
              >
                <span className="inline-flex justify-center items-center mr-[2px]">
                  <img src={assets.CustomersWhite} className="h-[16px]" alt="" />{" "}
                </span>
               
              </Link>
            </li>

            <li className="p-1 px-2">
              <Link
                to={"/dashboard/invoices"}
                onClick={() => setNav("invoices")}
                className={`relative hover:bg-[#4F46E5] mr-[1px] flex h-11  justify-center items-center focus:outline-none rounded-lg text-white-600 hover:text-white-800 border-l-4 border-transparent   ${
                  nav === "invoices" ? "bg-[#4F46E5]" : ""
                } `}
              >
                <span className="inline-flex justify-center items-center mr-[2px] ">
                  <img src={assets.InvoicesWhite} className="h-[16px]" alt="" />{" "}
                </span>
                
              </Link>
            </li>
            <li className="p-1 px-2">
              <Link
                to={"/dashboard/sittings"}
                onClick={() => setNav("sittings")}
                className={`relative hover:bg-[#4F46E5] flex items-center mr-[1px] justify-center h-11 focus:outline-none  text-white-600 hover:text-white-800 border-l-4 border-transparent rounded-lg  ${
                  nav === "sittings" ? "bg-[#4F46E5]" : ""
                }`}
              >
                <span className="inline-flex justify-center items-center mr-[2px] ">
                  <img src={assets.SettingsWhite} className="h-[16px]" alt="" />
                </span>
                
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
