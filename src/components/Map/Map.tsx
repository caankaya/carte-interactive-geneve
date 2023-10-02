import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { data } from '../../data';
import { useAppSelector } from '../../redux/hooks';
import { useEffect, useState } from 'react';

function Map() {
  const themeId = useAppSelector((state) => state.interaction.themeId);
  const [filteredMarkers, setFilteredMarkers] = useState<JSX.Element[]>([]);
  console.log('filteredMarkers :', filteredMarkers);

  useEffect(() => {
    const filteredByTheme = data
      .filter((theme) => theme.theme_id === themeId)
      .map((e, index) => (
        <Marker
          position={[e.geolocalisation[0], e.geolocalisation[1]]}
          key={index}
        >
          <Popup>
            <h5 className="popup-title text-xs font-bold tracking-widest mb-1 text-[#cd3030]">
              {e.figure}
            </h5>
            <h3 className="popup-theme text-base font-bold">{e.theme}</h3>
            <p className="popup-shorttext">
              {e.faits_historiques.substring(0, 500)}...
            </p>
            <button className="btn btn-sm normal-case block m-auto w-48 text-xs">
              Lire la suite
            </button>
          </Popup>
        </Marker>
      ));

    setFilteredMarkers(filteredByTheme);
  }, [themeId]);

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

      {themeId
        ? filteredMarkers
        : data.map((e, index) => (
            <Marker
              position={[e.geolocalisation[0], e.geolocalisation[1]]}
              key={index}
            >
              <Popup>
                <h5 className="popup-title text-xs font-bold tracking-widest mb-1 text-[#cd3030]">
                  {e.figure}
                </h5>
                <h3 className="popup-theme text-base font-bold">{e.theme}</h3>
                <p className="popup-shorttext">
                  {e.faits_historiques.substring(0, 500)}...
                </p>
                <button className="btn btn-sm normal-case block m-auto w-48 text-xs">
                  Lire la suite
                </button>
              </Popup>
            </Marker>
          ))}
    </MapContainer>
  );
}

export default Map;
