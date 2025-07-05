import React, { useContext } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { LeyndContext } from '../../context/LeyndContext'
import { useTranslation } from 'react-i18next'

const CheckoutFooter = ({textOne, textTwo, textThree, textFour}) => {

  const {lightTheme} = useContext(LeyndContext)
  const {t} = useTranslation()
  return (
     <div className={`footer  ${lightTheme === 'light' ? 'text-black border-[#FFFFFF33]' : 'bg-[#111827] text-white border-[#1F2937]'} border-t  text-white px-[36px] md:px-[76px] lg:px-[96px] py-[48px] flex flex-col items-center md:items-start md:grid  md:grid-cols-2 lg:grid-cols-4 gap-8`}>
           <div className='w-full md:w-auto text-center md:text-start'>
             <h3 className={`text-lg sm:text-xl font-bold mb-4 ${lightTheme === "light" ? " tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600" : " text-white"} `}>Leynd</h3>
             <p className={`mb-2  text-sm sm:text-base ${lightTheme === "light" ? " text-[#4B5563]" : " text-[#9CA3AF]"} `}>{textOne}</p>
             <p className={`mb-2  text-sm sm:text-base ${lightTheme === "light" ? " text-[#4B5563]" : " text-[#9CA3AF]"} `}>{textTwo}</p>
             <p className={`mb-2  text-sm sm:text-base ${lightTheme === "light" ? " text-[#4B5563]" : " text-[#9CA3AF]"} `}>{textThree}</p>
             <a href="mailto:info@leynd.is" className={`block ${lightTheme === "light" ? " text-[#4B5563]" : " text-[#9CA3AF]"} text-sm sm:text-base`}>{textFour}</a>
           </div>
           <div className='w-full md:w-auto text-center md:text-start'>
             <h3 className={`text-lg sm:text-xl font-bold mb-4 ${lightTheme === "light" ? " text-[#1F2937]" : " text-white"} `}>{t('Support')}</h3>
             <a href="" className={`mb-2 block text-sm sm:text-base ${lightTheme === "light" ? " text-[#4B5563]" : " text-[#9CA3AF]"} `}>{t('Documentation')}</a>
             <a href="" className={`mb-2 block text-sm sm:text-base ${lightTheme === "light" ? " text-[#4B5563]" : " text-[#9CA3AF]"} `}>{t('Help Center')}</a>
             <a href="" className={`mb-2 block text-sm sm:text-base ${lightTheme === "light" ? " text-[#4B5563]" : " text-[#9CA3AF]"} `}>{t('System Status')}</a>
           </div>
           <div className='w-full md:w-auto text-center md:text-start'>
             <h3 className={`text-lg sm:text-xl font-bold mb-4 ${lightTheme === "light" ? " text-[#1F2937]" : " text-white"} `}>{t('Legal')}</h3>
             <p className={`mb-2  text-sm sm:text-base ${lightTheme === "light" ? " text-[#4B5563]" : " text-[#9CA3AF]"} `}><a href="">{t('Privacy Policy')}</a></p>
             <p className={`mb-2  text-sm sm:text-base ${lightTheme === "light" ? " text-[#4B5563]" : " text-[#9CA3AF]"} `}><a href="">{t('Terms of Service')}</a></p>
             <p className={`mb-2  text-sm sm:text-base ${lightTheme === "light" ? " text-[#4B5563]" : " text-[#9CA3AF]"} `}><a href="">{t('Compliance')}</a></p>
             
           </div>
           <div className='w-full md:w-auto text-center md:text-start'>
             <h3 className={`text-lg sm:text-xl font-bold mb-4 text-nowrap ${lightTheme === "light" ? " text-[#1F2937]" : " text-white"}`}>{t('Connect')}</h3>
             <div className="payment-methods flex justify-center md:justify-start space-x-4 mb-4">
               <a href="">
                
                {lightTheme === "light"? 
                
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 2.79997C19.2483 3.12606 18.4534 3.34163 17.64 3.43997C18.4982 2.92729 19.1413 2.12075 19.45 1.16997C18.6436 1.65003 17.7608 1.98826 16.84 2.16997C16.2245 1.50254 15.405 1.05826 14.5098 0.906817C13.6147 0.755372 12.6945 0.905324 11.8938 1.33315C11.093 1.76099 10.4569 2.4425 10.0852 3.2708C9.71355 4.09911 9.62729 5.02736 9.84 5.90997C8.20943 5.82749 6.61444 5.40292 5.15865 4.66383C3.70287 3.92474 2.41885 2.88766 1.39 1.61997C1.02914 2.25013 0.839519 2.96379 0.84 3.68997C0.83872 4.36435 1.00422 5.02858 1.32176 5.62353C1.63929 6.21848 2.09902 6.72568 2.66 7.09997C2.00798 7.08223 1.36989 6.90726 0.8 6.58997V6.63997C0.804887 7.58486 1.13599 8.49906 1.73731 9.22793C2.33864 9.9568 3.17326 10.4556 4.1 10.64C3.74326 10.7485 3.37288 10.8058 3 10.81C2.74189 10.807 2.48442 10.7835 2.23 10.74C2.49391 11.5528 3.00462 12.2631 3.69107 12.7721C4.37753 13.2811 5.20558 13.5635 6.06 13.58C4.6172 14.7152 2.83588 15.3348 1 15.34C0.665735 15.3411 0.331736 15.321 0 15.28C1.87443 16.4902 4.05881 17.1327 6.29 17.13C7.82969 17.146 9.35714 16.855 10.7831 16.274C12.2091 15.6931 13.505 14.8338 14.5952 13.7465C15.6854 12.6591 16.548 11.3654 17.1326 9.94087C17.7172 8.51639 18.012 6.98969 18 5.44997C18 5.27996 18 5.09997 18 4.91997C18.7847 4.33478 19.4615 3.61739 20 2.79997Z" fill="#374151"/>
</svg>

                : 
                
                <img src={assets.twitter} alt="" className="w-[18px] h-[18px] " />
                }
                
                </a>
               <a href="">
                
            {lightTheme === "light"? 
            
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_423_349)">
<path d="M7.999 0C3.58201 0 4.61648e-06 3.596 4.61648e-06 8.032C-0.0018 9.71555 0.525519 11.3571 1.50744 12.7246C2.48935 14.0922 3.87621 15.1166 5.472 15.653C5.872 15.727 6.018 15.479 6.018 15.266C6.018 15.075 6.011 14.57 6.007 13.9C3.782 14.385 3.312 12.823 3.312 12.823C2.949 11.895 2.424 11.648 2.424 11.648C1.697 11.15 2.478 11.16 2.478 11.16C3.281 11.217 3.703 11.988 3.703 11.988C4.417 13.215 5.576 12.861 6.032 12.655C6.104 12.136 6.311 11.782 6.54 11.581C4.764 11.378 2.896 10.689 2.896 7.612C2.896 6.735 3.208 6.018 3.72 5.456C3.637 5.253 3.363 4.436 3.798 3.331C3.798 3.331 4.47 3.115 5.998 4.154C6.65075 3.97561 7.32432 3.88482 8.00101 3.884C8.67772 3.88534 9.35126 3.97647 10.004 4.155C11.531 3.116 12.202 3.332 12.202 3.332C12.638 4.438 12.364 5.254 12.282 5.457C12.795 6.019 13.104 6.736 13.104 7.613C13.104 10.698 11.234 11.377 9.452 11.576C9.739 11.824 9.995 12.314 9.995 13.063C9.995 14.137 9.985 15.003 9.985 15.266C9.985 15.481 10.129 15.731 10.535 15.652C12.1292 15.1143 13.5144 14.0895 14.4949 12.7223C15.4755 11.3551 16.0019 9.71448 16 8.032C16 3.596 12.418 0 7.999 0Z" fill="#374151"/>
</g>
<defs>
<clipPath id="clip0_423_349">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

            :<img src={assets.github} alt="" className="w-[18px] h-[18px] " /> }    
            </a>

            
               <a href="">
                
                {lightTheme === 'light'? 
              <svg width="18" height="18" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.83226 0C5.22257 0 3.38442 0.7276 3.05464 0.87301C2.72486 1.01842 2.35882 1.47234 1.94348 2.2215C1.52758 2.97067 1.19383 3.84644 0.651569 5.13467C0.109871 6.4229 -0.0164872 8.90647 0.00164494 9.66448C0.0197771 10.4225 0.108738 11.0146 0.904852 11.463C1.7004 11.9109 2.40415 12.3797 3.14474 12.6617C3.88589 12.9437 4.39132 13.1466 4.7347 12.8646C5.07808 12.5826 5.30416 12.0889 5.30416 12.0889C5.30416 12.0889 5.62941 11.6482 5.01518 11.384C4.40095 11.1191 4.09384 10.9339 4.12047 10.6608C4.14767 10.3877 4.19243 10.2378 4.34599 10.2732C4.49955 10.3086 4.86162 10.9428 6.2527 11.2336C7.64377 11.5244 8.99972 11.4807 8.99972 11.4807C8.99972 11.4807 10.3562 11.5249 11.7473 11.2336C13.1384 10.9428 13.4999 10.3086 13.6534 10.2732C13.807 10.2378 13.8518 10.3877 13.879 10.6602C13.9062 10.9339 13.599 11.1191 12.9848 11.384C12.3706 11.6482 12.6958 12.0889 12.6958 12.0889C12.6958 12.0889 12.9219 12.5821 13.2653 12.8646C13.6081 13.1466 14.1141 12.9437 14.8547 12.6617C15.5953 12.3797 16.2996 11.9114 17.0951 11.463C17.8913 11.0146 17.9802 10.4225 17.9984 9.66448C18.0165 8.90702 17.8901 6.4229 17.3479 5.13467C16.8062 3.84644 16.4719 2.97067 16.056 2.2215C15.6412 1.47234 15.2746 1.01842 14.9454 0.872457C14.6156 0.7276 12.7769 0 12.1672 0C11.5575 0 11.3773 0.414666 11.3773 0.414666L11.1648 0.87301C11.1648 0.87301 9.7369 0.608177 9.00935 0.607624C8.2818 0.607624 6.83519 0.87301 6.83519 0.87301L6.62271 0.414113C6.62271 0.414113 6.44252 0 5.83226 0ZM5.89856 5.50013H5.92122C6.81026 5.50013 7.53045 6.25924 7.53045 7.19528C7.53045 8.13187 6.81026 8.89044 5.92122 8.89044C5.03218 8.89044 4.31199 8.13187 4.31199 7.19528C4.31143 6.26809 5.01858 5.51284 5.89856 5.50013ZM12.0788 5.50013H12.1014C12.9814 5.51284 13.688 6.26864 13.688 7.19528C13.688 8.13187 12.9678 8.89044 12.0788 8.89044C11.1892 8.89044 10.4696 8.13187 10.4696 7.19528C10.4696 6.25924 11.1892 5.50013 12.0788 5.50013Z" fill="#374151"/>
              </svg>
                
              :<img src={assets.discord} alt="" className="w-[18px] h-[18px] " />
              }
                
                </a>
              
             </div>
            
           </div>
         </div>
  )
}

export default CheckoutFooter