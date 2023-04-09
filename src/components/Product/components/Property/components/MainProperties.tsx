import React from 'react'
import styled from '@emotion/styled'
import { CheckCircle, Warning } from '@material-ui/icons'
import { DoNotDisturb } from '@mui/icons-material'
import { SvgIconProps } from '@mui/material'
import {
  AllergyIcon,
  PregnantIcon,
  PrescriptionIcon,
  DiabeticIcon,
  FeedingIcon,
  TemperatureIcon,
  DriverIcon,
  AlcoIcon,
} from 'images/icons/icons'

interface PropertyProps {
  item: {
    title: string
    value: string
  }
  Icon: React.FC
}

const Property: React.FC<PropertyProps> = ({ item, Icon }) => {
  let ValueIcon: React.FC<SvgIconProps> = Warning
  let color: string = 'orange'

  if (item.value === 'Можна') {
    ValueIcon = CheckCircle
    color = 'green'
  } else if (item.value === 'He можна') {
    ValueIcon = DoNotDisturb
    color = 'red'
  } else if (item.value === 'Так') {
    ValueIcon = CheckCircle
    color = 'green'
  } else if (item.value === 'Ні') {
    ValueIcon = DoNotDisturb
    color = 'red'
  }

  return (
    <Item>
      <div className='icon_block'>
        <Icon />
        <span className='status_icon'>
          <ValueIcon style={{ color }} />
        </span>
      </div>
      <div className='title_block'>
        <p className='title_block__title'> {item.title}</p>
        <span className='title_block__value'>{item.value}</span>
      </div>
    </Item>
  )
}

export const MainProperties = ({ product }) => {
  const items = product?.property?.warnings?.items
  const itemsMain = product?.property?.main?.items

  return (
    <>
      {/* <h4>Основні властивості</h4> */}
      <Wrapper>
        {items?.diabetes_warning && <Property Icon={DiabeticIcon} item={items?.diabetes_warning} />}
        {items?.allergy_warning && <Property Icon={AllergyIcon} item={items?.allergy_warning} />}
        {items?.breastfeeding_warning && <Property Icon={FeedingIcon} item={items?.breastfeeding_warning} />}
        {items?.pregnancy_warning && <Property Icon={PregnantIcon} item={items?.pregnancy_warning} />}
        {items?.driving_warning && <Property Icon={DriverIcon} item={items?.driving_warning} />}
        {items?.alcohol_warning && <Property Icon={AlcoIcon} item={items?.alcohol_warning} />}
        {itemsMain?.prescription && <Property Icon={PrescriptionIcon} item={itemsMain?.prescription} />}
        {itemsMain?.storage_temperature && (
          <Property
            Icon={TemperatureIcon}
            item={{ title: itemsMain?.storage_temperature.title, value: itemsMain?.storage_temperature.value.name }}
          />
        )}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: baseline;
  padding: 10px;
`

const Item = styled.div`
  display: grid;
  grid-template-columns: 50px 175px;
  height: 70px;
  align-items: end;
  justify-content: start;
  & .icon_block {
    position: relative;
    & .status_icon {
      position: absolute;
      bottom: -6px;
      right: 6px;
    }
  }
  & .title_block {
    font-size: 14px;
    & .title_block__title {
      color: rgba(57, 69, 86, 0.6);
      margin-bottom: 5px;
    }
    & .title_block__value {
      color: #212121;
      border-bottom: 1px dashed;
    }
  }
`
