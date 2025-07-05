import { useState, useContext } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { LeyndContext } from '../../context/LeyndContext';
import './EasyIntegration.css'
import { useTranslation } from 'react-i18next';
import CreditCard from '../CreditCard/creditCard';

const EasyIntegration = () => {

  const { t} = useTranslation()

  const {lightTheme} = useContext(LeyndContext)



  return (
    <div className={`easy-integration  py-[96px] px-[36px] md:px-[76px] lg:px-[96px] flex items-center justify-between gap-12 flex-col lg:flex-row ${lightTheme === 'light'? 'bg-[#FFFFFF80] text-black' : 'bg-[#111827] text-white'}`}>
      <div className="w-full">
        <h2 className="text-xl sm:text-3xl font-bold ">{t('Easy Integration')}</h2>
        <p className={`mt-[26px] mb-[35px]  text-sm sm:text-base ${lightTheme === 'light'? 'text-[#4B5563]' : 'text-[#D1D5DB]'} `}>{t('Implement')}</p>
        <div className={` p-4 rounded ${lightTheme === 'light'? 'bg-[#FFFFFFB2]' : 'bg-[#1F2937]'}`}>
          <code className={`${lightTheme === 'light' ? 'text-[#2563EB]' : 'text-[#818CF8]'}`}>&lt;iframe src="https://leynd.is/pay/[token]" /&gt;</code>
        </div>
      </div>
      <div className={`payment  p-6 rounded-lg w-[100%] md:w-[70%] ${lightTheme === 'light'? 'bg-[#FFFFFFB2] payment-light ':'bg-gray-800' }`}>
        <div className="flex justify-between items-center ">
          <div className="flex items-center">
            <img src={lightTheme === 'light'? assets.ProtectionBlue :assets.protection} alt="" className=" h-4 w-[14px] mr-2" />
            <p>{t('Secure Payment')}</p>
          </div>
          <div className='w-[32px] h-[32px] rounded-full'>
            <img className='w-full h-full rounded-full' src={assets.profile} alt="" />
          </div>
        </div>
     <CreditCard />
      </div>
    </div>
  )
}

export default EasyIntegration