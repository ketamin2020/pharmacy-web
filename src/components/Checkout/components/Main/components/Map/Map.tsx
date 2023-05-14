import React, { useEffect } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { LatLngTuple } from 'leaflet'
import { MapContainerProps } from 'react-leaflet'
import { MapMarker } from './MapMarker'
import styled from '@emotion/styled'
import 'leaflet/dist/leaflet.css'
import MarkerClusterGroup from 'react-leaflet-markercluster'

import { Pharmacy } from '../ChooseAddressModal'
const MapWrapper = styled.div`
  & .leaflet-div-icon {
    border: none;
    background-color: transparent;
  }
`

interface IProps {
  items: Pharmacy[]
  activeItem: Pharmacy
}

const TempEventListener = ({ mapCenter }: LatLngTuple) => {
  const map = useMap()

  useEffect(() => {
    if (mapCenter) {
      map?.setView(mapCenter, 10, { animation: true })
      map?.setZoom(10)
    }
  }, [mapCenter])

  return null
}

export const Map: React.FC<MapContainerProps & IProps> = ({ center, items, activeItem, ...rest }) => {
  return (
    <MapWrapper>
      <MapContainer {...rest} center={center} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=4c3b17fc-bee1-42cc-9b17-b4b51480d8c5'
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org">OpenMapTiles</a>, &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        {/* <MarkerClusterGroup maxClusterRadius={30} key={Date.now()}> */}
        {items?.map(item => (
          <MapMarker activeItem={activeItem} key={item.id} item={item} />
        ))}
        {/* </MarkerClusterGroup> */}

        <TempEventListener mapCenter={center} />
      </MapContainer>
    </MapWrapper>
  )
}
