import React from 'react'
import './Color.css'
import Input from '../../components/Input'

const Color = ({ handleChange }) => {
  return (
    <div className='mll'>
      <h4 className="sidebar-title color-title">Color</h4>

      <div>
        {/* <Input />
      <Input /> */}

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark all"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
            color="white"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "1px solid black" }}
          ></span>
          White
        </label>

      </div>


      {/* <label className="sidebar-label-container">
        <input type="radio" name='test2' />
        <span className='checkmark'></span>All
      </label>

      <label className="sidebar-label-container">
        <input type="radio" name='test2' />
        <span className='checkmark'></span> Black
      </label>

      <label className="sidebar-label-container">
        <input type="radio" name='test2' />
        <span className='checkmark'></span> Blue
      </label>

      <label className="sidebar-label-container">
        <input type="radio" name='test2' />
        <span className='checkmark'></span> Red 
      </label>

      <label className="sidebar-label-container">
        <input type="radio" name='test2' />
        <span className='checkmark'></span> Green
      </label>

      <label className="sidebar-label-container">
        <input type="radio" name='test2' />
        <span className='checkmark'></span> White
      </label> */}


    </div>
  )
}

export default Color
