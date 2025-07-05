import { assets } from '../../../../assets/frontend_assets/assets'
import Select from '../../../../components/Select/Select'
import {useState} from 'react'

const Header = ({lightTheme, t}) => {

  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const currencyOptions = [
    { value: "USD", label: "USD" },
    { value: "BYN", label: "BYN" },
    { value: "RUB", label: "RUB" },
  ];
  const [displayMode, setDisplayMode] = useState('fiat');
  const handleCurrencySelect = (value) => {
    setSelectedCurrency(value);
    
  };

  return (
    <div className='flex items-center justify-between py-8 px-8 flex-wrap '>
    <div className='mb-2 lg:mb-0 '>
        <h3 className={`font-bold text-xl sm:text-2xl  ${lightTheme === 'light'? "text-[#1F2937]" : "text-white"}`}>{t('Crypto Balances')}</h3>
        <span className={`text-sm sm:text-base  ${lightTheme === 'light'? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>{t('Manage your cryptocurrency holdings')}</span>

    </div>
    <div className='flex items-center gap-4 flex-wrap '>

    <div className={`flex gap-3 ${lightTheme === 'light' ? 'border' : 'bg-[#1F2937]'} py-1 rounded sm:rounded-lg items-center px-2`}>
      <div className='flex gap-2 items-center'>
        <label className={`text-sm ${lightTheme === 'light' ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>Display in {displayMode === 'fiat' ? 'Fiat' : 'Crypto'}</label>
        <button 
          className="w-12 h-6 bg-gray-300 rounded-full flex items-center p-1 transition-all" 
          onClick={() => setDisplayMode(displayMode === 'fiat' ? 'crypto' : 'fiat')}>
          <div className={`w-5 h-5 bg-white rounded-full shadow-md transform ${displayMode === 'crypto' ? 'translate-x-6' : ''} transition-all`}></div>
        </button>
      </div>
      <div>
        <Select options={currencyOptions} onSelect={handleCurrencySelect} />
      </div>
    </div>

     <button className={`flex items-center  ${lightTheme === 'light'? 'bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]' : ' bg-[#1F2937]'} text-white py-1 sm:py-2 px-3 rounded sm:rounded-lg gap-2`}>
      <span className={`text-sm sm:text-base`}><img src={assets.ExportWhite} alt="" /></span>
      {t('Export History')}
     </button>
     

    </div>
  </div>
  )
}

export default Header