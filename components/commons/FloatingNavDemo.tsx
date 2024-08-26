
import { MapContainer, TileLayer, Marker, PopupProps, Popup } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'

const position: LatLngExpression = [51.505, -0.09];
const FloatingNavDemo  = () => {
  return (
    <div className='h-20 w-full'>
        <MapContainer center={position} 
        style={{ height: '100px', width: '300px' }}
         zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://maps.app.goo.gl/D3zEuVywbCwGyPKk6">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        <Marker position={position}>
            A pretty CSS3 popup. <br /> Easily customizable.
            <Popup>
            </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default FloatingNavDemo