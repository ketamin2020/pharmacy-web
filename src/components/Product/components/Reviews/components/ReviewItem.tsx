import React from 'react'
import styled from '@emotion/styled'
import { Avatar } from 'common/Avatar/Avatar'
import moment from 'moment'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import { ThumbDown } from '@material-ui/icons'
import { ThumbUp } from '@material-ui/icons'
import { Reply } from '@material-ui/icons'
import 'moment/locale/uk'
function formatDate(dateString) {
  const date = moment.tz(dateString, 'Europe/Kiev')
  const formattedDate = date.format('D MMMM YYYY р.')
  const fullFormattedDate = formattedDate.replace(formattedDate[1], formattedDate[1].toUpperCase())
  return fullFormattedDate
}
export const ReviewItem = ({ review }) => {
  return (
    <Wrapper>
      <LogoBlock>
        <Avatar color={'#626ed4'}>{review?.author?.last_name}</Avatar>
      </LogoBlock>
      <InfoBlock>
        <InfoBlockRow>
          <div>
            <p className='author_name'>
              {review?.author?.first_name || review?.author?.last_name
                ? `${review?.author?.first_name || ''} ${review?.author?.last_name || ''}`
                : 'Анонімний відгук'}
            </p>
            <Stack spacing={1}>
              <Rating readOnly name='size-small' value={review.rate} size='small' />
            </Stack>
            <p className='author_text'>{review.text}</p>
          </div>
          <div>
            <p className='review_date'>{formatDate(review?.created_at)}</p>
          </div>
        </InfoBlockRow>
        <InfoBlockRow>
          <div className='reply_block'>
            <p>
              <Reply />
            </p>
            <p className='block-title'>Відповісти</p>
          </div>
          <div className='likes_block'>
            <p className='block-title'>Відгук корисний </p>
            <p className='alight-center'>
              <span>{<ThumbUp />}</span>
              <span>{review.likesCount}</span>
            </p>
            <p className='alight-center'>
              <span>{<ThumbDown />} </span>
              <span>{review.dislikesCount}</span>
            </p>
          </div>
        </InfoBlockRow>
      </InfoBlock>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  margin-bottom: 20px;
`

const LogoBlock = styled.div`
  padding-top: 16px;
`
const InfoBlock = styled.div`
  border: 1px solid rgba(136, 143, 154, 0.16);
  padding: 16px;
  border-radius: 16px;
`
const InfoBlockRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  & .author_name {
    color: black;
    font-size: 16px;
    margin: 0;
  }
  & .review_date {
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.12;
    color: rgba(57, 69, 86, 0.6);
  }
  & .reply_block,
  .likes_block {
    display: flex;
    align-items: center;
    gap: 6px;
    & .block-title {
      margin: 0;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.12;
      color: rgba(57, 69, 86, 0.6);
    }
  }
  & .alight-center {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`
