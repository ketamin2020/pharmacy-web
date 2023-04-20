import React from 'react'
import { useDispatch } from 'react-redux'
import { priceToView } from 'utils/priceToView'
import Button from 'common/Button/Button'
import img from '../../mockDev/product.png'
import { FavoriteBorder, ShoppingBasket } from '@material-ui/icons'
import { ContentWrapper, ImageWrapper, Wrapper } from './ProductCard.styles'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'routes/types'
import { postNewWish } from 'redux/wish/wishOperation'
interface IProductCard {
  name: string
  status: string
  price: number
  image: string
  id: string
}

const ProductCard = ({ name, status, price, image, id }: IProductCard) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleNavigate = () => {
    navigate(`${RoutePath.PRODUCT}/${id}`)
  }

  const handleAddToWishList = id => {
    dispatch(postNewWish(id))
  }
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={image || img} alt='' />
        <span onClick={() => handleAddToWishList(id)} className='favorite-icon'>
          <FavoriteBorder />
        </span>
      </ImageWrapper>
      <ContentWrapper>
        <p onClick={handleNavigate} className='product-name'>
          {name}
        </p>
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
