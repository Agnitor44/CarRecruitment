
import React, {useEffect, useState, useRef} from 'react'

export default function FormPlus({setData}) {
    const [names, setNames] = useState(null)
    const [namesDisplay, setNamesDisplay] = useState(null)
    const inpRef = useRef()
    useEffect(() => {
      fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json').then(res => res.json()).then(data => setNames(data.Results.map(item => item.Make_Name)))
    }, [])
    const handleChange = () => {
        if(!inpRef.current.value) return setNamesDisplay(null)
      if(namesDisplay && namesDisplay.find(item => item === inpRef.current.value)) return setNamesDisplay(null)
        setNamesDisplay(names.filter(item =>  item.toLowerCase().startsWith(inpRef.current.value.toLowerCase())))
        
    }

    const handleSub = (e) => {
      e.preventDefault()
      fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${inpRef.current.value}?format=json`).then(res => res.json()).then(data =>{
        setData(data)
        return data
      } )
      
    }

    return (
    
        <form autocomplete="off" onSubmit = {handleSub} >
    <div class="autocomplete" >
      <input onChange = {handleChange} ref = {inpRef} id="myInput" type="text" name="myNames" placeholder="Name"/>
    
      {namesDisplay &&
      <ul>
  
      {namesDisplay.slice(0, 10).map(item => (
        <li onClick = {() => {
          setNamesDisplay(null)
          inpRef.current.value = item
        } }>{item}</li>
      ))}
      
      </ul>
      }
    </div>
   <button data-testid = 'button'>Search</button>
  </form>
  
    );
  }
