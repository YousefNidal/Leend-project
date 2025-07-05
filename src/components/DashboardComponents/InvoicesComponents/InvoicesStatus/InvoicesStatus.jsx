


import React from 'react'
import { assets } from '../../../../assets/frontend_assets/assets'

const InvoicesStatus = ({lightTheme}) => {
  return (
    <div className={` p-4 my-8 ${lightTheme === 'light'? 'bg-white border ': "bg-[#1F293780]"} rounded-lg`}> 
      <div className={`grid  grid-cols-2 lg:grid-cols-4 gap-4 my-6  `}>
        {[
          { title: "Drafts", amount: "$28,250", icon: lightTheme === 'light'? assets.AirbnbBlack : assets.BalanceGreen },
          { title: "Completed Payment", amount: "$59,325", icon: lightTheme === 'light'? assets.BankGray : assets.downArrow  },
          { title: "Awaiting Payment", amount: "$59,325", icon: lightTheme === 'light'? assets.BannerBlack : assets.racketBlue },
          { title: "Overdue", amount: "$82,430", icon: lightTheme === 'light'? assets.BitcoinBlack : assets.King }
        ].map((stat, index) => (
          <div key={index} className={` ${lightTheme === 'light'? 'bg-white' : ''} ${stat.title === 'Overdue'? '' : `${lightTheme === 'light'? 'border-r' : 'border-r border-gray-700'}`} p-4  flex items-center`}>
            <div className={` ${lightTheme==='light'? 'border' : 'border border-gray-700'} rounded-full w-14 h-14 flex items-center justify-center mr-4`}  >
            <img src={stat.icon} alt={stat.title} className="" />
            </div>
            <div>
              <h3 className="text-gray-500 text-sm">{stat.title}</h3>
              <p className={`text-xl font-semibold ${lightTheme === 'light'? 'text-[#1F2937]' : 'text-white'}`}>{stat.amount}</p>
            </div>
          </div>
        ))}
          
      </div>
      <div className='w-full'>
            <div className={`flex items-center justify-between border rounded-lg ${lightTheme === 'light'? 'bg-gray-100' :'border-gray-700 bg-slate-800'} py-2 px-2`}>
              <p className={`${lightTheme === 'light'? 'text-[#1F2937]' : 'text-white'}`}>
                <span className=' text-green-400 '>18.2%</span>
                Higher this is the result of data above
              </p>
              <a className={`flex gap-2 cursor-pointer ${lightTheme ==='light'? 'text-[#1F2937]' : 'text-[#9CA3AF]'}`}>
                View details
                <img src={lightTheme === 'light'? assets.DownArrowBlack : assets.downArrow} alt="" className=' -rotate-90  w-3' />
              </a>
            </div>
          </div>
      </div>
  )
}

export default InvoicesStatus