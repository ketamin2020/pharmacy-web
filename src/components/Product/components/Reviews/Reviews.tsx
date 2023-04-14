import React, { useState, useEffect } from 'react'
import Button from 'common/Button/Button'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { isAuthSelector } from 'redux/auth/authSelectors'
import { ReviewsModal } from 'components/Modals/ReviewsModal/ReviewsModal'
import { userSelector } from 'redux/user/userSelectors'
import validator from 'validator'
import notification from 'common/Notification/Notification'
import { createReview, getReviewsByPropertyId } from 'api/review'
import { ReviewItem } from './components/ReviewItem'
export const Reviews = ({ product }) => {
  const user = useSelector(userSelector)
  const isAuth = useSelector(isAuthSelector)
  const initReview = {
    morion: product?.morion,
    property: product?.property?.id,
    anonim: false,
    sourse: 'site',
    status: false,
    email: '',
    text: '',
    rate: '5',
  }

  const [open, setOpen] = useState(false)
  const [review, setReview] = useState(initReview)
  const [rewiewsList, setReviewsList] = useState([])
  const [error, setError] = useState({})

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setError({})
    setReview(initReview)
    setOpen(false)
  }

  const onChangeReview = e => {
    setError({})
    const { name, value } = e.target
    setReview(prev => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    let valid = true
    let newError = {}
    if (!review.email) {
      newError.email = 'Це поле обов"язкове.'
      valid = false
    }
    if (!review.text) {
      newError.text = 'Це поле обов"язкове.'
      valid = false
    }
    if (!validator.isEmail(review.email)) {
      newError.email = 'Введіть вірну email адресу.'
      valid = false
    }

    return { valid, newError }
  }

  const handleCreateReview = async () => {
    const { valid, newError } = validate()
    if (!valid) return setError(newError)
    try {
      const res = await createReview(review)
      setError({})
      setReview(initReview)
      handleClose()
      notification('success', 'Відгук успішно створено!')
    } catch (error) {
      console.log(error)
    }
  }

  const fetchReviewsList = async () => {
    try {
      const res = await getReviewsByPropertyId({ id: product?.property?.id })

      setReviewsList(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (product?.property?.id) fetchReviewsList()
  }, [])

  return (
    <Wrapper>
      <ReviewsBlock>
        {rewiewsList?.map(review => (
          <ReviewItem key={review?.id} review={review} />
        ))}
      </ReviewsBlock>
      <MainBlock>
        <p>
          <strong>Ви вже купували цей товар?</strong>
        </p>
        <Button onClick={handleClickOpen} color='green' shape='square'>
          <p>{isAuth ? 'Залишити відгук' : 'Увійти та залишити відгук'}</p>
        </Button>
      </MainBlock>
      <NotificationBlock>
        <p>
          <strong>Зверніть увагу!</strong>
        </p>
        <p>
          Відгуки покупців, розміщені на даній сторінці, носять суто інформаційний характер, призначені для
          ознайомлювальних цілей і є особистою думкою, а не медичною рекомендацією. Не використовуйте відгуки покупців в
          якості керівництва до дії і показанням для лікування .
        </p>
        <p>Постановка діагнозу і вибір методики лікування здійснюється тільки вашим лікарем!</p>
        <p>
          Всі відгуки та коментарі публікуються відповідно до Політики публікації коментарів і відгуків користувачів
          сайту apteka24.ua.
        </p>
        <p>
          Медмаркет Аптека24 не несе відповідальності за можливі негативні наслідки, що виникли в результаті
          використання інформації, розміщеної на сайті apteka24.ua. Детальніше про Відмову від відповідальності.
        </p>
      </NotificationBlock>
      <ReviewsModal
        handleCreate={handleCreateReview}
        state={review}
        onChange={onChangeReview}
        handleClose={handleClose}
        open={open}
        error={error}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div``

const MainBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const ReviewsBlock = styled.div`
  padding: 20px;
`

const NotificationBlock = styled.div`
  & p {
    font-size: 14px;
  }
`
