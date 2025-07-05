import { useContext, useState } from "react";
import BillingAndSubscription from "./SettingsComponents/BillingAndSubscription/BillingAndSubscription";
import { LeyndContext } from "../../../context/LeyndContext";






const Settings = () => {

    const [activeTab, setActiveTab] = useState("Billing & Subscription");
    const {lightTheme} = useContext(LeyndContext)

    const renderContent = () => {
      switch (activeTab) {
        case "Account":
          return <div className="p-6">Account Settings Content</div>;
        case "Team Management":
          return <div className="p-6">Team Management Content</div>;
        case "Preferences":
          return <div className="p-6">Preferences Content</div>;
        case "Integration":
          return <div className="p-6">Integration Settings Content</div>;
        case "Billing & Subscription":
          return (
           <BillingAndSubscription lightTheme = {lightTheme} />
          );
        case "Security":
          return <div className="p-6">Security Settings Content</div>;
        case "Report & Analytics":
          return <div className="p-6">Report & Analytics Content</div>;
        default:
          return <div className="p-6">Select a setting to view details.</div>;
      }
    };
  
    return (
      <div className={`p-6 w-full ${lightTheme === 'light'? 'bg-[#FFFFFF80]' : 'bg-[#111827]'} w-full py-8 px-8  `}>
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-xl sm:text-2xl ${lightTheme ==='light' ? '' : 'text-white'} font-semibold`}>Settings</h2>
          <div>
            <button className={`px-4 py-2  ${lightTheme==='light'? ' bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white' : 'bg-[#4B5563] text-white'}  rounded-md `}>Cancel</button>
            <button className={`ml-2 px-4 py-2   rounded-md ${lightTheme==='light'? 'text-white bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]':"bg-[#1F2937] text-white"} `}>Save Changes</button>
          </div>
        </div>
        <div className={`flex space-x-4 border-b pb-3 mb-6 ${lightTheme === 'light'? '' : 'border-gray-700'} `}>
          {["Account", "Team Management", "Preferences", "Integration", "Billing & Subscription", "Security", "Report & Analytics"].map((tab, index) => (
            <button 
              key={index} 
              className={` ${lightTheme==='light'? `${tab === activeTab ? "font-semibold border-b-2 border-black" : "text-gray-600 hover:text-black"}` : `${tab === activeTab ? "font-semibold border-b-2 border-gray-700 text-white" : "text-white hover:text-gray-400"}`}`} 
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        {renderContent()}
      </div>
    );
}

export default Settings