import React, { useContext } from 'react'
import { LeyndContext } from '../../context/LeyndContext'

const GiftCardComponent = ({svg, name}) => {
  const {lightTheme} = useContext(LeyndContext)
  return (
    <li className={`rounded-lg  py-[14px] flex gap-3 ${lightTheme === 'light'? 'bg-[#c3d9ff]':'bg-[#1F293780]'} `}>
            <span className={` ms-[16px] flex items-center `}><img src={svg} alt="" /></span>
              <p className={` text-sm md:text-base font-normal ${lightTheme === 'light'? 'text-[#1F2937]':'text-white'}`}>
                {name}
                </p>
            </li>
  )
}

export default GiftCardComponent