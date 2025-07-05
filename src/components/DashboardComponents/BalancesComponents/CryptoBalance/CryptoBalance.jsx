import React, {useState} from 'react'
import { assets } from '../../../../assets/frontend_assets/assets'

const CryptoBalance = ({lightTheme, t}) => {
  const [thresholds, setThresholds] = useState({ XMR: '', USD: '', LTC: '' });

  const handleThresholdChange = (currency, value) => {
    setThresholds((prev) => ({ ...prev, [currency]: value }));
  };
  return (
    <div className='px-8 my-3'>
      <div className={`px-6 flex flex-col lg:flex-row gap-24  ${lightTheme === 'light'? '' : 'bg-[#1F293780]'} shadow-lg rounded-xl  py-7`}>

    <div className='w-full'>

      <h3 className={` ${lightTheme === 'light'? 'text-[#1F2937]' : 'text-white'} text-lg sm:text-xl font-bold`}>T{t('Cryptocurrency Balances')}</h3>
      <div className='px-4'>
          <div className='flex items-center justify-between pt-8'>
            <div className='flex items-center gap-3'>
              <span><img  className='h-[25px]' src={lightTheme === 'light'? assets.MoneyGray : assets.MoneyWhite} alt="" /></span>
              <div>
                <p className={` text-sm sm:text-base ${lightTheme === 'light'? 'text-[#1F2937]' : 'text-white'}`}>Monero</p>
                <span className={` ${lightTheme === 'light'? 'text-[#4B5563]' : 'text-[#9CA3AF]'} text-sm sm:text-base`}>12.89 XMR  -  $2861.33 USD</span>
                </div>
            </div>
            <div><button className={`py-2 px-3 text-white text-sm sm:text-base ${lightTheme === 'light'? 'bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]' : 'bg-[#4B5563]'} rounded sm:rounded-lg`}>{t('Withdraw')}</button></div>
            
          </div>
          <div className='flex items-center justify-between pt-8'>
            <div className='flex items-center gap-3'>
              <span><img  className='h-[25px]' src={lightTheme === 'light'? assets.MoneyGray : assets.MoneyWhite} alt="" /></span>
              <div>
                <p className={` ${lightTheme === 'light'? 'text-[#1F2937]' : 'text-white'} text-sm sm:text-base`}>Monero</p>
                <span className={` ${lightTheme === 'light'? 'text-[#4B5563]' : 'text-[#9CA3AF]'} text-sm sm:text-base`}>12.89 XMR  -  $2861.33 USD</span>
                </div>
            </div>
            <div><button className={`py-2 px-3 text-white text-sm sm:text-base ${lightTheme === 'light'? 'bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]' : 'bg-[#4B5563]'}  rounded-lg`}>{t('Withdraw')}</button></div>
            
          </div>
      </div>

    </div>




    <div className='w-full'>
      <h3 className={` ${lightTheme === 'light'? 'text-[#1F2937]' : 'text-white'} text-lg sm:text-xl font-bold mb-9`}>{t('Withdrawal Settings')}</h3>
      <div className='px-4'>
        <div className='mb-12'>
          <p className={` ${lightTheme === 'light' ? 'text-[#1F2937]' : 'text-white'} text-base font-bold mb-4`}>{t('Automatic Withdrawals')}</p>
          <div className='flex items-center justify-between mb-4 text-sm sm:text-base'>
            <p className={` ${lightTheme === 'light'? 'text-[#1F2937]' : 'text-white'} font-normal text-sm sm:text-base`}>{t('Weekly Withdrawals')}</p>
            <input className={`rounded-full max-w-[44px]  px-2  ${lightTheme==='light'? 'shadow' : 'bg-[#4B5563] text-white'} `} type="text" />
          </div>
          <div className='flex items-center justify-between mb-4 text-sm sm:text-base'>
            <p className={` ${lightTheme === 'light'? 'text-[#1F2937]' : 'text-white'} font-normal text-sm sm:text-base`}>{t('Threshold Withdrawals')}</p>
            <input className={`rounded-full  px-2 max-w-[44px] ${lightTheme==='light'? 'shadow' : 'bg-[#4B5563] text-white'} `} type="text" />
          </div> 
        </div>

        <div className='mb-4'>
          <p className={` ${lightTheme === 'light' ? 'text-[#1F2937]' : 'text-white'} text-base font-bold mb-4`}>{t('Withdrawal Thresholds')}</p>
          {['XMR', 'USD', 'LTC'].map((currency) => (
            <div key={currency} className='flex items-center justify-between mb-4 text-sm sm:text-base'>
              <p className={` ${lightTheme === 'light'? 'text-[#1F2937]' : 'text-white'} font-normal`}>{currency}</p>
              <input 
                className={`rounded-[4px] max-w-[96px] py-1 px-2 ${lightTheme==='light'? 'shadow' : 'bg-[#4B5563] text-white'} `} 
                type="number" 
                placeholder={`Enter ${currency} payout threshold`} 
                min="0"
                step="0.01" 
                value={thresholds[currency]}
                onChange={(e) => handleThresholdChange(currency, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>


    
    </div>

    </div>
  )
}

export default CryptoBalance