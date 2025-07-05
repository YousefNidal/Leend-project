import React, { useContext } from 'react'
import './Card.css'
import { LeyndContext } from '../../context/LeyndContext'

const Card = ({img, title, description}) => {

  const {lightTheme} = useContext(LeyndContext)
  return (
    <div className={`card bg-[#1F293780] p-6 rounded-lg max-w-[100%] ${lightTheme === 'light' ? 'light-card' : ''}  `}>
            <img src={img} alt="" className="w-8 h-8  " />
            <h3 className={`card-title text-lg sm:text-xl font-bold mb-2 ${lightTheme === 'light' ? 'text-black' : 'text-white'}`}>{title}</h3>
            <p className='text-[#9CA3AF] text-sm sm:text-base'>{description}</p>
          </div>
  )
}

export default Card