import React, { useRef, useCallback, MutableRefObject, useState, useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay, Lazy } from 'swiper'
import { ArrowRight, ArrowLeft } from '@material-ui/icons'
import Button from 'common/Button/Button'
import styled from '@emotion/styled'
import { ProductCard } from 'common/ProductCard/ProductCard'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import 'swiper/css/lazy'
import './Popular.scss'
import { getDrugsByViews } from 'api/drugs'

const Wrapper = styled.div`
  & .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
  & .swiper-wrapper {
    padding: 40px 0;
  }
  & .swiper-pagination-progressbar-fill {
    background-color: var(--greenColor);
  }
  & .swiper-scrollbar {
    display: none;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`

const Popular = () => {
  const [data, setData] = useState([])
  const sliderRef = useRef<MutableRefObject<null | object>>(null)

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])

  useEffect(() => {
    const fetch = async () => {
      const res = await getDrugsByViews({})
      console.log(res)
      setData(res)
    }
    fetch()
  }, [])
  return (
    <Wrapper>
      <h2>Популярні товари</h2>
      <Swiper
        className='swiper'
        ref={sliderRef}
        modules={[Navigation, Autoplay, Pagination, Lazy]}
        navigation
        pagination={{ clickable: true, type: 'progressbar' }}
        scrollbar={{ draggable: true }}
        effect='fade'
        loop={true}
        lazy={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {data?.map(item => (
          <SwiperSlide key={item.name}>
            <ProductCard
              id={item?.id}
              reviews={item?.reviews}
              name={item?.name}
              status={item?.price}
              price={item?.price}
              image={item?.images?.items?.[0]?.url}
              key={item?.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <ButtonWrapper>
        <Button shape='circle' color='green' onClick={handlePrev}>
          <ArrowLeft />
        </Button>
        <Button shape='circle' color='green' onClick={handleNext}>
          <ArrowRight />
        </Button>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default Popular
