import React from 'react'
import "./scss/filter.scss"
import Search from './Search'
const Filter = () => {
  return (
    <div className="filter">
        <Search/>
        <div>стоимость</div>
        <div>сортировка</div>


    </div>
  )
}

export default Filter