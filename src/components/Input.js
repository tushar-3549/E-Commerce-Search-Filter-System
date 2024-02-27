import React from 'react'

const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <div>
      <label className="sidebar-label-container">
        {/* <input type="radio" name='test2' />
        <span className='checkmark'></span>All */}
        <input onChange={handleChange} type="radio" value={value} name={name} />
        <span className="checkmark" style={{ backgroundColor: color }}></span> {title}
      </label>

    </div>
  )
}

export default Input