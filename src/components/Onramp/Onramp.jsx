import React, { useContext } from 'react'
import { assets, currency } from '../../assets/frontend_assets/assets'
import CurrencyCard from '../currencyCard/CurrencyCard'
import { LeyndContext } from '../../context/LeyndContext'
import { useTranslation } from 'react-i18next'

const Onramp = () => {

  const {lightTheme} = useContext(LeyndContext)
  const {t} = useTranslation()
  return (
    <section className={` px-6 rounded-[12px]   h-min w-full ${lightTheme === 'light'? 'bg-gradient-to-r from-[#EFF6FF4D] to-[#FFFFFFCC]' : 'bg-[#1F293780]'}`}>


            <div className='flex items-center gap-2 py-7'>
                <span><img src={lightTheme === 'light'? assets.UpArrowBlack : assets.upArrow}  alt="" /></span>
                <p className={`text-xl md:text-2xl ${lightTheme === 'light'? 'text-[#1F2937]' : 'text-[#818CF8]'} `}>{t('Onramp Fiat Currencies')}</p>
            </div>

            <ul className='grid sm:grid-cols-2 lg:grid-cols-3  gap-3 mb-6'>
              {
                currency.map((item, index)=> {
                  return (
                    <CurrencyCard key={index} shortcut={item.shortcut} name={item.name} />
                  )
                })
              }

            </ul>


    </section>
  )
}

export default Onramp