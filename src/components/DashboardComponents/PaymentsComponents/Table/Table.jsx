
import { assets } from '../../../../assets/frontend_assets/assets'
import {useState} from 'react'
import Select from '../../../../components/Select/Select'


const Table = ({lightTheme, t}) => {

  const [selectedStatus, setSelectedStatus] = useState("All Status");

  const statusOptions = [
    { value: "All Status", label: "All Status" },
    { value: "Success", label: "Success" },
    { value: "Failed", label: "Failed" },
    { value: "Pending", label: "Pending" },
  ];

  const handleStatusOptions = (value) => {
    setSelectedStatus(value);
    
  };

  return (
    <div className={`rounded-xl overflow-x-auto  mx-8  mb-[150px]  ${lightTheme === 'light'? 'bg-[#FFFFFF80]' : 'bg-[#1F293780]'} shadow-lg  py-7 px-6`}>

<div className={`flex flex-col md:flex-row justify-between border-b  ${lightTheme === 'light'? 'border-[#e1e5eb]' : 'border-[#374151]'}`}>
            <h3 className={`font-bold text-lg sm:text-xl  ${lightTheme === 'light'? 'text-[#1F2937]' : 'text-white'} py-2 md:py-7 px-7 `}>{t('Recent Events & Logs')}</h3>
                <div className='flex items-center gap-3 self-end md:self-auto text-sm sm:text-base my-2 md:my-0'>
                    <input type="text" placeholder='Search payments...' className={` border border-[#4B5563] py-2 px-4 rounded-lg  ${lightTheme==='light'? 'shadow text-[#1F2937] placeholder-[#85858f]' : 'text-white placeholder-[#ADAEBC] bg-[#374151]'}`}  />
                    
  <Select options={statusOptions} onSelect={handleStatusOptions} width={'w-[120px]'}/>
                </div>
</div>

    <div className='px-7 mt-4 mb-6'>
    <table className="w-full min-w-[600px] overflow-x-auto ">
      <thead>
        <tr className={`text-base  font-semibold tracking-wide text-left   border-b  ${lightTheme === 'light' ? 'border-[#e1e5eb] text-[#4B5563]' : 'border-[#374151] text-[#9CA3AF]'}  `}>
          <th className="py-2">{t('Transaction ID')}</th>
          <th className="py-2">{t('Payment Method')}</th>
          <th className="py-2">{t('Amount')}</th>
          <th className="py-2">{t('Status')}</th>
          <th className="py-2">{t('Date')}</th>
          <th className="py-2">{t('Actions')}</th>
        </tr>
      </thead>
      <tbody className={` ${lightTheme === 'light'? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
        <tr className={` border-b  ${lightTheme === 'light'? "hover:bg-gray-100 border-[#e1e5eb]" : "hover:bg-gray-800 border-[#374151]"}`}>
          <td className="">
            <div className="flex items-center text-sm">
              <div className="relative  text-[#9CA3AF]  mr-3 rounded-full md:block">
                <p>#TRX-2025-001</p>
              </div>
             
            </div>
          </td>
          <td className=" py-5 text-sm ">
                <span className='flex items-center gap-2'>
                    <img src={lightTheme === 'light'?assets.BankGray : assets.BankWhite} className='w-[14px] h-[14px]' alt="" />
                    Bank Transfer
                </span>
          </td>
          <td className=" py-5 text-sm">
            <span className="px-2 py-1  "> $899.00 </span>
          </td>
          <td className=" py-5 text-sm ">
            <span>Success</span>
          </td>
          <td className=" py-5 text-sm ">
            <span>Jan 15, 2025</span>
          </td>
          <td><span>
            ...
            </span></td>
        </tr>
        <tr className={` border-b  ${lightTheme === 'light'? "hover:bg-gray-100 border-[#e1e5eb]" : "hover:bg-gray-800 border-[#374151]"}`}>
          <td className="">
            <div className="flex items-center text-sm">
              <div className="relative  text-[#9CA3AF]  mr-3 rounded-full md:block">
                <p>#TRX-2025-001</p>
              </div>
             
            </div>
          </td>
          <td className=" py-5 text-sm ">
                <span className='flex items-center gap-2'>
                    <img src={lightTheme === 'light'?assets.BankGray : assets.BankWhite} className='w-[14px] h-[14px]' alt="" />
                    Bank Transfer
                </span>
          </td>
          <td className=" py-5 text-sm">
            <span className="px-2 py-1  "> $899.00 </span>
          </td>
          <td className=" py-5 text-sm ">
            <span>Success</span>
          </td>
          <td className=" py-5 text-sm ">
            <span>Jan 15, 2025</span>
          </td>
          <td><span>
            ...
            </span></td>
        </tr>
        <tr className={` border-b  ${lightTheme === 'light'? "hover:bg-gray-100 border-[#e1e5eb]" : "hover:bg-gray-800 border-[#374151]"}`}>
          <td className="">
            <div className="flex items-center text-sm">
              <div className="relative  text-[#9CA3AF]  mr-3 rounded-full md:block">
                <p>#TRX-2025-001</p>
              </div>
             
            </div>
          </td>
          <td className=" py-5 text-sm ">
                <span className='flex items-center gap-2'>
                    <img src={lightTheme === 'light'?assets.BankGray : assets.BankWhite} className='w-[14px] h-[14px]' alt="" />
                    Bank Transfer
                </span>
          </td>
          <td className=" py-5 text-sm">
            <span className="px-2 py-1  "> $899.00 </span>
          </td>
          <td className=" py-5 text-sm ">
            <span>Success</span>
          </td>
          <td className=" py-5 text-sm ">
            <span>Jan 15, 2025</span>
          </td>
          <td><span>
            ...
            </span></td>
        </tr>
        
        
      </tbody>
    </table>
    </div>
  </div>
  )
}

export default Table