import { assets } from "../../assets/frontend_assets/assets"
import React, { useContext, useState } from 'react';
import SupportCard from "../../components/SupportCard/SupportCard";
import Question from "../../components/Question/Question";
import NavSupport from "../../components/NavSupport/NavSupport";
import { LeyndContext } from "../../context/LeyndContext";
import { useTranslation } from "react-i18next";

const Support = () => {
    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
      };
      const {lightTheme} = useContext(LeyndContext)
      const {t} = useTranslation()


      
 
 return (
    <>
        <NavSupport />
        <div className={`min-h-screen  text-white ${lightTheme === 'light'? '' : 'bg-[#111827]'}`}>
      <div className={`  py-8`}>
        <div className={`px-[36px] md:px-[76px] lg:px-[96px] mx-auto `}>
            <div className={`text-center mb-9 mt-8`}>
          <h1 className={`text-4xl font-bold mb-4 ${lightTheme === 'light'? 'text-[#1F2937]' : 'text-white'}`}>{t('How can we help you today?')}</h1>
          <p className={` text-base ${lightTheme === 'light'? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>{t('Access our support')}</p>
        </div>
        

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 lg:px-[60px] xl:px-[160px] ${lightTheme === 'light'? 'text-[#1F2937]' : 'text-white'}`}>
          <div className={`p-6 rounded-lg`}>
            <h3 className={`text-xl font-bold mb-4 text-center `}>{t('Generate Support Ticket')}</h3>
            <input
              type="text"
              placeholder="Reason for contact"
              className={`w-full p-2 mb-4 shadow border ${lightTheme === 'light'? "bg-[#FFFFFFB2] text-[#1F2937]" : "border-[#374151] placeholder-[#ADAEBC] bg-[#1F2937]"} rounded-lg placeholder-[#ADAEBC]`}
            />
            <textarea
              placeholder="Brief description of your issue"
              className={`w-full p-2 mb-4  border ${lightTheme === 'light'? "bg-[#FFFFFFB2] text-[#1F2937]" : "border-[#374151] placeholder-[#ADAEBC] bg-[#1F2937]"} rounded-lg focus:outline-none`}
              rows="4"
            ></textarea>
            <div className="mb-4">
              <label className={`flex flex-col items-center justify-center border-2 border-dashed ${lightTheme === 'light'? '' : 'border-gray-600'}  p-6 rounded-lg cursor-pointer hover:border-gray-500`}>
                             {lightTheme === 'light'? 
                              <svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75 21C3.02344 21 0 17.9766 0 14.25C0 11.3063 1.88437 8.80313 4.50937 7.87969C4.50469 7.75313 4.5 7.62656 4.5 7.5C4.5 3.35625 7.85625 0 12 0C14.7797 0 17.2031 1.50937 18.5016 3.75937C19.2141 3.28125 20.0766 3 21 3C23.4844 3 25.5 5.01562 25.5 7.5C25.5 8.07187 25.3922 8.61563 25.2 9.12188C27.9375 9.675 30 12.0984 30 15C30 18.3141 27.3141 21 24 21H6.75ZM10.4531 10.8281C10.0125 11.2687 10.0125 11.9812 10.4531 12.4172C10.8937 12.8531 11.6062 12.8578 12.0422 12.4172L13.8703 10.5891V16.875C13.8703 17.4984 14.3719 18 14.9953 18C15.6187 18 16.1203 17.4984 16.1203 16.875V10.5891L17.9484 12.4172C18.3891 12.8578 19.1016 12.8578 19.5375 12.4172C19.9734 11.9766 19.9781 11.2641 19.5375 10.8281L15.7875 7.07812C15.3469 6.6375 14.6344 6.6375 14.1984 7.07812L10.4484 10.8281H10.4531Z" fill="#1F2937"/>
</svg>


                            : <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.75 21.5C3.02344 21.5 0 18.4766 0 14.75C0 11.8062 1.88437 9.30313 4.50937 8.37969C4.50469 8.25313 4.5 8.12656 4.5 8C4.5 3.85625 7.85625 0.5 12 0.5C14.7797 0.5 17.2031 2.00937 18.5016 4.25937C19.2141 3.78125 20.0766 3.5 21 3.5C23.4844 3.5 25.5 5.51562 25.5 8C25.5 8.57187 25.3922 9.11563 25.2 9.62188C27.9375 10.175 30 12.5984 30 15.5C30 18.8141 27.3141 21.5 24 21.5H6.75ZM10.4531 11.3281C10.0125 11.7688 10.0125 12.4812 10.4531 12.9172C10.8938 13.3531 11.6062 13.3578 12.0422 12.9172L13.8703 11.0891V17.375C13.8703 17.9984 14.3719 18.5 14.9953 18.5C15.6187 18.5 16.1203 17.9984 16.1203 17.375V11.0891L17.9484 12.9172C18.3891 13.3578 19.1016 13.3578 19.5375 12.9172C19.9734 12.4766 19.9781 11.7641 19.5375 11.3281L15.7875 7.57812C15.3469 7.1375 14.6344 7.1375 14.1984 7.57812L10.4484 11.3281H10.4531Z" fill="#9CA3AF"/>
                    </svg>
                            }   

                <span className={` text-sm ${lightTheme === 'light'? 'text-[#1F2937]' : 'text-[#9CA3AF]'}`}>{t('Drop files here or click to upload')}</span>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <span className={`text-[#6B7280] text-xs`}>Optional attachment (Max 10MB)</span>
              </label>
              
            </div>
            <button className={` w-full text-white font-bold py-2 px-4 rounded-lg transition-[0.4s] ${lightTheme === 'light'? 'bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]' : "bg-[#4F46E5] hover:bg-[#352fa8]"}`}>
              {t('Generate Ticket')}
            </button>
          </div>

          <div className={` p-6 rounded-lg`}>
            <h3 className={`text-xl font-bold mb-4 text-center`}>{t('Access Your Ticket')}</h3>
            <input
              type="text"
              placeholder="Enter your support token"
              className={`w-full p-2 mb-4 shadow border ${lightTheme === 'light'? "bg-[#FFFFFFB2] text-[#1F2937]" : "border-[#374151] placeholder-[#ADAEBC] bg-[#1F2937]"} rounded-lg`}
            />
            <button className={`${lightTheme === 'light'? 'bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]' : "bg-[#4F46E5] hover:bg-[#352fa8]"} w-full text-white font-bold mb-3 py-2 px-4 rounded-lg`}>
              {t('Access Support')}
            </button>
            <p className={` text-sm  text-center ${lightTheme === 'light'? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>{t('Enter the token')}</p>
          </div>
        </div>
        </div>
        
        <div className={`border-t border-[#E5E7EB] w-full rounded-lg h-5 my-[100px]`}></div>

        <div className={`px-[36px] md:px-[76px] lg:px-[96px] mx-auto `}>
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  mb-8`}>
          
            
            <SupportCard svg={ lightTheme === 'light'? assets.RacketBlack:assets.racket} title={t('Platform Basics')} description={t('For businesses')} articles={8} />
            <SupportCard svg={ lightTheme === 'light'? assets.ChartBlack :assets.chart} title={t('Business Dash')} description={t('In-depth')} articles={10} />
            <SupportCard svg={ lightTheme === 'light'? assets.VisaCardBlack :assets.visaCard} title={t('Payment Integrations')} description={t('Detailed articles')} articles={7} />
            <SupportCard svg={lightTheme === 'light'? assets.ShieldBlack: assets.shieldFull} title={t('Legal Policies')} description={t('Platform trust')} articles={6} />
        
        </div>

        <div className={`mb-8 flex items-center justify-center mt-14`}>
          <div>
          <h3 className={`text-2xl font-bold mb-9 ${lightTheme === 'light'? 'text-[#1F2937]' : ''}`}>{t('Frequently Asked Questions')}</h3>
         
         <div>
         <Question question={t('How does anonymous payment processing work?')} description={t('Our system')}/>
         <Question question={t('What payment methods are supported?')} description={t('We support')}/>
         <Question question={t('How are transaction fees calculated?')} description={t('Fees are based')}/>
         <Question question={t('What security measures are in place?')} description={t('We employ')}/>
         </div>
          </div>
          
        </div>

        </div>
        
        
      </div>

      <div className={`text-center  border-t  py-9 ${lightTheme === 'light'? "text-[#4B5563]" : "text-[#9CA3AF] border-[#1F2937]"}`}>
          <p className={``}>© 2025 Leynd. All rights reserved.</p>
        </div>
    </div>
    
    </>
  )
}

export default Support