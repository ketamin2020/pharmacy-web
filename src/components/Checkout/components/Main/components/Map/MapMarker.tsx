import React, { useRef, useState, useEffect } from 'react'
import { Marker } from 'react-leaflet'
import L from 'leaflet'
import ReactDOMServer from 'react-dom/server'
import { NewPostIcon } from 'images/icons/icons'
import { MapPopap } from './MapPopup'
import { Pharmacy } from '../ChooseAddressModal'

export const MapMarker = ({ activeItem, item, handleChooseWerehouse }: { activeItem: Pharmacy; item: Pharmacy }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (activeItem?.Ref === item?.Ref) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [activeItem, item])
  const markerRef = ref => {
    if (ref && open) {
      return ref?.openPopup()
    } else {
      ref?.closePopup()
    }
  }

  return (
    <Marker
      ref={markerRef}
      position={[Number(item?.Latitude), Number(item?.Longitude)]}
      icon={L.divIcon({
        iconSize: null,
        html: ReactDOMServer.renderToString(<NewPostIcon width={20} />),
      })}
    >
      <MapPopap handleChooseWerehouse={handleChooseWerehouse} activeItem={item?.activeItem} item={item} />
    </Marker>
  )
}
