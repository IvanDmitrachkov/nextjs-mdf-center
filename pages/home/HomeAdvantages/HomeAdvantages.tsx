// packages
import React from 'react'
import _ from 'lodash'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const HomeAdvantages = () => {
  const { data: advantages } = useQuery(
    ['home-advantages'],
    async () => {
      const { data } = await axios.get('api/home-advantages.json')
      return data
    })

  return (
    <div className='wrapper'>
      <ul className='flex flex-wrap'>
        {_.map(advantages, (item, key) => (
          <li key={key} className='w-1/3 p-40 sm:w-full sm:px-0 sm:py-24 flex flex-col items-center text-center'>
            <img className='h-120 object-contain w-full mb-16' src={item.image} alt='' />
            <h3 className='text-32 font-bold mb-8'>{item.title}</h3>
            <div className='text-18'>{item.text}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default HomeAdvantages
