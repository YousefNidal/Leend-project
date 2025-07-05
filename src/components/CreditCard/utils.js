import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const CreditCard = () => {
  const [cardData, setCardData] = useState({
    number: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <Cards
          number={cardData.number.replace(/\s/g, "")}
          expiry={cardData.expiry}
          cvc={cardData.cvc}
          focused={cardData.focus}
        />
        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="number" className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              name="number"
              id="number"
              value={cardData.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Card Number"
              maxLength={getCardType(cardData.number.replace(/\s/g, "")) === "amex" ? 17 : 19} // AMEX has 15 digits, others have 16
            />
          </div>
          <div>
            <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
              Expiry Date
            </label>
            <input
              type="text"
              name="expiry"
              id="expiry"
              value={cardData.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="MM/YY"
              maxLength="5"
            />
          </div>
          <div>
            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
              CVC
            </label>
            <input
              type="text"
              name="cvc"
              id="cvc"
              value={cardData.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="CVC"
              maxLength="4"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreditCard;