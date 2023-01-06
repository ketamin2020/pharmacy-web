import React from 'react'
import styled from '@emotion/styled'
import berlinChemie from '../../images/partners/berlin-chemie.png'
import borschZavod from '../../images/partners/borshagovskii-zavod.png'
import darnica from '../../images/partners/darnitsa.png'
import ecoproduct from '../../images/partners/ecoproduct.png'
import egix from '../../images/partners/egis.png'
import farmak from '../../images/partners/farmak.png'
import halychfarm from '../../images/partners/halychfarm.png'
import lechim from '../../images/partners/lekhim.png'
import pfizer from '../../images/partners/pfizer.png'
import zdorovie from '../../images/partners/zdorovie.png'
import coloplast from '../../images/partners/coloplast.png'
import kievmedprep from '../../images/partners/kievmedpreparat.png'
const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`
const Item = styled.div`
  width: 100%;
  max-width: 320px;
  border: 1px solid grey;
  border-radius: 10px;
  & div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const items = [
  { image: berlinChemie, link: 'https://www.berlin-chemie.ua/uk-ua/' },
  { image: borschZavod, link: 'http://bcpp.com.ua/ru' },
  { image: darnica, link: 'https://www.darnitsa.ua/' },
  { image: ecoproduct, link: 'https://ecoproduct.if.ua/' },
  { image: egix, link: 'https://ua.egis.health/' },
  { image: farmak, link: 'https://farmak.ua/ru/' },
  { image: halychfarm, link: 'http://www.galychpharm.com/' },
  { image: lechim, link: 'https://lekhim.ua/uk/prat-lekhim-harkiv' },
  { image: pfizer, link: 'https://www.pfizer.ua/' },
  { image: coloplast, link: 'https://www.coloplast.ua/' },
  { image: zdorovie, link: 'https://zt.com.ua/ru/' },
  { image: kievmedprep, link: 'http://www.kievmedpreparat.com/' },
]

export const Partners = () => {
  return (
    <Wrapper>
      {items.map(item => (
        <Item key={item.link}>
          <a target='_blank' rel='noreferrer' href={item.link}>
            <div>
              <img src={item.image} alt={item.link} />
            </div>
          </a>
        </Item>
      ))}
    </Wrapper>
  )
}
