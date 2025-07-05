import React, { useContext, useState } from 'react'
import Footer from '../../components/footer/Footer'
import { assets } from '../../assets/frontend_assets/assets'
import CheckoutFooter from '../../components/checkoutFooter/CheckoutFooter'
import { LeyndContext } from '../../context/LeyndContext'
import { useTranslation } from 'react-i18next'
import Select from '../../components/Select/Select'

const CheckoutSecure = () => {
    const {lightTheme} = useContext(LeyndContext)
     const [cardNumber, setCardNumber] = useState('');
      const [expiry, setExpiry] = useState('');
      const [cvc, setCvc] = useState('');
      const { t} = useTranslation()
    
      const handleCardNumberChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Allow only numbers
        if (value.length <= 19) {
          setCardNumber(value);
        }
      };
    
      const handleExpiryChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Allow only numbers
      
        // Ensure the month (first two digits) is not greater than 12
        if (value.length >= 2) {
          const month = value.slice(0, 2);
          if (Number(month) > 12) {
            value = '12' + value.slice(2); // Cap the month at 12
          }
        }
      
        // Add a slash after the first two digits
        if (value.length >= 2) {
          value = value.slice(0, 2) + '/' + value.slice(2);
        }
      
        // Limit the total length to 5 (MM/YY)
        if (value.length <= 5) {
          setExpiry(value);
        }
      };
    
      const handleCvcChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Allow only numbers
        if (value.length <= 4) {
          setCvc(value);
        }
      };


      const [selectedNumber, setSelectedNumber] = useState('+378');
        
          const numberOptions = [
            { value: "All Status", label: '+378' },
            { value: "US", label: '+1' },
            { value: "RU", label: '+7' },
            { value: "BYN", label: '+375' },
            { value: "DE", label: '+25' },
            
          ];
        
          const handleNumberOptions = (value) => {
            setSelectedNumber(value);
            
          };


  return (
    <>
    <section className=''>
        <div className={`  min-h-[37.4rem] ${lightTheme === 'light' ? ' bg-gradient-to-r from-[#EFF6FF4D] to-[#FFFFFFCC] ' : 'bg-[#111827]'}`}> 
    <div className="  px-[36px] py-6 md:p-6 rounded-lg  mx-auto  flex flex-col  justify-start max-w-[48rem]">
   <div className='mb-[48px] mt-5'> <h1 className={`text-2xl font-bold mb-2  ${lightTheme === 'light' ? 'text-[#1F2937]' : 'text-white'}`}>{t('Checkout')}</h1>
   <p className={` mb-4 ${lightTheme === 'light' ?  'text-[#4B5563]' : 'text-gray-600' } `}>{t('Secure payment processing')}</p></div>

    <div className="space-y-6">
      <div className='flex gap-[4rem] px-6 flex-wrap md:flex-nowrap'>
      <div className='w-full md:max-w-[27rem]'>
            <h3 className={`text-xl font-semibold mb-4  ${lightTheme === 'light' ? 'text-[#1F2937]' : 'text-white'}`}>{t('Payment Details')}</h3>
           
            <div className="space-y-4">
                    <div>
                        <label className={`block text-sm font-medium ${lightTheme === 'light' ? 'text-[#1F2937]' : 'text-white'} mb-[8px]`}>{t('Card Number')}</label>
                        <div className='relative'>
                        <input type="text"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        maxLength={19}
                        placeholder="424242424242242"  className={`mt-1 h-[40px] ${lightTheme === 'light' ? 'bg-[#FFFFFFB2] text-[#1F2937]' : 'bg-[#374151] text-white'} w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} />
                        <span className='absolute w-[20px] h-[20px] right-[12px] top-4'><img src={lightTheme === 'light'? assets.CardBlue : assets.visaCheckout} alt="" /></span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className={`block text-sm font-medium  mb-[8px] ${lightTheme === 'light' ? 'text-[#1F2937]' : 'text-white'}`}>{t('Expiry Date')}</label>
                            <input type="text" placeholder="MM/YY"
                            value={expiry}
                            onChange={handleExpiryChange}
                            maxLength={5}
                            className={`mt-1 h-[40px]  ${lightTheme === 'light' ? 'bg-[#FFFFFFB2] text-[#1F2937]' : 'bg-[#374151] text-white'}  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}/>
                        </div>
                        <div>
                            <label className={`block text-sm font-medium  mb-[8px] ${lightTheme === 'light' ? 'text-[#1F2937]' : 'text-white'}`}>CVC</label>
                            <input type="text"
                            value={cvc}
                            onChange={handleCvcChange}
                            maxLength={4}
                            placeholder="123"  className={`mt-1 h-[40px] ${lightTheme === 'light' ? 'bg-[#FFFFFFB2] text-[#1F2937]' : 'bg-[#374151] text-white'}  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}/>
                        </div>
                    </div>
                    <div>
                        <label className={`block text-sm font-medium ${lightTheme === 'light' ? 'text-[#1F2937]' : 'text-white'} mb-[8px]`}>{t('Phone Number')}</label>
                        <div className='flex gap-3 items-center'>
                        <Select onSelect={handleNumberOptions} options={numberOptions} width={'h-[40px] w-24'} />
                        <input type="text " placeholder='Phone Number'   className={`mt-1 ${lightTheme === 'light' ? 'bg-[#FFFFFFB2] text-[#1F2937]' : 'bg-[#374151] text-white'} h-[40px] w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} />
                        </div>
                    </div>
                </div>
        </div>

        <div className='w-full md:max-w-[15rem]'>
            <h3 className={`text-xl font-semibold mb-3 ${lightTheme === 'light' ? 'text-[#1F2937]' : 'text-white'}`}>{t('Order Summary')}</h3>
            <div className="">
                <div className="flex justify-between mb-3">
                    <span className={`text-whit  ${lightTheme === 'light' ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>{t('Subtotal')}</span>
                    <span className={`font-medium  ${lightTheme === 'light' ? 'text-[#1F2937]' : 'text-white'}`}>$99.00</span>
                </div>
                <div className="flex justify-between mb-4">
                    <span className={` ${lightTheme === 'light' ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>{t('Processing Fee')}</span>
                    <span className={`font-medium ${lightTheme === 'light' ? 'text-[#1F2937]' : 'text-white'}`}>$1.00</span>
                </div>
                <div className="flex justify-between border-t border-[#bbbbbb33] pt-3 my-4">
                    <span className={`text-lg font-semibold ${lightTheme === 'light' ? 'text-[#1F2937]' : 'text-white'}`}>{t('Total')}</span>
                    <span className={`text-lg font-semibold ${lightTheme === 'light' ? 'text-[#1F2937]' : 'text-white'} `}>$100.00</span>
                </div>
            </div>
            <div>
            <button className={`w-full bg-[#4F46E5] text-white py-3 px-4 rounded-md  focus:outline-none focus:ring-2  focus:ring-offset-2 ${lightTheme === 'light' ? 'bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]': ' hover:bg-[#352fa8]'} `}>
            {t('Pay Now')}
        </button>

        <p className={`text-center text-sm  flex items-start justify-center gap-2 mt-4 ${lightTheme === 'light' ? 'text-[#4B5563]' : 'text-gray-500'}`}>
            <span className=''> <img src={lightTheme === 'light'? assets.ProtectionBlue : assets.checkoutProtection} alt="" /></span>
            {t('End-to-end encryption')}</p>
            </div>
        </div>
      </div>

        
    </div>
</div>
   </div>
    

     </section>
     

     <CheckoutFooter textOne={'Leynd ehf.'} textTwo={'Tryggvagata 13,'} textThree={'101 Reykjavík, Iceland'} textFour={'info@leynd.is'} />
    
    
    </>
  )
}

export default CheckoutSecure