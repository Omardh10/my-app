import React from 'react'
import './Movieslist.css'
import Cardmov from './Cardmov'
import Paginate from './Paginate'
const Movieslist = ({mov,getpage}) => {
  return (
    <div className='movlist'>
      <div className='container'>
        <div className='row'>
            {mov.length>=1?(mov.map((film)=>{
            return(
                <Cardmov key={film.id} film={film}/>
            )
           })):(<h2 className='text-center' style={{color:"#fff"}}>....لا يوجد افلام</h2>)}
          
        </div>
        {mov.length>=1?(
        <Paginate getpage={getpage}/>):null}
      </div>
    </div>
  )
}

export default Movieslist
