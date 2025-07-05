import React, { useContext, useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import CheckoutFooter from '../../components/checkoutFooter/CheckoutFooter'
import Giftcard from '../../components/giftcard/Giftcard'
import { LeyndContext } from '../../context/LeyndContext'
import { useTranslation } from 'react-i18next'
import Select from '../../components/Select/Select'

const CheckoutGift = () => {
  const {lightTheme} = useContext(LeyndContext)
  const {t} = useTranslation()
    const [selectedType, setSelectedType] = useState(t('Select giftcard type'));
  
    const typeOptions = [
      { value: "All Status", label: t('Select giftcard type') },
      { value: "Success", label: t('Steam gifcard') },
      { value: "Failed", label: t('Giftcard') },
      
    ];
  
    const handleTypeOptions = (value) => {
      setSelectedType(value);
      
    };
  return (
    <>

<section className=''>
        <div className={` min-h-[40rem] ${lightTheme==="light"? 'bg-gradient-to-r from-[#EFF6FF4D] to-[#FFFFFFCC]' : 'bg-[#111827]'}`} > 
    <div className=" px-[36px] py-6 md:p-6 rounded-lg  mx-auto  flex flex-col  justify-start max-w-[48rem]">
   <div className='mb-[48px] mt-5'> <h1 className={`text-2xl font-bold mb-2 ${lightTheme==="light"? "text-[#1F2937]":"text-white"}`}>{t('Checkout')}</h1>
   <p className={`mb-2 ${lightTheme==="light"? "text-[#4B5563]" : "text-[#9CA3AF] "} `}>{t('Apply gift')}</p>
   <p className={`${lightTheme==="light"? "text-[#4B5563]" : "text-[#9CA3AF] "} mb-4 text-sm `}>{t('Note: Amount')}</p>
   </div>
   

    <div className="space-y-6">
      <div className='flex gap-[4rem] px-6 flex-wrap md:flex-nowrap'>
      <div className='w-full md:max-w-[27rem]'>
            <h3 className={`text-xl font-semibold mb-4  ${lightTheme==="light"? "text-[#1F2937]" : "text-white "}`}>{t('Gift Cards')}</h3>
           
            <div className="space-y-4">
              <div>
             <Select options={typeOptions} onSelect={handleTypeOptions} width={'w-full'} />
              </div>
                    <div>
                        
                        <div className='relative'>
                        <input type="text" placeholder="Amount"  className={`mt-1 h-[40px]  bg-[#374151] w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base  ${lightTheme === 'light' ? 'bg-[#FFFFFFB2] text-[#1F2937] ' : 'bg-[#374151] text-white'}`} />
                        
                        </div>
                    </div>
                   
                    <div>
                        <div className='flex gap-3 items-center'>
                       
                        <input type="text " placeholder='Card Number'   className={`mt-1 bg-[#374151]  ${lightTheme === 'light' ? 'bg-[#FFFFFFB2] text-[#1F2937]' : 'bg-[#374151] text-white'} h-[40px] w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base`} />
                        </div>
                    </div>
                </div>

                <div className={`border-t mt-6 ${lightTheme==="light"? "border-[#bbbbbb33] " : "border-[#374151] "} `}>
                  <h3 className={`text-xl  font-semibold mb-8 mt-7 ${lightTheme==="light"? "text-[#1F2937]" : "text-white"} `}>{t('Applied Gift Cards')}</h3>
                  <ul className='max-h-[110px] overflow-y-auto overflow-x-hidden'>
                    <Giftcard giftcardName={'Amazon Gift Card'} cardNumber={'**** **** **** 4532'} howmuch={'$50.00'} />
                   
                  </ul>
                </div>
        </div>

        <div className='w-full md:max-w-[15rem]'>
            <h3 className="text-lg font-semibold mb-3 text-white">{t('Order Summary')}</h3>
            <div className="">
                <div className="flex justify-between mb-3">
                    <span className={`text-whit  ${lightTheme==="light"? "text-[#1F2937]" : "text-[#9CA3AF]"}`}>{t('Original Total')}</span>
                    <span className={`font-normal ${lightTheme==="light"? "text-[#1F2937]" : "text-white"}`}>$100.00</span>
                </div>
                <div className="flex justify-between mb-4">
                    <span className={`${lightTheme==="light"? "text-[#1F2937]" : "text-[#9CA3AF]"}`}>{t('Processing Fee')} (2.5%)</span>
                    <span className={`font-medium ${lightTheme==="light"? "text-[#1F2937]" : "text-[#9CA3AF]"}`}>$2.50</span>
                </div>
                <div className="flex justify-between mb-4">
                    <span className={`${lightTheme==="light"? "text-[#1F2937]" : "text-[#9CA3AF]"}`}>{t('Rounded Amount')}</span>
                    <span className={`font-medium ${lightTheme==="light"? "text-[#1F2937]" : "text-[#9CA3AF]"}`}>$105.00</span>
                </div>
                <div className="flex justify-between mb-4">
                    <span className={`${lightTheme==="light"? "text-[#1F2937]" : "text-[#9CA3AF]"}`}>{t('Gift Cards Applied')}</span>
                    <span className={`font-medium ${lightTheme==="light"? "text-[#1F2937]" : "text-[#9CA3AF]"}`}>-$50.00</span>
                </div>
                <div className={`flex justify-between border-t  pt-3 my-4 ${lightTheme==="light"? "border-[#bbbbbb33]" : "border-[#374151]"}`}>
                    <span className={`text-lg font-semibold  ${lightTheme==="light"? "text-[#1F2937]" : "text-white"} `}>{t('Amount Due')}</span>
                    <span className={`text-lg font-semibold ${lightTheme==="light"? "text-[#1F2937]" : "text-white" }`}>$55.00</span>
                </div>
            </div>
            <div>
            <button className={`w-full  text-white py-3 px-4 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${lightTheme==="light"? "bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]" : "bg-[#4F46E5] hover:bg-[#352fa8]"}  `}>
            {t('Complete Purchase')}
        </button>

        <p className={`text-center text-sm  flex items-start justify-center gap-2 mt-4 ${lightTheme === 'light' ? 'text-[#4B5563]' : 'text-gray-500'} `}>
            <span className=''> <img src={lightTheme === 'light'? assets.ProtectionBlue : assets.checkoutProtection} alt="" /></span>
            {t('Secure payment processing')}</p>
            </div>
        </div>
      </div>

        
    </div>
</div>
   </div>
    

     </section>
     

     <CheckoutFooter textOne={t('Privacy-first')} />
    
    </>
  )
}

export default CheckoutGift