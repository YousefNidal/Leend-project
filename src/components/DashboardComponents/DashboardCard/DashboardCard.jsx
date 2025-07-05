import React, { useContext } from 'react'
import { LeyndContext } from '../../../context/LeyndContext'

const DashboardCard = ({title, img, description}) => {
  const {lightTheme} = useContext(LeyndContext)
  return (
    <div className={` shadow-lg rounded-xl  py-7 px-6 ${lightTheme === 'light'? "" : "bg-[#1F293780]"}  `}>
                <div className='flex items-center justify-between mb-5 text-sm sm:text-base'>
                    <p className={`text-sm sm:text-base  ${lightTheme === 'light' ? '' : 'text-[#9CA3AF]'}`}>{title}</p>
                    <span><img src={img} alt="" /></span>
                </div>
                <p className={`text-xl sm:text-2xl block font-bold  ${lightTheme === 'light' ? 'text-[#1F2937]' : 'text-white'}`}>{description}</p>
              </div>
  )
}

export default DashboardCard