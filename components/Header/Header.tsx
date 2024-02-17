// packages
import React, { useEffect } from 'react'
import { ANCHOR_CONTACTS, ANCHOR_FACADES, ANCHOR_SERVICES } from 'constants/anchors'
import { scrollWindowTo } from 'utils/scrollWindowTo'
import { PAGE_MAIN, PAGE_PRICES } from 'constants/PAGES'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Link from 'components/Link/Link'
import { useRouter } from 'next/router'

const scroll = () => {
  const scrollTop = window.scrollY
  const el = document.getElementById('header')

  if (el) {
    if (document.documentElement.clientWidth >= 768) {
      if (scrollTop > 64) {
        el.classList.add('fixed')
      } else if (scrollTop < 64) {
        el.classList.remove('fixed')
      }
    }
  }
}

const Header = () => {
  const router = useRouter()

  const handleClick = async e => {
    // если это не главная страница, то сначала переходим на главную
    if (router.pathname !== '/') {
      await router.push('/')
    }

    const { value } = e.target
    scrollWindowTo(value)
  }

  useEffect(() => {
    window.addEventListener('scroll', scroll)
    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [])

  const { data: contacts } = useQuery(['contacts'], async () => {
    const { data } = await axios.get('api/contacts.json')
    return data
  })

  return (
    <div className='z-50 absolute left-0 top-0 w-full mt-64'>
       <div id='header' className='sm:fixed bg-white top-0 left-0 w-screen border-solid border-grayLight border-0 border-t-1 border-b-1'>
        <div className='wrapper h-80 flex items-center text-24'>
          <Link href={PAGE_MAIN}>
            <a className='font-bold flex items-center' >
            <img alt='Фасады сысолы' className='h-64 mr-16' src='/logo.png' />
            Фасады Сысолы
            </a>
          </Link>
          <div className='flex ml-auto sm:hidden'>
            <button onClick={handleClick} value={ANCHOR_FACADES} className='link mx-16 inline-block font-medium md:hidden '>фасады</button>
            <button onClick={handleClick} value={ANCHOR_SERVICES} className='link mx-16 inline-block font-medium md:hidden '>услуги</button>
            <button onClick={handleClick} value={ANCHOR_CONTACTS} className='link mx-16 inline-block font-medium md:hidden '>как заказать</button>
            <Link href={PAGE_PRICES}>
              <a className='mx-16 inline-block font-medium'>цены</a>
            </Link>
            <a className='mx-16 inline-block font-medium' href={`tel:${contacts?.phone}`}>{contacts?.phone}</a>
          </div>
        </div>
       </div>
    </div>
  )
}
export default Header
