


   import React, { useContext } from 'react'
import Navbar from '../../../components/DashboardComponents/Navbar/Navbar'
import Header from '../../../components/DashboardComponents/Header/Header'
import Cards from '../../../components/DashboardComponents/Cards/Cards'
import AccountInformation from '../../../components/DashboardComponents/AccountInformation/AccountInformation'
import Table from '../../../components/DashboardComponents/Table/Table'
import { LeyndContext } from '../../../context/LeyndContext'
import { useTranslation } from 'react-i18next'
   
   const Main = () => {
    const {lightTheme} = useContext(LeyndContext)
    const {t} = useTranslation()
     return (
       
           
       
             
             
             <div className={` w-full pl-[50px] md:pl-[255px] lg:pl-0 ${lightTheme === 'light'? 'bg-[#FFFFFF80]':'bg-[#111827]'}`} >
               <Header  />
               <div>
                   <Cards t= {t} lightTheme={lightTheme} />
               </div>
               <AccountInformation t={t} lightTheme={lightTheme} />
               <Table lightTheme={lightTheme} t= {t} />
             </div>
             
             
           
             
           
           
     )
   }
   
   export default Main 