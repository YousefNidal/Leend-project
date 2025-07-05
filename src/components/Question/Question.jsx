import React, { useContext } from 'react'
import { LeyndContext } from '../../context/LeyndContext'

const Question = ({question, description}) => {

  const {lightTheme} = useContext(LeyndContext)
  return (
    <div  className="mb-4 px-4 py-4">
              <p className={`text-base font-semibold ${lightTheme === 'light'? 'text-[#1F2937]' : ''}`}>{question}</p>
              <span className={` ${lightTheme === 'light'? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>{description}</span>
    </div>
  )
}

export default Question