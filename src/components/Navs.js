import React from 'react'
import './Navs.css'
const Navs = ({search}) => {

    const onsearch= (words)=>{

        search(words)
    }

  return (
    <div>
      <div className='cont-nav'>
        <div className='row cont-row'>
            <div className='col col-lg-6 col-md-6 '>
                <h2 style={{color:"red"}}>THE BEST NET FLEX</h2>
            </div>
            <div className='col col-lg-6 col-md-6 col-sm-6'>
            
            <input className='form-control inp' type='text' onChange={(e)=>onsearch(e.target.value)} placeholder='Enter Name Of Movie'/>
            
            </div>
        </div>

      </div>
    </div>
  )
}

export default Navs;
