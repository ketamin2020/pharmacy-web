import React from 'react'
import { priceToView } from 'utils/priceToView'
import Button from 'common/Button/Button'
import img from '../../mockDev/product.png'
import { FavoriteBorder, ShoppingBasket } from '@material-ui/icons'
import { ContentWrapper, ImageWrapper, Wrapper } from './ProductCard.styles'

interface IProductCard {
  name: string
  status: string
  price: number
}

const ProductCard = ({ name, status, price }: IProductCard) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={img} alt='' />
        <span className='favorite-icon'>
          <FavoriteBorder />
        </span>
      </ImageWrapper>
      <ContentWrapper>
        <p className='product-name'>{name}</p>
        <p className='product-price'>{priceToView(price)}</p>
        <p className='product-status'>{status}</p>
        <Button color='green' shape='square' buttonCustomClass='product-basket'>
          <p>
            <ShoppingBasket /> Добавити в кошик
          </p>
        </Button>
      </ContentWrapper>
    </Wrapper>
  )
}

export { ProductCard, IProductCard }
