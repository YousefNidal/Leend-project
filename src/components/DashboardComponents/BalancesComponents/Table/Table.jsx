import React from 'react'
import { assets } from '../../../../assets/frontend_assets/assets'

const Table = ({lightTheme, t}) => {
  return (
    <div className={`rounded-xl overflow-x-auto  mx-8 my-8  mb-[150px]  ${lightTheme === 'light'? '' : 'bg-[#1F293780]'} shadow-lg   py-7 px-6`}>

<div className={`flex justify-between border-b ${lightTheme === 'light'? 'border-[#e1e5eb]' : 'border-[#374151]'}`}>
            <h3 className={`font-bold text-lg sm:text-xl ${lightTheme === 'light'? 'text-[#1F2937]' : 'text-white'} py-7 px-7 `}>{t('Withdrawal History')}</h3>
                
</div>

    <div className={`px-7 mt-4 mb-6`}>
    <table className="w-full min-w-[600px] overflow-x-auto">
      <thead>
        <tr className={`text-base  ${lightTheme === 'light'? 'text-[#4B5563] border-[#e1e5eb]' : 'text-[#9CA3AF] border-[#374151]'} font-semibold tracking-wide text-left   border-b  `}>
          <th className="py-2">{t('Date')}</th>
          <th className="py-2">{t('Currency')}</th>
          <th className="py-2">{t('Amount')}</th>
          <th className="py-2">{t('Status')}</th>
          <th className="py-2">{t('Transaction ID')}</th>
          
        </tr>
      </thead>
      <tbody className={` ${lightTheme === 'light'? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`} >
        <tr className={` border-b  ${lightTheme === 'light'? "hover:bg-gray-100 border-[#e1e5eb]" : "hover:bg-gray-800 border-[#374151]"}`}>
          <td className="">
            <div className="flex items-center text-sm">
              <div className="relative    mr-3 rounded-full md:block">
                <p>Jan 15, 2025</p>
              </div>
             
            </div>
          </td>
          <td className=" py-5 text-sm ">
                <span className='flex items-center gap-2'>
                    <img src={lightTheme === 'light'? assets.BitcoinGray : assets.BitcoinWhite} className='w-[14px] h-[14px]' alt="" />
                    Bitcoin
                </span>
          </td>
          <td className=" py-5 text-sm">
            <span className="px-2 py-1  "> 0.25 BTC </span>
          </td>
          <td className=" py-5 text-sm ">
            <span>Completed</span>
          </td>
          <td className=" py-5 text-sm ">
            <span>0x1234...5678</span>
          </td>
         
        </tr>
        <tr className={` border-b  ${lightTheme === 'light'? "hover:bg-gray-100 border-[#e1e5eb]" : "hover:bg-gray-800 border-[#374151]"}`}>
          <td className="">
            <div className="flex items-center text-sm">
              <div className="relative    mr-3 rounded-full md:block">
                <p>Jan 15, 2025</p>
              </div>
             
            </div>
          </td>
          <td className=" py-5 text-sm ">
                <span className='flex items-center gap-2'>
                    <img src={lightTheme === 'light'? assets.BitcoinGray : assets.BitcoinWhite} className='w-[14px] h-[14px]' alt="" />
                    Bitcoin
                </span>
          </td>
          <td className=" py-5 text-sm">
            <span className="px-2 py-1  "> 0.25 BTC </span>
          </td>
          <td className=" py-5 text-sm ">
            <span>Completed</span>
          </td>
          <td className=" py-5 text-sm ">
            <span>0x1234...5678</span>
          </td>
         
        </tr>
        <tr className={` border-b  ${lightTheme === 'light'? "hover:bg-gray-100 border-[#e1e5eb]" : "hover:bg-gray-800 border-[#374151]"}`}>
          <td className="">
            <div className="flex items-center text-sm">
              <div className="relative    mr-3 rounded-full md:block">
                <p>Jan 15, 2025</p>
              </div>
             
            </div>
          </td>
          <td className=" py-5 text-sm ">
                <span className='flex items-center gap-2'>
                    <img src={lightTheme === 'light'? assets.BitcoinGray : assets.BitcoinWhite} className='w-[14px] h-[14px]' alt="" />
                    Bitcoin
                </span>
          </td>
          <td className=" py-5 text-sm">
            <span className="px-2 py-1  "> 0.25 BTC </span>
          </td>
          <td className=" py-5 text-sm ">
            <span>Completed</span>
          </td>
          <td className=" py-5 text-sm ">
            <span>0x1234...5678</span>
          </td>
         
        </tr>
        
        
        
      </tbody>
    </table>
    </div>
  </div>
  )
}

export default Table