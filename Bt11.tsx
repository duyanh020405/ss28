import React, { useState } from 'react'

export default function Bt9() {
    const [theme,changeTheme]=useState<string>("Light")
    const [language, changeLanguage]=useState<string>("Rikkei Soft")
    const change=()=>{
        if(theme==="Light"){
            changeTheme("Dark")
            changeLanguage("Rikkei Academy")
        }
        else{
            changeTheme("Light")
            changeLanguage("Rikkei Soft")
        }

    }
  return (
    <div><h4>Bai11</h4>
        <p>Cong ty : {language}</p>
        <button onClick={change}>Change</button>
    </div>
  )
}
