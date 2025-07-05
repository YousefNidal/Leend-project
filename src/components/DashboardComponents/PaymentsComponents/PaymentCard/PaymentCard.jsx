import React, { useContext } from 'react'
import { LeyndContext } from '../../../../context/LeyndContext'

const PaymentCard = ({title, img, amount, description}) => {
  const {lightTheme} = useContext(LeyndContext)
  return (

    <div className={` shadow-lg rounded-xl  py-7 px-6 ${lightTheme === 'light'? 'bg-[#FFFFFF80]' : 'bg-[#1F293780]'} `}>
                      <div className='flex items-center justify-between'>
                        <p className={`text-sm sm:text-base ${lightTheme === 'light'? 'text-[#4B5563]' : 'text-[#9CA3AF]'} `}>{title}</p>
                        <span><img src={img}  alt="" /></span>
                      </div>
                      <div className='my-5'>
                        <p className={` text-xl sm:text-2xl font-bold ${lightTheme === 'light' ? 'text-[#1F2937]' : 'text-white' } `}>{amount}</p>
                        <span className={` text-sm ${lightTheme === 'light' ? "text-[#4B5563]" : "text-[#9CA3AF]"}`}>{description}</span>
                      </div>
    </div>


  )
}

export default PaymentCard