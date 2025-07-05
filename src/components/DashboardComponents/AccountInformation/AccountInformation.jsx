import React from 'react'

const AccountInformation = ({lightTheme, t}) => {
  return (
    <div className={`rounded-xl  ${lightTheme === 'light' ? "shadow-lg":"bg-[#1F293780]"}  mx-8 my-8 px-6`}>
        <h3 className={`text-lg sm:text-xl ${lightTheme === 'light'? "text-[#1F2937]" : "text-white" } font-bold pt-6 `}>{t('Account Information')}</h3>
        <div className='grid grid-cols-3 '>
                <div className='pt-4 pb-5'>
                    <span className={`text-sm sm:text-base  ${lightTheme === 'light'? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}> {t('Account Name')} </span>
                    <p className={`font-semibold text-sm sm:text-base  pt-1 ${lightTheme === 'light' ? 'text-[#1F2937]' : 'text-white'}`}>Tumbling6772</p>
                </div>
                <div className='pt-4 pb-5'>
                    <span className={`text-sm sm:text-base  ${lightTheme === 'light'? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}> {t('Date Joined')} </span>
                    <p className={`font-semibold text-sm sm:text-base  pt-1 ${lightTheme === 'light' ? 'text-[#1F2937]' : 'text-white'}`}>January 15, 2025</p>
                </div>
                <div className='pt-4 pb-5 '>
                    <span className={`text-sm block sm:text-base  ${lightTheme === 'light'? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>{t('API Status')}</span>
                    <span className='text-xs sm:text-sm inline-flex text-center  text-[#10B981] rounded-full bg-[#10B98133] px-2 py-1'>Active</span>
                </div>
               
        </div>
    </div>
  )
}

export default AccountInformation