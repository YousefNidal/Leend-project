import React from 'react'

const Table = ({lightTheme, t}) => {
  return (
    <div className={`rounded-xl overflow-x-auto  mx-8 ${lightTheme === 'light'? 'shadow-lg' : 'bg-[#1F293780]'}`} >
        <h3 className={`font-bold text-lg sm:text-xl  py-7 px-7 border-b  ${lightTheme === 'light'?"text-[#1F2937] border-[#e1e5eb]" : "text-white border-[#374151]"} `}>{t('Recent Events & Logs')}</h3>
    <div className='px-7 mt-4 mb-6'>
    <table className="w-full min-w-[600px] overflow-x-auto">
      <thead>
        <tr className={`text-base  font-semibold tracking-wide text-left   border-b  ${lightTheme === 'light'? "border-[#e1e5eb] text-[#4B5563]" : "border-[#374151] text-[#9CA3AF]"} `}>
          <th className="py-2"> {t('Event')} </th>
          <th className="py-2">{t('Status')}</th>
          <th className="py-2">{t('Time')}</th>
          <th className="py-2">{t('Details')}</th>
        </tr>
      </thead>
      <tbody className={` ${lightTheme === 'light'? 'text-[#4B5563]' : 'text-[#9CA3AF]'} `}>
        <tr className={` border-b  ${lightTheme === 'light'? "hover:bg-gray-100 border-[#e1e5eb]" : "hover:bg-gray-800 border-[#374151]"}`}>
          <td className="">
            <div className="flex items-center text-sm">
              <div className={`relative   ${lightTheme === 'light'? "text-[#4B5563]" : "text-[#9CA3AF]"} mr-3 rounded-full md:block`}>
                <p>Payment Received</p>
              </div>
             
            </div>
          </td>
          <td className=" py-5 text-sm ">
                <span className='text-[#10B981] bg-[#10B98133] rounded-full py-1 px-2 '>Success</span>
          </td>
          <td className=" py-5 text-sm">
            <span className="px-2 py-1  "> 2 minutes ago </span>
          </td>
          <td className=" py-5 text-sm ">$89.99 from customer #45872</td>
        </tr>
        <tr className={` border-b  ${lightTheme === 'light'? "hover:bg-gray-100 border-[#e1e5eb]" : "hover:bg-gray-800 border-[#374151]"}`}>
          <td className="">
            <div className="flex items-center text-sm">
              <div className={`relative  ${lightTheme === 'light'? "text-[#4B5563]" : "text-[#9CA3AF]"}   mr-3 rounded-full md:block`}>
                <p>New Invoice Created</p>
              </div>
             
            </div>
          </td>
          <td className=" py-5 text-sm ">
                <span className='text-[#3B82F6] bg-[#3B82F633] rounded-full py-1 px-2 '>Created</span>
          </td>
          <td className=" py-5 text-sm">
            <span className="px-2 py-1  "> 1 hour ago </span>
          </td>
          <td className=" py-5 text-sm ">Invoice #INV-2025-089 for customer #67234</td>
        </tr>
        <tr className={` border-b  ${lightTheme === 'light'? "hover:bg-gray-100 border-[#e1e5eb]" : "hover:bg-gray-800 border-[#374151]"}`}>
          <td className="">
            <div className="flex items-center text-sm">
              <div className={`relative  ${lightTheme === 'light'? "text-[#4B5563]" : "text-[#9CA3AF]"}   mr-3 rounded-full md:block`}>
                <p>Payment Failed</p>
              </div>
             
            </div>
          </td>
          <td className=" py-5 text-sm ">
                <span className='text-[#EF4444] bg-[#EF444433] rounded-full py-1 px-2 '>Failed</span>
          </td>
          <td className=" py-5 text-sm">
            <span className="px-2 py-1  "> 3 hours ago </span>
          </td>
          <td className=" py-5 text-sm ">Invalid card - customer #78932</td>
        </tr>
        
        
      </tbody>
    </table>
    </div>
  </div>
  )
}

export default Table