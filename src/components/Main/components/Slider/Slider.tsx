import React, { useRef, useCallback } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay, Lazy } from 'swiper'
import { ArrowRight, ArrowLeft } from '@material-ui/icons'
import Button from 'common/Button/Button'
import styled from '@emotion/styled'
import slider from '../../../../mockDev/slider.png'
import slider1 from '../../../../mockDev/slider1.jpeg'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import 'swiper/css/lazy'

const Wrapper = styled.div`
  & .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`

const Slider = () => {
  const sliderRef = useRef(null)

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])
  return (
    <Wrapper>
      <Swiper
        ref={sliderRef}
        spaceBetween={50}
        slidesPerView={1}
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
      >
        <SwiperSlide>
          <img style={{ width: '100%', height: 'auto', display: 'block' }} src={slider} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: '100%', height: 'auto', display: 'block' }} src={slider1} alt='' />
        </SwiperSlide>
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

export default Slider
