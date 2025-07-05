


import React, { useContext } from 'react'
import { LeyndContext } from '../../../context/LeyndContext'
import InvoicesTable from '../../../components/DashboardComponents/InvoicesComponents/InvoicesTable/InvoicesTable'
import InvoicesStatus from '../../../components/DashboardComponents/InvoicesComponents/InvoicesStatus/InvoicesStatus'

const Invoices = () => {

  const {lightTheme} = useContext(LeyndContext)
  return (
    <div className={` ${lightTheme === 'light'? 'bg-[#FFFFFF80]' : 'bg-[#111827]'} w-full pl-[50px] md:pl-[255px] lg:pl-0 `}>
    <div className={`${lightTheme === 'light'? 'bg-[#FFFFFF80]' : 'bg-[#111827]'} py-8 px-8 w-full min-h-screen`} >
      <div className={`  w-full pl-[50px] md:pl-[255px] lg:pl-0`}>
    <div className="">
      {/* Header with Create Invoice Button */}
      <div className={`flex justify-between flex-wrap items-center mb-6`}>
        <div>
        <h1 className={`text-3xl font-semibold flex items-center mb-1 ${lightTheme === 'light'? 'text-[#1F2937]' : 'text-white'}`}>
           Invoices
        </h1>
        <p className={` ${lightTheme === 'light'? 'text-gray-600' : "text-[#9CA3AF]"}  text-sm`}>Explore your full invoice history every transaction, easily accessible in one place.</p>

        </div>
        <button className={` mt-3 lg:mt-0 text-white ${lightTheme === 'light'? ' bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]' : 'bg-[#1F2937]'} px-4 py-2 rounded-md shadow`}>+ Create Invoice</button>
      </div>
      
      
      
      
      {/* Invoice Stats with Create Invoice Button Below */}
      <InvoicesStatus lightTheme={lightTheme} />

      
      {/* Invoice List with Additional Text and Link */}
      
      <InvoicesTable lightTheme={lightTheme} />
      
    </div>
  </div>
  </div>
  </div>
    
  )
}

export default Invoices