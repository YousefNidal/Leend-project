import React, { useState } from 'react';

const PaymentPopup = ({ onClose }) => {
  const [denominateInFiat, setDenominateInFiat] = useState(false);
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ denominateInFiat, amount, name, description, email, paymentMethod });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[40rem]">
        <h2 className="text-xl font-bold mb-4">New Payment</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Do you want to denominate it in fiat?</label>
            <div>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  value="No"
                  checked={!denominateInFiat}
                  onChange={() => setDenominateInFiat(false)}
                />
                <span className="ml-2">No</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="Yes"
                  checked={denominateInFiat}
                  onChange={() => setDenominateInFiat(true)}
                />
                <span className="ml-2">Yes</span>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Amount to be received:</label>
            <input
              type="text"
              className="w-full p-2 border rounded bg-slate-100"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name displayed on the widget:</label>
            <input
              type="text"
              className="w-full p-2 border rounded bg-slate-100"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Description:</label>
            <input
              type="text"
              className="w-full p-2 border rounded bg-slate-100"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email for transaction notification:</label>
            <input
              type="email"
              className="w-full p-2 border rounded bg-slate-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Select Payment Methods:</label>
            <select
              className="w-full p-2 border rounded"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="">Select</option>
              <option value="card">Card</option>
              <option value="gift card">Gift Card</option>
              <option value="crypto">Crypto</option>
            </select>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 px-4 py-2 bg-gray-300 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentPopup;