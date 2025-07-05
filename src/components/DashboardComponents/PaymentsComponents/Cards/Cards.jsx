import React from 'react'
import { assets } from '../../../../assets/frontend_assets/assets'
import PaymentCard from '../PaymentCard/PaymentCard'

const Cards = ({t}) => {
  return (
    
    <div className=''>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-8 gap-6">
         
                <PaymentCard title={t('Total Payments')} img={assets.MoneyGreen} amount={'$47,289.00'} description={'+12.5% from last month'} />
                <PaymentCard title={t('Pending')} img={assets.ClockPurple} amount={'$5,847.00'} description={'8 payments pending'} />
                <PaymentCard title={t('Success Rate')} img={assets.PieBlue} amount={'98.3%'} description={'+2.4% from last month'} />
                <PaymentCard title={t('Active Subscriptions')} img={assets.SwitchGold} amount={'1,847'} description={'+124 this month'} />
          
          
        </div>
        </div>
   

  )
}

export default Cards