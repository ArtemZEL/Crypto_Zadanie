import React from 'react'
import "./scss/crypto.scss"
import TableComponents from '../components/TableComponents'
import Filter from '../components/Filter'
const Crypto = () => {
  return (
    <section className='sectTable'>
        <Filter/>
        
        <TableComponents/>

    </section>
  )
}

export default Crypto