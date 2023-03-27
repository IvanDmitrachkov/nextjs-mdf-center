import React from 'react'
import BgImage from 'components/BgImage/BgImage'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { FaInstagram, FaVk, FaWhatsapp } from 'react-icons/fa'

interface IBanner {
  topLeft: string,
  image: string,
  title: string,
  text: string
}

const Banner = ({
  topLeft,
  image,
  title,
  text
}: IBanner) => {
  const { data: contacts } = useQuery(['contacts'], async () => {
    const { data } = await axios.get('api/contacts.json')
    return data
  })

  return (
    <BgImage image={image}>
      <div className='flex flex-col justify-between h-700'
           style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.108083) 35.21%, rgba(0, 0, 0, 0.86) 100%)' }}
      >
              <span>
                  <div
                    className='sm:hidden h-64 flex justify-between items-center wrapper text-18 text-white sm:text-16 sm:flex-col sm:justify-center sm:items-start'
                  >
                      <div>{topLeft}</div>
                      <div>{contacts?.address}</div>
                  </div>
              </span>
        <div className='h-1/2 wrapper relative sm:h-full sm:mt-200'>
          <div className='w-2/3 sm:w-full'>
            <h1 className='text-72 font-medium text-white md:text-48 sm:text-48'>{title}</h1>
            <div className='w-1/3 bg-red h-2 mt-8 sm:w-2/3'/>
            <div className='mt-24 text-white text-24 md:text-18'>{text}</div>
          </div>

          <div className='absolute right-0 w-1/3 bottom-0 text-white text-24 mb-64 sm:w-full sm:pl-16 sm:text-16'>
            <a
              className='flex items-center mb-8' href={contacts?.vk} rel="noreferrer"
              target='_blank'
            >
              <FaVk className='text-32 mr-8'/>
              {contacts?.vk}
            </a>
            <a
              className='flex items-center mb-8' href={contacts?.instagram} rel="noreferrer"
              target='_blank'
            >
              <FaInstagram className='text-32 mr-8'/>
              {contacts?.instagram}
            </a>
            <a
              className='flex items-center' href={contacts?.instagram} rel="noreferrer"
              target='_blank'
            >
              <FaWhatsapp className='text-32 mr-8'/>
              {contacts?.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </BgImage>
  )
}
export default React.memo(Banner)
