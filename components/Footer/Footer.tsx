// packages
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const Footer = () => {
  const { data: contacts = {} } = useQuery(
    'contacts',
    async () => {
      const { data } = await axios.get('api/contacts.json')
      return data
    })

  return (
    <div className='bg-black py-64'>
      <div className='wrapper text-white'>
        <h2 className='title-h2'>Фасады Сысолы</h2>
        <div className='h-2 bg-red w-1/3 mb-24' />
        <ul className='text-24'>
          <li className='mb-16'>
            {contacts.phone}
          </li>
          <li className='mb-16'>
            {contacts.address}
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Footer
