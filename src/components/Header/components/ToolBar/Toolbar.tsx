import React from 'react'
import Button from '@mui/material/Button'
import { Logo } from 'images/icons/icons'
import { Dropdown } from 'common/Dropdown/Dropdown'
import { ItemsMenuFirstNested } from '../utils/types'
import { antibiotics } from '../utils/antibiotics'
import { medicines } from '../utils/medicines'
import { medicalGoods } from '../utils/medial_goods'
import { motherAndChildrens } from '../utils/motherAndChildrens'
import { gigiena } from '../utils/gigiena'
import {
  DrugsIcon,
  AntibioticsIcon,
  MedicalGoodsIcon,
  MotherAndChildIcon,
  CosmeticsIcon,
  DeliverySmallIcon,
} from 'images/icons/icons'
import './ToolBar.scss'

const Toolbar = () => {
  return (
    <section className='toolbar_wrapper mobile__hidden'>
      <div className='container toolbar_wrapper__inner'>
        <article>
          <Logo />
        </article>
        <article>
          <Dropdown
            icon={<DrugsIcon />}
            title={ItemsMenuFirstNested.MEDICINES}
            onChange={() => null}
            list={medicines}
          />
          <Dropdown
            icon={<AntibioticsIcon />}
            title={ItemsMenuFirstNested.ANTIBIOTICS}
            onChange={() => null}
            list={antibiotics}
          />
          <Dropdown
            icon={<MedicalGoodsIcon />}
            title={ItemsMenuFirstNested.MEDICAL_GOODS}
            onChange={() => null}
            list={medicalGoods}
          />
          <Dropdown
            icon={<MotherAndChildIcon />}
            title={ItemsMenuFirstNested.GOODS_FOR_MOTHERS_AND_CHILDREN}
            onChange={() => null}
            list={motherAndChildrens}
          />
          <Dropdown
            icon={<CosmeticsIcon />}
            title={ItemsMenuFirstNested.COSMETICS_AND_HYGIENE}
            onChange={() => null}
            list={gigiena}
          />
          {/* <Button
            id='basic-button'
            style={{ display: 'flex', alignItems: 'flex-start' }}
            aria-controls={'basic-menu'}
            aria-haspopup='true'
            onClick={() => null}
          >
            <span>
              <DeliverySmallIcon />
            </span>
            <span style={{ color: 'red' }}>Акції</span>{' '}
          </Button> */}
        </article>
      </div>
    </section>
  )
}

export default Toolbar
