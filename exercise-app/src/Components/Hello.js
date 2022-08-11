import React from "react"
import { LanguageContext } from "./LanguageContext"

const Strings = {
    en: {
        CURRENT_TEXT:"Hello, World!"
    },
    it: {
        CURRENT_TEXT:"Ciao, Mondo!"
    }
}
export default class Hello extends React.Component{
render() {
return (
<div>
    <LanguageContext.Consumer>
        {Language =>{
            return(
                <div>
                    <h1>  {Strings[language].CURRENT_TEXT} </h1>
                </div>
            )
        }}
      
    </LanguageContext.Consumer>
       
</div>
)
}
}