import React from 'react'
import './Main.css'
import Cards1 from './Cards/Cards1'
import Card2 from './Cards/Card2'
const Main = () => {
  return (
    <>
        <div className="main">
            <div className="container" style={{display:'flex'}}>
                <Cards1/> 
                <Cards1/> 
                <Cards1/> 
                <Cards1/>
            </div>

            <Card2/>
           
            <div className="container" style={{display:'flex'}}>
                <Cards1/> 
                <Cards1/> 
                <Cards1/> 
                <Cards1/>
            </div>

            <div className="container" style={{display:'flex'}}>
                <Cards1/> 
                <Cards1/> 
                <Cards1/> 
                <Cards1/>
            </div>
            <Card2/>
            
        </div>
    </>
  )
}

export default Main