import React from 'react'
import './scss/table.scss'
const TableComponents = () => {
  return (
    <div className='border-gray-100 tableCr'>
        <table className='tabl'>
            <thead className='text-blue
              border-gray-100 talth'>
                <tr>
                    <th className='cryptosz'>asset</th>
                    <th className='cryptosz'>name</th>
                    <th className='cryptosz'>price</th>
                    <th className='cryptosz'>total volume</th>
                    <th className='cryptosz'>market cap change</th>
                    <th className='cryptosz'>1H</th>
                    <th className='cryptosz'>24H</th>
                    <th className='cryptosz'>7D</th>
                </tr>
            </thead>
            <tbody>
                <tr className='text-center text-base border-b border-gray-100 
                hover:bg-gray-200 last:border-b-0
                
                '>
                    <td className='cruptot'>asset</td>
                    <td className='cruptot'>name</td>
                    <td className='cruptot'>price</td>
                    <td className='cruptot'>total volume</td>
                    <td className='cruptot'>market cap change</td>
                    <td className='cruptot'>1H</td>
                    <td className='cruptot'>24H</td>
                    <td className='cruptot'>7D</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TableComponents