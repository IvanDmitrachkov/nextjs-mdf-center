// packages
import React from 'react'
import _ from 'lodash'
import CardService from 'components/CardService/CardService'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { ANCHOR_SERVICES } from 'constants/anchors'

const HomeServices = () => {
  const { data: services } = useQuery(
    ['home-services'],
    async () => {
      const { data } = await axios.get('api/home-services.json')
      return data
    })

  return (
    <div className='wrapper' id={ANCHOR_SERVICES}>
      <h2 className='title-h2'>Услуги</h2>
      <ul className='flex flex-wrap md:-mx-gutter'>
        {_.map(services, (item, key) => (
          <li key={key} className='w-1/3 lg:p-40 md:p-gutter sm:w-full sm:px-0 sm:py-24'>
            <CardService {...item} />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default HomeServices
