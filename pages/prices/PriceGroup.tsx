import React, { useState } from 'react'
import PropTypes from 'prop-types'

const PriceGroup = ({ products, title }) => {
  const [isOpen, setIsOpen] = useState(false)

  // показывать ли кнопку показать еще
  const showButtonAll = products?.length > 3

  // видимые продукты
  const visibleProducts = (isOpen && showButtonAll) ? products : products?.slice(0, 3)

  return (
        <div className='mb-100'>
            <h3 className='text-24 mt-40 mb-24 font-medium'>{title}</h3>
                <table>
                <thead>
                <tr>
                    <th>Наименование</th>
                    <th>Цена, руб.</th>
                    <th>Срок, дней</th>
                </tr>
                </thead>
                <tbody>
                {
                    visibleProducts?.map((product, prodKey) => (
                        <tr key={prodKey}>
                            <td dangerouslySetInnerHTML={{ __html: product.title }}/>
                            <td>{product.price}</td>
                            <td>{product.term}</td>
                        </tr>

                    ))
                }
                </tbody>
                </table>
            {showButtonAll &&
                <div
                    className='text-18 font-medium mt-16 cursor-pointer underline'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? 'Скрыть' : 'Показать все'}
                </div>}
        </div>
  )
}

PriceGroup.propTypes = {
  products: PropTypes.array,
  title: PropTypes.string
}

export default PriceGroup
