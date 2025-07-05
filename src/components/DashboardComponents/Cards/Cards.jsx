import React from 'react'
import { assets } from '../../../assets/frontend_assets/assets'
import DashboardCard from '../DashboardCard/DashboardCard'

const Cards = ({t}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-8 gap-6">
          <DashboardCard title={t('Active Payments')} img={assets.TrueGreen} description={'24'} />
          <DashboardCard title={t('Credit Balance')} img={assets.BalancePurple} description={'$4,285.00'} />
          <DashboardCard title={t('Total Received')} img={assets.DownArrowDashboard} description={'$12,847.00'} />
          <DashboardCard title={t('Current Plan')} img={assets.King} description={'Business'} />
          
          
        </div>
  )
}

export default Cards