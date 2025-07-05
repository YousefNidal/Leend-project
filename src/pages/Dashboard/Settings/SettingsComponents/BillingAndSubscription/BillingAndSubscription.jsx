import React from 'react'

const BillingAndSubscription = ({lightTheme}) => {
  return (
    <div className={`px-6 ${lightTheme === 'light'? '' : ''}`}>
    <div className="flex justify-center items-center  text-center my-8">
      <div ><h3 className={`text-2xl md:text-3xl lg:text-4xl mb-2 font-semibold ${lightTheme === 'light'? '' : 'text-white'}`}>Pricing for all sizes</h3>
      <p className={`sm:w-[500px] ${lightTheme === 'light'? '' : 'text-[#9CA3AF]'}`} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nostrum eum enim alias.</p></div>
    </div>
    <div className="grid grid-cols-3 gap-6 mb-8">
      {[{
        title: "Starter Plan", price: "$10.00", description: 'We getting you to practice some useful nigga team friends, so we...', button: "Get Started", bg: "bg-[#1F293780]", text: "text-white", features: ["Up to 1,000 contacts", "Basic customer tools", "Task automation", "Limited integrations", "Customizable dashboards", "Email support", "24/7 priority support"]
      }, {
        title: "Growth Plan", price: "$79.00", description: 'We getting you to practice some useful nigga team friends, so we...', button: "Get Started", bg: "bg-[#1F293780]", text: "text-white", features: ["Up to 10,000 contacts", "Advanced customer management", "Full workflow automation", "Real-time analytics", "Collaborative team features", "Priority email & chat support", "24/7 priority support"]
      }, {
        title: "Enterprise Plan", price: "Custom", description: 'We getting you to practice some useful nigga team friends, so we...', button: "Get Started", bg: "bg-[#1F293780]", text: "text-white", features: ["Unlimited contacts", "Custom automation", "Dedicated account manager", "Full API access", "Advanced reporting & insights", "24/7 priority support", "24/7 priority support"]
      }].map((plan, index) => (
        <div key={index} className={`py-6 rounded-lg shadow-md   ${lightTheme === 'light'? 'border' : `${plan.bg} ${plan.text}`} `}>
          <h4 className={`text-sm mb-4 px-6 ${lightTheme === 'light'? 'text-purple-600' : 'text-purple-400'} `}>{plan.title}</h4>
          <p className="text-2xl px-6 font-bold mb-4">{plan.price}<span className="text-sm text-[#9CA3AF]">  /month</span></p>
          <div className={` border-b ${lightTheme === 'light'? 'border-gray-300' : ' border-gray-700'}`}>
            <div className='px-6 pb-8'>
            <p className={`${lightTheme === 'light'? 'text-gray-600' : 'text-[#9CA3AF]'}`}>{plan.description}</p>
            <button className={`w-full mt-4 p-2 border  rounded-md ${lightTheme === 'light'? ' bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white' : `border-purple-800 bg-purple-600 hover:bg-purple-700`} `}>{plan.button}</button>
            </div>
          </div>
          <ul className="mt-2 text-base px-6">
            <h3 className='my-4'>Features</h3>
            {plan.features.map((feature, i) => (
              <li key={i} className={`mt-1 ${lightTheme === 'light'? 'text-gray-600' : 'text-[#9CA3AF]'} mb-3`}> <span className={`mr-3 ${lightTheme === 'light'? 'text-purple-600' : 'text-purple-400'} `}>✔</span> {feature}</li>
            ))}
          </ul>
          
        </div>
      ))}
   
    
      
      
    </div>
  </div>
  )
}

export default BillingAndSubscription