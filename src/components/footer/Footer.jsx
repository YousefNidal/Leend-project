import React, { useContext } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { LeyndContext } from '../../context/LeyndContext'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'


const Footer = () => {

  const {lightTheme} = useContext(LeyndContext)
  const { t} = useTranslation()
  return (
    <div className={`footer   border-t  text-white px-[36px] md:px-[76px] lg:px-[96px] py-[48px] flex flex-col items-center md:items-start md:grid  md:grid-cols-2 lg:grid-cols-4 gap-8 ${lightTheme === 'light' ? 'border-[#FFFFFF33] bg-gradient-to-r from-[#EFF6FF4D] to-[#FFFFFFCC] ' : 'bg-[#111827] border-[#1F2937]'}`}>
  <div className='w-full md:w-auto text-center md:text-start'>
    <h3 className={`text-lg sm:text-xl font-bold mb-4 ${lightTheme === 'light' ? 'tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600' : 'text-white'}`}>Leynd</h3>
    <p className={` text-sm sm:text-base px-7 md:px-0 ${lightTheme === "light" ? "text-[#4B5563]" : "text-[#9CA3AF]"} `}>{t('We believe')}</p>
  </div>
  <div className='w-full md:w-auto text-center md:text-start'>
    <h3 className={`text-lg sm:text-xl font-bold mb-4 ${lightTheme === 'light' ? 'text-[#1F2937]' : 'text-white'}`}>{t('Mirrors')}</h3>
    <a href="" className={`block mb-2  text-sm sm:text-base ${lightTheme === "light" ? "text-[#4B5563]" : "text-[#9CA3AF]"}`}>leynd.money</a>
    <a href="" className={`block mb-2  text-sm sm:text-base ${lightTheme === "light" ? "text-[#4B5563]" : "text-[#9CA3AF]"}`}>leynd.cash</a>
    <a href="" className={`block mb-2  text-sm sm:text-base ${lightTheme === "light" ? "text-[#4B5563]" : "text-[#9CA3AF]"}`}>leynd.ly</a>
  </div>
  <div className='w-full md:w-auto text-center md:text-start'>
    <h3 className={`text-lg sm:text-xl font-bold mb-4 ${lightTheme === 'light' ? 'text-[#1F2937]' : 'text-white'}`}>{t('Contact')}</h3>
    <p className={`mb-2  text-sm sm:text-base ${lightTheme === "light" ? "text-[#4B5563]" : "text-[#9CA3AF]"}`}>Leynd ehf.</p>
    <p className={`mb-2  text-sm sm:text-base ${lightTheme === "light" ? "text-[#4B5563]" : "text-[#9CA3AF]"}`}>Tryggvagata 13,</p>
    <p className={`mb-2  text-sm sm:text-base ${lightTheme === "light" ? "text-[#4B5563]" : "text-[#9CA3AF]"}`}>101 Reykjavík, Iceland</p>
    <a href="mailto:info@leynd.is" className={` text-sm sm:text-base ${lightTheme === "light" ? "text-[#4B5563]" : "text-[#9CA3AF]"}`} >info@leynd.is</a>
  </div>
  <div className='w-full md:w-auto text-center md:text-start'>
    <h3 className={`text-lg sm:text-xl font-bold mb-4 text-nowrap ${lightTheme === 'light' ? 'text-[#1F2937]' : 'text-white'}`}>{t('Accepted Methods')}</h3>
    <div className="payment-methods flex justify-center md:justify-start space-x-3 mb-4">
      <img src={lightTheme === 'light'? assets.VisaFooterGray :assets.visaFooter} alt="" className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px]" />
      <img src={lightTheme === 'light'? assets.MasterCardFooterGray :assets.mastercardFooter} alt="" className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px]" />
      <img src={lightTheme === 'light'? assets.BitcoinFooterGray :assets.bitcoinFooter} alt="" className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px]" />
      <img src={lightTheme === 'light'? assets.EithiriumFooterGray :assets.etheriumFooter} alt="" className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px]" />
      <img src={lightTheme === 'light'? assets.XmsGray :assets.XMS} alt="" className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px]" />
      <img src={lightTheme === 'light'? assets.LtcGray :assets.LTC} alt="" className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px]" />
    </div>
    <div className={` py-2 px-[10px] rounded-[8px] inline-flex items-center ${lightTheme === 'light' ? 'bg-[#FFFFFF80] shadow-md' : 'bg-[#4F46E5] hover:bg-[#352fa8]'}`}>
      <Link to={'/payment-methods'} className={`${lightTheme === 'light' ? 'text-[#2563EB]' : 'text-white'}  text-nowrap text-sm sm:text-base`}>{t('Show All Payment Methods')}</Link>
    </div>
  </div>
</div>
  )
}

export default Footer