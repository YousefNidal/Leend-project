import React, { useContext } from 'react'
import { LeyndContext } from '../../../../context/LeyndContext'

const ListItem = ({img, name, сommission}) => {
  const {lightTheme} = useContext(LeyndContext)
  return (
    <li className={`flex items-center justify-between   ${lightTheme === 'light'? 'text-[#1F2937]' : 'text-white'} my-6 text-sm sm:text-base`}>
                    <span className='flex items-center gap-3 '>
                        <img src={img} alt="" /> 
                        {name}
                    </span>
                    <span className=''>{сommission}</span>
    </li>
  )
}

export default ListItem