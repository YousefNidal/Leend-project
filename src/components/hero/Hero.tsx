import React, { useContext } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import './Hero.css'
import { Trans, useTranslation } from 'react-i18next'
import { LeyndContext } from '../../context/LeyndContext'

const Hero = () => {
   const {lightTheme} = useContext(LeyndContext)

  const { t} = useTranslation()
  return (
    <>
   
        <div className={`hero text-white px-[36px] md:px-[76px] lg:px-[96px] flex flex-col justify-center border border-[#1F2937] relative  ${lightTheme === 'light'? 'light-hero ' : ''}  `}>
          {lightTheme === 'light' ? <img src={assets.bgLight} className={`  absolute left-0 top-0 w-full h-full ${lightTheme === 'light'? 'bgLight' : 'bg'} `} alt=""  /> : 
          <img src={assets.background} className=' bg absolute left-0 top-0 w-full h-full ' alt=""  />}
          <h1 className={`text-2xl sm:text-5xl font-bold m-0 py-2 z-10 ${lightTheme === 'light'? '  bg-clip-text text-transparent bg-gradient-to-r from-[#2563eb] to-[#7c3aed]' : ''}`}>
            <Trans i18nKey='Privacy' className=''>
            Privacy-First Payment <br /> Processing
            </Trans>
          </h1>
          <p className={`z-10 mb-[35px] mt-[20px]  text-sm sm:text-xl ${lightTheme === 'light'? 'text-[#4B5563]' : 'text-[#D1D5DB]'}`}>{t('Accept')}</p>
          <div className="space-x-4 z-10">
            <button className={` text-white px-6 py-3 rounded-[8px] text-xs sm:text-base ${lightTheme === 'light'? 'bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]  ' : 'bg-[#4F46E5] hover:bg-[#352fa8]'}`}>{t('Get Started')}</button>
            <button className={`bg-transparent border   px-6 py-3 rounded-[8px] text-xs sm:text-base ${lightTheme === 'light'? 'border-[#FFFFFF33] text-[#2563EB] bg-white ' : 'border-[#374151] text-white hover:bg-[#374151]'}`}>{t('Learn More')}</button>
          </div>
        </div>
    </>
  )
}

export default Hero