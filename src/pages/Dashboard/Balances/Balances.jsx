import React, {useContext, useState} from 'react'
import Header from '../../../components/DashboardComponents/BalancesComponents/Header/Header'
import Cards from '../../../components/DashboardComponents/BalancesComponents/Cards/Cards'
import CryptoBalance from '../../../components/DashboardComponents/BalancesComponents/CryptoBalance/CryptoBalance'
import Table from '../../../components/DashboardComponents/BalancesComponents/Table/Table'
import { LeyndContext } from '../../../context/LeyndContext'
import { useTranslation } from 'react-i18next'

const Balances = () => {

  const {lightTheme} = useContext(LeyndContext)
  const {t} = useTranslation()
  return (
    <div className={` ${lightTheme === 'light'? 'bg-[#FFFFFF80]' : 'bg-[#111827]'} w-full pl-[50px] md:pl-[255px] lg:pl-0`}>

      <Header lightTheme = {lightTheme} t={t}/>
      <Cards t={t} />
      <CryptoBalance  t={t} lightTheme ={lightTheme} />
      <Table t={t} lightTheme = {lightTheme} />


     


    </div>
  )
}

export default Balances