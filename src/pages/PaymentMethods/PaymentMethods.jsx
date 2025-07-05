import React, { useContext } from 'react'
import Onramp from '../../components/Onramp/Onramp'
import Offramp from '../../components/Offramp/Offramp'
import { assets, giftCard, giftCardLight } from '../../assets/frontend_assets/assets'
import CheckoutFooter from '../../components/checkoutFooter/CheckoutFooter'
import GiftCardComponent from '../../components/GiftCardComponent/GiftCardComponent'
import { LeyndContext } from '../../context/LeyndContext'
import { useTranslation } from 'react-i18next'

const PaymentMethods = () => {

const {lightTheme} = useContext(LeyndContext)
const { t} = useTranslation()

  return (
    
    <>
    <section className={`min-h-screen  px-[36px] md:px-[76px] lg:px-[96px] ${lightTheme === 'light'? 'bg-[#FFFFFF80]' : 'bg-[#111827]'} `}>

    <h1 className={`font-bold text-2xl md:text-4xl text-center  pt-[30px] pb-[48px]  ${lightTheme === 'light'? 'text-[#1F2937]' : 'text-white'} `}>
    {t('Accepted Payment Methods')}
    </h1>

    <div>
      <h3 className={` font-semibold text-xl md:text-2xl ${lightTheme === 'light'? 'text-[#1F2937]' : 'text-[#818CF8]'}`}>{t('Gift Cards')}</h3>
      <ul className='my-8 mb-10 grid  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5  gap-4 '>
       { lightTheme === 'light'? 
        giftCardLight.map((item, index) => {

          return <GiftCardComponent key={index} svg={item.giftSvg} name={item.name} />
        })
       : 
        giftCard.map((item, index) => {

          return <GiftCardComponent key={index} svg={item.giftSvg} name={item.name} />
        })
       }
      </ul>
    </div>

    <div className='py-4'>
      <h3 className={` font-semibold text-xl md:text-2xl mb-9 ${lightTheme === 'light'? 'text-[#1F2937]' : 'text-[#818CF8]'}`}>{t('Cryptocurrencies')}</h3>
      <div className={` py-4 flex items-center flex-wrap rounded-xl px-6 gap-4 mb-14 ${lightTheme === 'light'? 'bg-[#c3d9ff]':'bg-[#1F293780] '}`}>
        <p className='flex items-center gap-3'>
          <img src={lightTheme === 'light'? assets.BitcoinBlack : assets.BitcoinWhite} alt="" />
          <img src={lightTheme === 'light'? assets.EithiriumBlack : assets.EthiriumWhite} alt="" />
          <img src={lightTheme === 'light'? assets.CoinBlack : assets.CoinsWhite} alt="" />
        </p>
        <p className={` font-normal text-sm md:text-base ${lightTheme === 'light'? 'text-[#4B5563]':'text-[#D1D5DB]'}`}>+ {t('800 more cryptocurrencies supported')}</p>
      </div>
    </div>
    <div className=' flex flex-col md:flex-row  justify-between gap-8 pb-12'>
        <Onramp />
        <Offramp />


    </div>

   
    </section>
     <CheckoutFooter textOne={t('Privacy-first')}/>
    </>
  )
}

export default PaymentMethods