import React,{useState} from 'react'
import { assets, paymentMethods } from '../../../../assets/frontend_assets/assets'
import ListItem from '../ListItem/ListItem'
import Select from '../../../Select/Select';

const PaymentTrends = ({lightTheme, t}) => {

    const [selectedStatus, setSelectedStatus] = useState("All Status");
    
      const Options = [
        { value: "Last 7 days", label: "Last 7 days" },
        { value: "One month", label: "One month" },
        { value: "Two month", label: "Two month" },
        { value: "Three Month", label: "Three Month" },
        { value: "One year", label: "One year" },
      ];
    
      const handleOptions = (value) => {
        setSelectedStatus(value);
        
      };



  return (
    <div className='px-8 py-9 '>
        <div className={`px-6 flex gap-14 flex-col lg:flex-row  ${lightTheme === 'light'? 'bg-[#FFFFFF80]' : 'bg-[#1F293780]'}  shadow-lg rounded-xl  py-7`}>
            <div className='flex-1'>
                <div className='flex  justify-between'>
            <h3 className={` ${lightTheme === 'light'? 'text-[#1F2937]' : 'text-white'} text-lg sm:text-xl font-bold`}>{t('Payment Trends')}</h3>
            <div>
            <Select options={Options} onSelect={handleOptions} width={'w-[140px]'} />
            </div>
        </div>
        <div className='h-[300px] w-full flex items-center justify-center'>
            <p className={`text-sm sm:text-base font-normal ${lightTheme === 'light'? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>{t('Payment Chart Visualization')}</p>
        </div>
            </div>
        

        <div className='min-w-[360px]'>

            <h3 className={` ${lightTheme === 'light' ? 'text-[#1F2937]' : 'text-white'} font-bold text-lg sm:text-xl`}>
            {t('Payment Methods')}
            </h3>
            <ul className='list-none px-3 mt-8'>
                {
                    paymentMethods.map((item, index) => {
                        return <ListItem key={index} img={ lightTheme === 'light'? item.lightImg :item.img} name={item.name} сommission={item.сommission} />
                    })
                }
            </ul>
        </div>
        </div>


    </div>
  )
}

export default PaymentTrends