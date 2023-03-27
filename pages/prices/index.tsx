// packages
import React from 'react'
import Banner from 'components/Banner/Banner'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import css from 'pages/prices/pagePrices.module.css'
import cn from 'classnames'
import PriceGroup from './PriceGroup'
import { IconDownload } from './IconDownload'

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
                <div className='flex justify-between relative sm:flex-col-reverse'>
                    <div className='w-2/3 md:w-full sm:w-full'>
                        {prices?.map(({ title, categories }, key) => (
                            <div key={key}>
                                <h2 className='text-32 mt-64 mb-32 font-medium'>{title}</h2>
                                {
                                    categories?.map(({ products, title: catTitle }, catKey) => (
                                        <PriceGroup title={catTitle} products={products} key={catKey}/>
                                    ))
                                }
                            </div>
                        ))}
                    </div>
                    <div className='mt-64 w-1/3 pl-80 md:pl-40 sm:w-full sm:pl-0'>
                        <a className='text-18 flex items-center sticky top-100 hover:text-gray' href='/files/prays-tekhnichka.docx'>
                            <IconDownload />
                            Скачать файлом
                        </a>
                    </div>
                </div>
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
