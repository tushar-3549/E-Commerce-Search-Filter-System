import React from 'react'
import './Category.css'
import Input from '../../components/Input'


const Category = ({ handleChange }) => {
  return (
    <div>
      <h4 className="sidebar-title">Category</h4>

      <div>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />

        <Input
          handleChange={handleChange}
          value="flats"
          title="Falts"
          name="test"
        />

        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />

        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />



        {/* <Input />
        <Input />
        <Input /> */}

        {/* <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>All
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span> Sneakers
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Flats
        </label>

        <label className="sidebar-label-container">
          <input type="radio" value="" name="test" />
          <span className="checkmark"></span>Sandals
        </label>

        <label className="sidebar-label-container">
          <input type="radio" value="" name="test" />
          <span className="checkmark"></span>Heels
        </label> */}

      </div>

    </div>
  )
}

export default Category