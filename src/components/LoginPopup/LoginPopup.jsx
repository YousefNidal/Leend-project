import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import './LoginPopup.css'
import { LeyndContext } from '../../context/LeyndContext'
import { Trans, useTranslation } from 'react-i18next'


const LoginPopup = ({setShowLogin}) => {

    const [currentState,SetCurrentState] = useState("Login")
    const [generateState, setGenerateState] = useState('sign')
    const [accountHash, setAccountCash] = useState('6K6RFDB8');
    const [password, setPassword] = useState('')
    const [form, setForm] = useState({
        hash: '',
        password: ''
    });
    const {lightTheme} = useContext(LeyndContext)
    const {t} = useTranslation()


  const handleCopyHash = () => {
    navigator.clipboard.writeText(accountHash)
     
  };
  const handleHashChange = (e) => {
    const hash = e.target.value;
    setForm({
        ...form,
        hash: hash
    });
};

const handlePasswordChange = (e) => {
    const passwordVal = e.target.value;
    setForm({
        ...form,
        password: passwordVal
    });
};

  useEffect(()=> {

    console.log(form)
 
  },[form])
 

  return (
    <div className='login-popup'>

            <form className={`login-popup-container ${lightTheme === 'light'? 'bg-white' : 'bg-[#111827F2]' } `}>
                <div className="login-popup-title">
                    {generateState === 'sign' ?<h2 className={`${lightTheme==='light'? 'text-[#1F2937]':'text-white'}`}> {t(`${currentState}`)}</h2> : <div></div> }
                    
                    <img onClick={()=> {
                        setShowLogin(false)
                        setGenerateState('sign')
                    }} src={assets.cross} alt="" />
                </div>
               {
                generateState === 'sign'?
                <>
                 <div className="login-popup-inputs">
                        {currentState === "Login"?<input className={`${lightTheme === 'light'? '' : 'bg-[#37415180] outline-none border-none text-white'}`} type="text" placeholder='Account Hash'
                     value={form.hash}
                     onChange={(e)=>handleHashChange(e)}
                    required/> : <div>
                        <p className={`text-base ${lightTheme === 'light'? 'text-[#1F2937]' : 'text-white'} `}>{t('Enter password')}</p>
                        </div>}
                    
                   {currentState=== 'Login'?<input className={`${lightTheme === 'light'? '' : 'bg-[#37415180] outline-none border-none text-white'}`} type="password" placeholder='Password' 
                    
                    value={form.password}
                    onChange={(e)=>handlePasswordChange(e)}
                    
                    required/> : <input className={`${lightTheme === 'light'? '' : 'bg-[#37415180] outline-none border-none text-white'}`} type="password" placeholder='Password' 
                    
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    
                    required/>} 


                </div>

                        {currentState === "Login"? <button className={`${lightTheme === 'light'? 'bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]' : 'bg-[#4F46E5]'}`}> {t('Login')} </button>: 
                        <button className={`${lightTheme === 'light'? 'bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]' : 'bg-[#4F46E5]'}`} onClick={()=> setGenerateState('generate')} disabled={false}> {t('Create account')} </button>}

                
                
               {currentState === "Sign Up"?  <div className="login-popup-condition text-center">
                    
                    <Trans className='text-center' i18nKey={'By proceeding'}>By proceeding, you agree that you have read and accepted the <span className='font-semibold underline'>Privacy Policy</span> and <span className='font-semibold underline'>Terms of Service.</span></Trans>
                </div> : <></>}
                {  currentState === "Login"?
                
                <p className={`${lightTheme === 'light'? 'text-[#1F2937]' : 'text-white'}`}>{t('Create a new account')} <span className='text-[#4F46E5] cursor-pointer' onClick={()=> SetCurrentState("Sign Up")}>{t('Click here')}</span></p> :
                <p className={`${lightTheme === 'light'? 'text-[#1F2937]' : 'text-white'}`}>{t('Already have an account')} <span className='text-[#4F46E5] cursor-pointer' onClick={()=> SetCurrentState("Login")}>{t('Login here')}</span></p>
                
                
                   
        
            }
                </>
                : <div className='text-center'>
                 <p className='mb-3'><span className={`no-underline  text-bold ${lightTheme === 'light'? 'text-black' : 'text-white'}`}  >{t('Welcome to Leynd!')}</span> {t('We hope you enjoy')} <br /> {t('your stay')}.</p>
                <p className='mb-3  '>{t('First, of all')} <br /> <span className={` no-underline ${lightTheme === 'light'? 'text-black' : 'text-white'} font-bold `}>{t('Account Hash')}:</span></p>
                <h4 className={`mb-3  font-semibold ${lightTheme === 'light'? 'text-black' : 'text-white'} `} >
                    <p className={`inline-flex cursor-pointer items-center gap-1  `} onClick={handleCopyHash}>{accountHash}

                        <span><svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.00029 4.08525L4 10.5C4 11.8255 5.03154 12.91 6.33562 12.9947L6.5 13L10.9144 13.0007C10.7083 13.5829 10.1528 14 9.5 14H6C4.34315 14 3 12.6569 3 11V5.5C3 4.84678 3.41754 4.29109 4.00029 4.08525ZM11.5 2C12.3284 2 13 2.67157 13 3.5V10.5C13 11.3284 12.3284 12 11.5 12H6.5C5.67157 12 5 11.3284 5 10.5V3.5C5 2.67157 5.67157 2 6.5 2H11.5ZM11.5 3H6.5C6.22386 3 6 3.22386 6 3.5V10.5C6 10.7761 6.22386 11 6.5 11H11.5C11.7761 11 12 10.7761 12 10.5V3.5C12 3.22386 11.7761 3 11.5 3Z" fill="#9CA3AF"/>
</svg>
</span>
                    </p>
                    
                   
                    </h4>
                <p className={`${lightTheme === 'light'? '' : ''}`}>{t('')}</p>

                    <button className={`border mt-3 `}  style={{padding:"4px 16px", border:"1px solid #374151", color:`${lightTheme === 'light'? 'black' : 'white'}`}}
                    onClick={()=> {
                        setShowLogin(false)
                        setGenerateState('sign')
                    }}
                    >{t('got it')}</button></div>
               }
                
                
            </form>

    </div>
  )
}

export default LoginPopup