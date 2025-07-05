import React from 'react'

const InvoicesTable = ({lightTheme}) => {
  return (
    <div className={` overflow-x-auto ${lightTheme === 'light'? 'bg-white border ': "bg-[#1F293780]"} p-6 rounded-lg shadow`}>
        <div className=" mb-4">
          <h2 className={`text-xl ${lightTheme === 'light'? '' : 'text-white'} font-semibold`}>Invoice Lists</h2>
          <p  className={` ${lightTheme === 'light'? 'text-gray-500' : 'text-[#9CA3AF]'}`}>The invoices list which had been created for last 30 days</p>
        </div>
        <div>
        <table className="w-full min-w-[600px] overflow-x-auto">
          <thead>
            <tr className={`border-b ${lightTheme === 'light'? '' : 'border-gray-700 text-[#9CA3AF]'}`}>
              <th className="py-2">Invoice Number</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: "#INV385408", name: "Brooklyn Simmons", date: "Nov 12, 2023 - 18:42 PM", status: "Completed", total: "$2,300.00" },
              { id: "#INV774142", name: "Darrell Steward", date: "Nov 24, 2023 - 12:95 PM", status: "Pending", total: "$360.00" },
              { id: "#INV493629", name: "Kathryn Murphy", date: "Nov 5, 2023 - 5:32 AM", status: "Overdue", total: "$1,500.00" },
              { id: "#INV305794", name: "Leslie Alexander", date: "Nov 8, 2023 - 4:57 AM", status: "Completed", total: "$80.00" },
              { id: "#INV612586", name: "Darlene Robertson", date: "Nov 27, 2023 - 14:29 PM", status: "Overdue", total: "$180.00" },
              { id: "#INV13208", name: "Ronald Richards", date: "Nov 30, 2023 - 19:29 PM", status: "Pending", total: "$594.00" },
            ].map((invoice, index) => (
              <tr key={index} className={`border-b ${lightTheme=== 'light'? 'text-gray-700' : 'text-[#9CA3AF] border-gray-700'} `}>
                <td className="py-2">{invoice.id}</td>
                <td>{invoice.name}</td>
                <td>{invoice.date}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      invoice.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : invoice.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {invoice.status}
                  </span>
                </td>
                <td>{invoice.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
  )
}

export default InvoicesTable