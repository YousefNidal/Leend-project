import React , {useContext, useState} from 'react'
import Header from '../../../components/DashboardComponents/PaymentsComponents/Header/Header'
import Cards from '../../../components/DashboardComponents/PaymentsComponents/Cards/Cards'
import PaymentTrends from '../../../components/DashboardComponents/PaymentsComponents/PaymentTrends/PaymentTrends'
import Table from '../../../components/DashboardComponents/PaymentsComponents/Table/Table'
import PaymentPopup from '../../../components/PaymentPopup/PaymentPopup'
import { LeyndContext } from '../../../context/LeyndContext'
import { useTranslation } from 'react-i18next'





const Payments = () => {

  const [showPopup, setShowPopup] = useState(false);
  const {lightTheme} = useContext(LeyndContext)
  const {t} = useTranslation()

  return (
    <div className={` ${lightTheme === 'light'? 'bg-[#FFFFFF80]' : 'bg-[#111827]'} w-full pl-[50px] md:pl-[255px] lg:pl-0`}>
        <Header t={t} setShowPopup={setShowPopup} lightTheme = {lightTheme} />
        <Cards t={t} lightTheme = {lightTheme} />
        <PaymentTrends t={t} lightTheme = {lightTheme} />
        <Table t={t} lightTheme = {lightTheme} />


      
    
        {showPopup && <PaymentPopup onClose={() => setShowPopup(false)} />}

    </div>
  )
}

export default Payments