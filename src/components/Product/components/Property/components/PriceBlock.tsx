import React from 'react'
import styled from '@emotion/styled'
import moment from 'moment'
import { CheckCircle } from '@material-ui/icons'
import { priceToView } from 'utils/priceToView'
import Button from 'common/Button/Button'
import { Logo } from 'images/icons/icons'
import { mainInfoSelector } from 'redux/main/mainSelectors'
import { useSelector } from 'react-redux'
export const PriceBlock = ({ product }) => {
  const company = useSelector(mainInfoSelector)
  const maker = product?.property?.attributes?.main?.items?.maker
  return (
    <Wrapper>
      <Maker src={maker?.value?.logo?.url} name={maker?.value?.full_name} />
      <ActualPrice time={product?.price?.updatedAt} />
      <Status />
      <PriceRow>
        <p className='price_value'>{priceToView(product?.price?.current)}</p>
        <Button shape='oval' color='green'>
          <p>У кошик</p>
        </Button>
      </PriceRow>
      <Saller name={company.name} />
    </Wrapper>
  )
}

function Maker({ src, name }) {
  return (
    <MakerWrapper>
      <img src={src} />
      <p>Виробник:</p>
      <p>
        <strong>{name}</strong>
      </p>
    </MakerWrapper>
  )
}
function Saller({ name }) {
  return (
    <SallerWrapper>
      <p>
        Продавець: <span className='saller_name'>{name}</span>
      </p>
      <Logo />
    </SallerWrapper>
  )
}
function ActualPrice({ time }) {
  return (
    <ActualWrapper>
      <p>
        {`Ціна та наявність актуальні на ${moment(time).format('DD.MM.YYYY HH:mm')} і діють тільки для покупки онлайн`}
      </p>
    </ActualWrapper>
  )
}
function Status() {
  return (
    <StatusWrapper>
      <span>
        <CheckCircle />
      </span>
      <span>в наявності</span>
    </StatusWrapper>
  )
}

const MakerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid rgba(136, 143, 154, 0.16);
  border-radius: 8px;
  padding: 7px 16px;
  overflow-x: auto;
  margin-bottom: 20px;
  & img {
    width: 50px;
    height: 50px;
  }
`
const SallerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid rgba(136, 143, 154, 0.16);
  border-radius: 8px;
  padding: 7px 16px;
  overflow-x: auto;
  margin-bottom: 20px;
  & .saller_name {
    font-weight: 600;
  }
  & img {
    width: 50px;
    height: 50px;
  }
`
const ActualWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(112, 176, 247, 0.121569);
  color: #212121;
  background-color: rgba(141, 192, 249, 0.121569);
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 14px;
`
const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  background-color: rgba(0, 160, 70, 0.08);
  font-size: 14px;
  color: #00a046;
  text-transform: uppercase;
  padding: 6px 10px 6px 6px;
  border-radius: 20px;
`

const PriceRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .price_value {
    font-size: 36px;
  }
`

const Wrapper = styled.div`
  width: 100%;
`
