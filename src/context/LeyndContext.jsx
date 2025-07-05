import { createContext, useEffect, useState } from "react"
import { useTranslation } from 'react-i18next';


export const LeyndContext = createContext()


const LeyndContextProvider = (props) => {
    const [lightTheme, setLightTheme] = useState('')
    const [language, setLanguage] = useState('')

    useEffect(()=> {
        const getTheme = window.localStorage.getItem('Theme')
        const getLang = window.localStorage.getItem('Language')
        if(getTheme && getLang){
            try{
                const parsedTheme = JSON.parse(getTheme)
                const parsedLanguage = JSON.parse(getLang)
                if(parsedTheme === 'dark' || parsedTheme ==='light') {
                    setLightTheme(parsedTheme)
                }
                if(parsedLanguage === 'en' || parsedLanguage ==='ice'){
                        setLanguage(parsedLanguage)
                }
            } 
            catch(err) {
                console.log(err)
            }
        }
    },[])
    const { i18n } = useTranslation();

    useEffect(()=> {

        window.localStorage.setItem('Theme', JSON.stringify(lightTheme))
},[lightTheme])

useEffect(()=> {

    window.localStorage.setItem('Language', JSON.stringify(language))
    i18n.changeLanguage(language)
    
},[language])


    const contextValue = {
        lightTheme,
        setLightTheme,
        language,
        setLanguage
    }


    return (
        <LeyndContext.Provider value={contextValue}>
            {props.children}
        </LeyndContext.Provider>
    )
}


export default LeyndContextProvider