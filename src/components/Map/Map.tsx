import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Map() {
  return (
    <MapContainer
      center={[46.204532989689646, 6.142523865886776]}
      zoom={13}
      scrollWheelZoom={true}
      zoomControl={false}
      style={{ width: '100%', height: '100vh' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
      />

      <Marker position={[46.204532989689646, 6.142523865886776]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
