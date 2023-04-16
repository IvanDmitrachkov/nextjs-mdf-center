// packages
import React from 'react'
import _ from 'lodash'
import CardFacade from 'components/CardFacade/CardFacade'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { ANCHOR_FACADES } from 'constants/anchors'
import { PAGE_PRICES } from 'constants/PAGES'
import { MdArrowForward } from 'react-icons/md'
import Link from 'components/Link/Link'

const HomeFacades = () => {
  const { data: facadeList } = useQuery(
    ['home-facades'],
    async () => {
      const { data } = await axios.get('api/home-facades.json')
      return data
    })

  return (
    <div className='wrapper' id={ANCHOR_FACADES}>
      <h2 className='title-h2'>Фасады</h2>
      <ul className='flex -mx-gutter flex-wrap'>
        {_.map(facadeList, (item, key) => (
          <li key={key} className='w-1/3 p-gutter sm:w-full'>
            <CardFacade {...item} />
          </li>
        ))}
      </ul>
      <Link href={PAGE_PRICES}>
        <a className='flex items-center mt-40 text-24 font-medium'>
        Показать все цены
        <MdArrowForward className='ml-16 text-48' />
        </a>
      </Link>
    </div>
  )
}
export default HomeFacades
