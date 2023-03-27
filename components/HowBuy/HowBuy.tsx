// packages
import React, { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { FaVk, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import _ from 'lodash'
import { ANCHOR_CONTACTS } from 'constants/anchors'

const HowBuy = () => {
  const { data: contacts = {} } = useQuery(
    'contacts',
    async () => {
      const { data } = await axios.get('api/contacts.json')
      return data
    })

  const list = useMemo(() => [
    {
      icon: FaPhone,
      title: 'По номеру телефона',
      value: contacts.phone,
      link: `tel:${contacts.phone}`
    },
    {
      icon: FaVk,
      title: 'Группа ВКонтакте',
      target: '_blank',
      value: contacts.vk,
      link: contacts.vk
    },
    {
      icon: MdEmail,
      title: 'По Email',
      value: contacts.email
    },
    {
      icon: FaWhatsapp,
      title: 'Whatsapp, Viber',
      value: contacts.whatsapp
    },
    {
      icon: MdLocationOn,
      title: 'Придите к нам лично',
      value: contacts.address
    }
  ], [contacts])

  return (
    <div className='wrapper' id={ANCHOR_CONTACTS}>
      <h2 className='title-h2'>Для заказа свяжитесь с нами</h2>
      <ul>
        {_.map(list, (item, key) => (
          <li className='mb-64' key={key}>
            <a className='inline-flex items-center' href={item.link} target={item.target}>
              <div className='w-40'>
                {item.icon && React.createElement(item.icon, { className: 'text-48 mr-24 text-black sm:text-32' })}
              </div>
              <h3>
                <div className='text-18 mb-8 sm:text-14'>{item.title}</div>
                <div className='text-32 font-bold sm:text-24'>{item.value}</div>
              </h3>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default HowBuy
