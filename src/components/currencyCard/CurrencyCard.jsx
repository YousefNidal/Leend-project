import React, { useContext } from 'react'
import { LeyndContext } from '../../context/LeyndContext'

const CurrencyCard = ({shortcut, name}) => {
  const {lightTheme} = useContext(LeyndContext)
  return (
    <li className={`py-3 flex items-center justify-between   rounded px-3 ${lightTheme === 'light'? 'bg-[#c3d9ff]' : 'bg-[#37415180]'} `}>
                <p className={` text-sm md:text-base ${lightTheme === 'light'? 'text-[#1F2937]' : 'text-white'}`}>{shortcut}</p>
                <p className={` text-[10px] md:text-xs ${lightTheme === 'light'? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>{name}</p>
     </li>
  )
}

export default CurrencyCard