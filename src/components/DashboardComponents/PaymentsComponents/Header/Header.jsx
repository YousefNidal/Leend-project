
import { assets } from '../../../../assets/frontend_assets/assets'

const Header = ({setShowPopup, lightTheme,t}) => {
  return (
    <div className='flex items-center justify-between py-8 px-8 flex-wrap'>
          <div>
              <h3 className={`font-bold text-xl sm:text-2xl ${lightTheme === 'light'? "text-[#1F2937]" : "text-white"} `}>{t('Payments Overview')}</h3>
              <span className={`text-sm sm:text-base  ${lightTheme === 'light'? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>{t('Track and manage your payment activities')}</span>
    
          </div>
          <div className='flex items-center gap-4 mt-2 lg:mt-0'>
    
           <button className={`flex text-sm sm:text-base items-center text-white ${lightTheme === 'light'? "bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]" : " bg-[#1F2937]"}  py-1 sm:py-2 px-3 rounded sm:rounded-lg gap-2`}>
            <span><img src={assets.ExportWhite} alt="" /></span>
            {t('Export')}
           </button>
           <button className={`flex items-center text-sm sm:text-base  ${lightTheme === 'light'? "bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]" : " bg-[#4B5563]"} text-white py-1 sm:py-2 px-3 rounded sm:rounded-lg gap-2`}
           onClick={()=> setShowPopup(true)}
           >
           
           <span><img src={assets.AdditionWhite} alt="" /></span>
           {t('New Payment')}
           </button>
    
          </div>
        </div>
  )
}

export default Header