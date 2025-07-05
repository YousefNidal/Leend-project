import React, {useState, useContext} from 'react'
import { assets } from '../../../assets/frontend_assets/assets'
import { useTranslation } from 'react-i18next'
import {LeyndContext} from '../../../context/LeyndContext'

const Header = () => {

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



  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownNotification, setIsDropdownNotification] = useState(false);
  
 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    
  };
  const toggleNotification = () => {
    setIsDropdownNotification(!isDropdownNotification);
    
  }
  
  return (
    <div className='flex items-center justify-between py-8 px-8'>
      <div>
          <h3 className={`font-bold text-xl sm:text-2xl  ${lightTheme === 'light'? 'text-[#1F2937]' : 'text-white'}`}>{t('Hello')} Tumbling6772!</h3>
          <span className={`text-sm sm:text-base  ${lightTheme === 'light'? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>{t('Account ID')}: 7f4e8d31c5a2b9e6f0h3i2k1l4m7n8p9</span>

      </div>
      <div className='flex items-center gap-4 '>

        <button className={`hidden sm:flex theme p-2 w-7 h-8  transition-[0.3s]  rounded-[8px]  items-center justify-center ${lightTheme === 'light'? 'bg-[##FFFFFF80] shadow-sm' :'bg-[#1F2937]'}`}  onClick={changeTheme}><img src={lightTheme === 'light'? assets.Sunny :assets.moon} alt="" className="w-8 h-8" /></button>
               <button className={`language hidden sm:flex p-1  rounded-[8px] h-8 w-7 transition-[0.3s]  items-center justify-center ${lightTheme === 'light'? 'bg-[##FFFFFF80] shadow-sm' :'bg-[#1F2937]'} `} onClick={changeLanguage}>
               <img src={assets.islandFlag} alt="" className='max-w-5' />
           
        </button>


        <div className='flex relative'>
        <span className={`p-2 rounded-lg  cursor-pointer  ${lightTheme === 'light'? 'shadow-sm' : 'bg-[#1F2937]'}`} onClick={toggleNotification}>
          <img className='' src={ lightTheme === 'light'? assets.NotificationBlue :assets.NotificationWhite} alt="" />
        </span>

      {isDropdownNotification && (
        <div
          id="userDropdown"
          className="z-10 absolute right-0 top-9 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Bonnie Green</div>
            <div className="font-medium truncate">name@flowbite.com</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Earnings
              </a>
            </li>
          </ul>
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>

        
        <div className='relative'>
      <img
        id="avatarButton"
        type="button"
        onClick={toggleDropdown}
        className="w-10 h-10 rounded-full cursor-pointer"
        alt="User dropdown"
        src={assets.profile}
      />

      {isDropdownOpen && (
        <div
          id="userDropdown"
          className="z-10 absolute right-0 top-11 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Bonnie Green</div>
            <div className="font-medium truncate">name@flowbite.com</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Earnings
              </a>
            </li>
          </ul>
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>






      </div>
    </div>
  )
}

export default Header