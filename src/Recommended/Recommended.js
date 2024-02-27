import React from 'react'
import './Recommended.css'

const Recommended = ({handleClick}) => {
  return (
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className="recommended-flex">
        <button onClick={handleClick} value="" className="btns">All Products</button>
        <button onClick={handleClick} value="Nike" className="btns">Nike</button>
        <button onClick={handleClick} value="Adidas" className="btns">Adidas</button>
        <button onClick={handleClick} value="Puma" className="btns">Puma</button>
        <button onClick={handleClick} value="Vans" className="btns">Vans</button>
      </div>
    </div>
  )
}

export default Recommended
