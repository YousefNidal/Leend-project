import React, { useContext, useState } from "react";
import { LeyndContext } from "../../context/LeyndContext";

const Select = ({ options, onSelect, width }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const [selectedOption, setSelectedOption] = useState(options[0]?.label || ""); // State to store the selected option
  const {lightTheme} = useContext(LeyndContext)
  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle option selection
  const handleOptionClick = (value, label) => {
    setSelectedOption(label); // Update the selected option
    setIsOpen(false); // Close the dropdown
    onSelect(value); // Notify parent component of the selected value
  };


  return (
    <div className={`relative ${width} ${lightTheme === ' light'?'':""}`}>
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className={`w-full p-2 outline-none border-none focus:border-none px-2  border rounded-lg  ${lightTheme === 'light'? 'text-[#1F2937] border-[#323841] shadow bg-[#FFFFFF80]' : 'bg-[#374151] text-white border-[#4B5563]'} text-left focus:outline-none   flex items-center justify-between`}
      >
        <span>{selectedOption}</span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={`absolute w-full mt-1  ${lightTheme==='light'? 'bg-[#FFFFFF]' : 'bg-[#374151] border border-[#4B5563]'} rounded-lg shadow-lg z-10`}>
          <ul className="py-1">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleOptionClick(option.value, option.label)}
                className={`px-4 py-2  ${lightTheme==='light'? 'text-[#1F2937] hover:bg-[#f1f2f3]' : 'text-white hover:bg-[#4B5563]'} cursor-pointer rounded-lg transition-colors duration-200`}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;