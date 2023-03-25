// packages
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Banner from 'components/Banner/Banner'
import BigSlider from 'components/BigSlider/BigSlider'
import HomeFacades from 'pages/home/HomeFacades/HomeFacades'
import HomeServices from 'pages/home/HomeServices/HomeServices'
import HowBuy from 'components/HowBuy/HowBuy'
import HomeAdvantages from 'pages/home/HomeAdvantages/HomeAdvantages'
import Head from 'next/head'

const HomePage = () => {
  const { data: banner } = useQuery(
    ['banner-home'],
    async () => {
      const { data } = await axios.get('api/banner.json')
      return data
    })

  const { data: slides } = useQuery(
    ['home-slides'],
    async () => {
      const { data } = await axios.get('api/home-slides.json')
      return data
    })

  return (
    <div className='pb-100'>
      <Head>
        <title>Фасады Сысолы - фабрика производства мебельных фасадов</title>
        <meta name='description' content='Продажа крашенных МДФ фасадов собственного производства. Ремонт и покраска фасадов' />
      </Head>
      <Banner {...banner} />
      <div className='mb-100' />
      <HomeFacades />
      <div className='mb-100' />
      <BigSlider slides={slides} />
      <div className='mb-100' />
      <HomeServices />
      <div className='mb-100' />
      <HomeAdvantages />
      <div className='mb-240' />
      <HowBuy />
    </div>
  )
}
export default HomePage
