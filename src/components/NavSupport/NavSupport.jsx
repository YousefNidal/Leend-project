import React, { useContext } from 'react'
import { assets } from '../../assets/frontend_assets/assets'

import { LeyndContext } from '../../context/LeyndContext'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const NavSupport = () => {
  const { t} = useTranslation()


  const {lightTheme, setLightTheme, language, setLanguage} = useContext(LeyndContext)

  const changeLanguage = () => {
    if(language==='en') {
      window.localStorage.setItem('Language',JSON.stringify('ice'))
      setLanguage('ice')
    } else {
      window.localStorage.setItem('Language',JSON.stringify('en'))
      setLanguage('en')
    }
  }


  const changeTheme = () => {
        if(lightTheme==='dark') {
          window.localStorage.setItem('Theme',JSON.stringify('light'))
          setLightTheme('light')
        } else {
          window.localStorage.setItem('Theme',JSON.stringify('dark'))
          setLightTheme('dark')

        }
  }

 




  return (
    <nav className={`nav flex justify-between items-center py-4 px-[36px] md:px-[76px] lg:px-[96px] bg-[#111827F2]  text-white border-b border-[#1F2937] 
      ${lightTheme == 'light'? 'text-black bg-[#FFFFFF99] border-[#FFFFFF33] shadow-sm ':''}
      ` 
       
    }>
      
       <Link  className='logo flex items-center' to='/'>
       <h4 className={`text-xl sm:text-2xl font-bold ${lightTheme === 'light'? 'tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600' : ''} `}>Leynd</h4>
       <p className=" text-xs sm:text-sm text-[#9CA3AF]">/leɪnd/</p>
       </Link>
      
      <div className="buttons flex items-center space-x-4">
        <div className='relative'>
            <span className='flex items-center absolute left-[10px] top-[10px]'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 6.5C13 7.93437 12.5344 9.25938 11.75 10.3344L15.7063 14.2937C16.0969 14.6844 16.0969 15.3188 15.7063 15.7094C15.3156 16.1 14.6812 16.1 14.2906 15.7094L10.3344 11.75C9.25938 12.5375 7.93437 13 6.5 13C2.90937 13 0 10.0906 0 6.5C0 2.90937 2.90937 0 6.5 0C10.0906 0 13 2.90937 13 6.5ZM6.5 11C7.09095 11 7.67611 10.8836 8.22208 10.6575C8.76804 10.4313 9.26412 10.0998 9.68198 9.68198C10.0998 9.26412 10.4313 8.76804 10.6575 8.22208C10.8836 7.67611 11 7.09095 11 6.5C11 5.90905 10.8836 5.32389 10.6575 4.77792C10.4313 4.23196 10.0998 3.73588 9.68198 3.31802C9.26412 2.90016 8.76804 2.56869 8.22208 2.34254C7.67611 2.1164 7.09095 2 6.5 2C5.90905 2 5.32389 2.1164 4.77792 2.34254C4.23196 2.56869 3.73588 2.90016 3.31802 3.31802C2.90016 3.73588 2.56869 4.23196 2.34254 4.77792C2.1164 5.32389 2 5.90905 2 6.5C2 7.09095 2.1164 7.67611 2.34254 8.22208C2.56869 8.76804 2.90016 9.26412 3.31802 9.68198C3.73588 10.0998 4.23196 10.4313 4.77792 10.6575C5.32389 10.8836 5.90905 11 6.5 11Z" fill="#9CA3AF"/>
</svg>

            </span>
        <input className={` border  rounded-lg py-2 pl-10 shadow ${lightTheme === 'light'? "bg-[#FFFFFFB2] text-[#1F2937]" : "border-[#374151] placeholder-[#ADAEBC] bg-[#1F2937]"} `} placeholder='Search help articles...' type="text" />
        </div>

        <button className={`hidden sm:flex theme p-2 w-7 h-10  transition-[0.3s]  rounded-[8px]  items-center justify-center ${lightTheme === 'light'? 'bg-[##FFFFFF80] shadow' :'bg-[#1F2937]'}`}  onClick={changeTheme}><img src={lightTheme === 'light'? assets.Sunny :assets.moon} alt="" className="w-8 h-8" /></button>
        <button className={`language hidden sm:flex p-2  rounded-[8px] h-10 w-7 transition-[0.3s]  items-center justify-center ${lightTheme === 'light'? 'bg-[##FFFFFF80] shadow' :'bg-[#1F2937]'} `} onClick={changeLanguage}>
        <img src={assets.islandFlag} alt="" className='max-w-5' />
    
        </button>
        
       
    
       
      </div>
    </nav>
  )
}

export default NavSupport