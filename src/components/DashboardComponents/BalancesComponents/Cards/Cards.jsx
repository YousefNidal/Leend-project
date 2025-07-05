import React from 'react'
import PaymentCard from '../../PaymentsComponents/PaymentCard/PaymentCard'
import {assets} from '../../../../assets/frontend_assets/assets'

const Cards = ({t}) => {
  return (
    <div className=''>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-8 gap-6 mb-8">
         
                <PaymentCard title={`${t('Total Balance')} (USD)`} img={assets.BalanceGreen} amount={'$147,289.00'} description={'+8.5% from last week'} />
                <PaymentCard title={t('Pending Withdrawals')} img={assets.ClockPurple} amount={'$2,847.00'} description={'3 pending requests'} />
                <PaymentCard title={t('Auto-withdrawals')} img={assets.SwitchBlue} amount={'4 Active'} description={'Next: Jan 20, 2025'} />
                <PaymentCard title={t('Total Withdrawn')} img={assets.ExitGold} amount={'$89,432.00'} description={'This month'} />
          
          
        </div>
        </div>
  )
}

export default Cards