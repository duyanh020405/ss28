import React, { useState } from 'react'

export default function Bt9() {
    const [theme,changeTheme]=useState<string>("Light")
    const [language, changeLanguage]=useState<string>("English")
    const change=()=>{
        if(theme==="Light"){
            changeTheme("Dark")
            changeLanguage("Vietnamese")
        }
        else{
            changeTheme("Light")
            changeLanguage("English")
        }

    }
  return (
    <div><h4>Bai 9</h4>
        <p>Theme :{theme}</p>
        <p>Language :{language}</p>
        <button onClick={change}>Change</button>
    </div>
  )
}
