import React, { useContext } from 'react'
import { LeyndContext } from '../../context/LeyndContext'
import { useTranslation } from 'react-i18next'

const SupportCard = ({svg, title, description, articles}) => {

  const {lightTheme} = useContext(LeyndContext)
  const {t} = useTranslation()
  return (
    <div  className=" p-6 rounded-lg w-full">
    <img src={svg} className="w-8 h-8 " />
    <h3 className={`text-xl font-bold mb-2 ${lightTheme === 'light'? 'text-[#1F2937]' : ''}`}>{title}</h3>
    <p className={` pt-1 pb-5 ${lightTheme === 'light'? 'text-[#4B5563]':'text-[#9CA3AF]'   }`}>{description}</p>
    <span className={`text-white rounded-full py-1 px-3 ${lightTheme === 'light'? 'bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]' : 'bg-[#374151]'}`}>{articles} {t('articles')}</span>
  </div>
  )
}

export default SupportCard