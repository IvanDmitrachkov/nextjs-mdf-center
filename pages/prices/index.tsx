// packages
import React from 'react'
import Banner from 'components/Banner/Banner'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import css from 'pages/prices/pagePrices.module.css'
import cn from 'classnames'
import PriceGroup from './PriceGroup'

const PagePrices = () => {
  const { data: banner } = useQuery(
    ['banner-home'],
    async () => {
      const { data } = await axios.get('api/prices-banner.json')
      return data
    })

  const { data: prices } = useQuery(
    ['prices'],
    async () => {
      const { data } = await axios.get('api/prices.json')
      return data
    })

  const { data: pricesInfo } = useQuery(
    ['prices-info'],
    async () => {
      const { data } = await axios.get('api/prices-info.json')
      return data
    })

  return (
    <div>
      <Banner {...banner} />
      <div className={cn('wrapper py-64 sm:overflow-auto', css.container)}>
        {prices?.map(({ title, categories }, key) => (
          <div key={key} className='w-2/3 md:w-full sm:w-full'>
            <h2 className='text-32 mt-64 mb-32 font-medium'>{title}</h2>
            {
                categories?.map(({ products, title: catTitle }, catKey) => (
                <PriceGroup title={catTitle} products={products} key={catKey} />
                ))
            }
          </div>
        ))}
      </div>
      <ul className='wrapper list pb-64'>
        {pricesInfo?.advantages?.map((item, key) => (
          <li key={key} className='text-24 mb-24'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default PagePrices
