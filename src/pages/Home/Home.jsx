
import Hero from '../../components/hero/Hero'
import Card from '../../components/card/Card'
import { assets } from '../../assets/frontend_assets/assets'
import EasyIntegration from '../../components/easyIntegration/EasyIntegration'
import Footer from '../../components/footer/Footer'

import { Outlet } from 'react-router-dom'
import { LeyndContext } from '../../context/LeyndContext'
import { useContext } from 'react'
import './Home.css'
import { useTranslation } from 'react-i18next'

const Home = () => {

  const {lightTheme} = useContext(LeyndContext)
  const { t} = useTranslation()
  return (
    <>
    
        
        <Hero />
        <div className={`cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  px-[36px] md:px-[76px] lg:px-[96px] py-[96px] bg-[#111827] ${lightTheme === 'light' ? "light" :""} `}>
          <Card img={lightTheme === 'light'? assets.CardBlue :assets.visaCard} title={t('Multiple')} description={t('Accept credit')} />
          <Card img={lightTheme === 'light'? assets.ShieldBlue :assets.shield} title={t('Complete')} description={t('Token-based')} />
          <Card img={lightTheme === 'light'? assets.BitcoinBlue :assets.bitcoin}  title={t('Crypto')} description={t('Get paid')} />
        </div>
        <EasyIntegration />
        <Footer />


        <Outlet />
    </>
  )
}

export default Home