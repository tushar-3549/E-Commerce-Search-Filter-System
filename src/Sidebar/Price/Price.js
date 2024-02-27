import React from 'react'
import './Price.css'
import Input from '../../components/Input'

const Price = ({ handleChange }) => {
  return (
    <div className='ml'>
      <h4 className="sidebar-title price-title">Price</h4>

      {/* <Input />
      <Input /> */}

      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test2" />
        <span className="checkmark"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value={50}
        title="$0-$50"
        name="test2"
      />

      <Input
        handleChange={handleChange}
        value={100}
        title="$50-$100"
        name="test2"
      />

      <Input
        handleChange={handleChange}
        value={150}
        title="$100-$150"
        name="test2"
      />

      <Input
        handleChange={handleChange}
        value={200}
        title="Over $150"
        name="test2"
      />






      {/* <label className="sidebar-label-container">
        <input type="radio" name='test2' />
        <span className='checkmark'></span>All
      </label>

      <label className="sidebar-label-container">
        <input type="radio" name='test2' />
        <span className='checkmark'></span> $0-50$
      </label>

      <label className="sidebar-label-container">
        <input type="radio" name='test2' />
        <span className='checkmark'></span>$50-$100
      </label>

      <label className="sidebar-label-container">
        <input type="radio" name='test2' />
        <span className='checkmark'></span>$100-$150
      </label>

      <label className="sidebar-label-container">
        <input type="radio" name='test2' />
        <span className='checkmark'></span>Over $150
      </label>
 */}

    </div>
  )
}

export default Price