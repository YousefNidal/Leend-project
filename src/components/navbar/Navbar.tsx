import React, { useContext } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import './Navbar.css'
import { LeyndContext } from '../../context/LeyndContext'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
  const { t} = useTranslation()


  const {lightTheme, setLightTheme, language, setLanguage} = useContext(LeyndContext)

  


  const changeTheme = () => {
        if(lightTheme==='dark') {
          window.localStorage.setItem('Theme',JSON.stringify('light'))
          setLightTheme('light')
        } else {
          window.localStorage.setItem('Theme',JSON.stringify('dark'))
          setLightTheme('dark')

        }
  }

  const changeLanguage = () => {
    if(language==='en') {
      window.localStorage.setItem('Language',JSON.stringify('ice'))
      setLanguage('ice')
    } else {
      window.localStorage.setItem('Language',JSON.stringify('en'))
      setLanguage('en')
    }
  }




  return (
    <nav className={`nav flex justify-between items-center py-4 px-[36px] md:px-[76px] lg:px-[96px] bg-[#111827F2]  text-white border-b border-[#1F2937] 
      ${lightTheme == 'light'? 'text-black bg-[#FFFFFF99] border-[#FFFFFF33] shadow ':''}
      ` 
       
    }>
      
       <Link  className='logo flex items-center' to='/'>
       <h4 className={`text-xl sm:text-2xl font-bold ${lightTheme === 'light'? 'tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600' : ''} `}>Leynd</h4>
       <p className=" text-xs sm:text-sm text-[#9CA3AF]">/leɪnd/</p>
       </Link>
      
      <div className="buttons flex items-center space-x-4">
        <button className={`hidden sm:flex theme p-2 w-7 h-10  transition-[0.3s]  rounded-[8px]  items-center justify-center ${lightTheme === 'light'? 'bg-[##FFFFFF80]' :'bg-[#1F2937]'}`}  onClick={changeTheme}><img src={lightTheme === 'light'? assets.Sunny :assets.moon} alt="" className="w-8 h-8" /></button>
        <button className={`language hidden sm:flex p-2  rounded-[8px] h-10 w-7 transition-[0.3s]  items-center justify-center ${lightTheme === 'light'? 'bg-[##FFFFFF80]' :'bg-[#1F2937]'} `} onClick={changeLanguage}>
        <img src={assets.islandFlag} alt="" className='max-w-5' />
    
        </button>
        <button onClick={()=> setShowLogin(true)} className={`transition-[0.3s]  text-white px-4 py-2 rounded-[8px]  text-sm sm:text-base ${lightTheme === 'light'? 'bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]  ' : 'bg-[#4F46E5] hover:bg-[#352fa8] '}`}  >{t('Dashboard')}</button>
      </div>
    </nav>
  )
}

export default Navbar