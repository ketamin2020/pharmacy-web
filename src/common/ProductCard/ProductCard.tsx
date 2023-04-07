import React from 'react'
import { priceToView } from 'utils/priceToView'
import Button from 'common/Button/Button'
import img from '../../mockDev/product.png'
import { FavoriteBorder, ShoppingBasket } from '@material-ui/icons'
import { ContentWrapper, ImageWrapper, Wrapper } from './ProductCard.styles'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'routes/types'
interface IProductCard {
  name: string
  status: string
  price: number
  image: string
  id: string
}

const ProductCard = ({ name, status, price, image, id }: IProductCard) => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(`${RoutePath.PRODUCT}/${id}`)
  }
  return (
    <Wrapper onClick={handleNavigate}>
      <ImageWrapper>
        <img src={image || img} alt='' />
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
