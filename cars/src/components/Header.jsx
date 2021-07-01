import React from 'react'
import FormPlus from './FormPlus'
import '../styles/App.css'
export default function Header({setData}) {
    return (
      <header className="head">
        <h1>Car Finder</h1>
          <div className="formZone">
              <FormPlus setData = {setData}/>
          </div>
      </header>
    )
}
