import { useContext, useState } from "react";
import Cards from "react-credit-cards-2";
import { LeyndContext } from "../../context/LeyndContext";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import './CreditCard.css'
import { assets } from "../../assets/frontend_assets/assets";

const CreditCard = () => {
  const [cardData, setCardData] = useState({
    number: "",
    expiry: "",
    cvc: "",
    focus: "",
  });
  const {lightTheme} = useContext(LeyndContext)

  const getCardType = (number) => {
    if (/^3[47]/.test(number)) {
      return "amex"; // AMEX starts with 34 or 37
    } else if (/^3(0[0-5]|[68])/.test(number)) {
      return "dinersclub"; // Diners Club starts with 300-305, 36, or 38
    } else {
      return "default"; // Default for other card types
    }
  };

  const formatCardNumber = (value) => {
    const clearValue = value.replace(/\s/g, ""); // Remove existing spaces
    const cardType = getCardType(clearValue);

    let nextValue = "";

    switch (cardType) {
      case "amex":
        nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(4, 10)} ${clearValue.slice(10, 15)}`;
        break;
      case "dinersclub":
        nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(4, 10)} ${clearValue.slice(10, 14)}`;
        break;
      default:
        nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(4, 8)} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;
        break;
    }

    return nextValue.trim();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "number") {
      formattedValue = formatCardNumber(value);
    } else if (name === "expiry") {
      formattedValue = value.replace(/\D/g, "").replace(/(\d{2})(\d{0,2})/, "$1/$2");
    } else if (name === "cvc") {
      formattedValue = value.slice(0, 4);
    }

    setCardData((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const handleInputFocus = (e) => {
    setCardData((prev) => ({ ...prev, focus: e.target.name }));
  };

  return (
    <div className="flex flex-col  justify-center ">
      <div className="  rounded-lg  flex gap-4">
       
        <form className="mt-6 space-y-4 w-full">
          <div className="relative w-full">
            <label htmlFor="number" className={`block text-sm font-medium  ${lightTheme === 'light'? 'text-gray-700' : 'text-white'}`}>
              Card Number
            </label>
            <input
              type="text"
              name="number"
              id="number"
              value={cardData.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className={`mt-1  w-full pl-11 px-3 py-2 border border-gray-300  rounded-md shadow-sm focus:outline-none  leading-normal ${lightTheme === 'light'? 'bg-[#FFFFFFB2] shadow-sm placeholder-[#4B5563]' : 'bg-[#37415180] '}`}
              placeholder="Card Number"
              maxLength={getCardType(cardData.number.replace(/\s/g, "")) === "amex" ? 17 : 19} // AMEX has 15 digits, others have 16
            />
             {cardData.number.length > 2? <Cards className={`relative`}
          number={cardData.number.replace(/\s/g, "")}
          expiry={cardData.expiry}
          cvc={cardData.cvc}
          focused={cardData.focus}
        /> : <img className=" absolute top-[55%] left-[8px] w-[30xp] h-[20px] " src={`${lightTheme === 'light'? assets.VisaCardBlack : assets.visaPayment}`} /> }
          </div>
          <div className="flex gap-2 w-full">
          <div className="w-full">
            <label htmlFor="expiry" className={`block text-sm font-medium ${lightTheme==='light'? 'text-gray-700' : 'text-white'}`}>
              Expiry Date
            </label>
            <input
              type="text"
              name="expiry"
              id="expiry"
              value={cardData.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className={`mt-1 block w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  ${lightTheme === 'light'? 'bg-[#FFFFFFB2] shadow-sm placeholder-[#ADAEBC]' : 'bg-[#37415180]'}`}
              placeholder="MM/YY"
              maxLength="5"
            />
          </div>
          <div className="w-full">
            <label htmlFor="cvc" className={`block text-sm font-medium ${lightTheme==='light'? 'text-gray-700' : 'text-white'}`}>
              CVC
            </label>
            <input
              type="text"
              name="cvc"
              id="cvc"
              value={cardData.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" ${lightTheme === 'light'? 'bg-[#FFFFFFB2] shadow-sm placeholder-[#ADAEBC]' : 'bg-[#37415180]'}`}
              placeholder="CVC"
              maxLength="4"
            />
          </div>
          </div>
        </form>
       
      </div>
    </div>
  );
};

export default CreditCard;