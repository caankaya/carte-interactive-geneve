import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { data } from "../../data";
import { useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Map() {
  const articleId = useAppSelector((state) => state.interaction.articleId);
  const [filteredMarkers, setFilteredMarkers] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const filteredByTheme = data
      .filter((theme) => theme.theme_id === articleId)
      .map((e, index) => (
        <Marker
          position={[e.geolocalisation[0], e.geolocalisation[1]]}
          key={index}
          icon={L.icon({
            iconUrl: `/location-${e.color}.png`,
            iconSize: [50, 50],
            iconAnchor: [10, 10],
            popupAnchor: [0, 0],
          })}
        >
          <Popup>
            <h3 className="popup-title text-lg font-bold tracking-widest mb-1 text-secondary">{e.figure}</h3>
            <h5 className="popup-theme text-primary text-md font-bold">{e.theme}</h5>
            <p className="popup-shorttext">{e.faits_historiques.substring(0, 200)}...</p>
            <div className="text-center">
              <Link to={`/page/${e.id}`} style={{ color: "white" }} className="bg-accent py-2 px-5 rounded-md">
                Lire la suite
              </Link>
            </div>
          </Popup>
        </Marker>
      ));

    setFilteredMarkers(filteredByTheme);
  }, [articleId]);

  return (
    <MapContainer
      center={[46.204532989689646, 6.142523865886776]}
      zoom={13}
      scrollWheelZoom={true}
      zoomControl={false}
      style={{ width: "100%", height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
      />

      {articleId
        ? filteredMarkers
        : data.map((e, index) => (
            <Marker
              position={[e.geolocalisation[0], e.geolocalisation[1]]}
              key={index}
              icon={L.icon({
                iconSize: [50, 50],
                iconAnchor: [10, 10],
                popupAnchor: [0, 0],
                iconUrl: `/location-${e.color}.png`,
              })}
            >
              <Popup>
                <h3 className="popup-title text-lg font-bold tracking-widest mb-1 text-secondary">{e.figure}</h3>
                <h5 className="popup-theme text-primary text-md font-bold">{e.theme}</h5>
                <p className="popup-shorttext">{e.faits_historiques.substring(0, 200)}...</p>
                <div className="text-center">
                  <Link to={`/page/${e.id}`} style={{ color: "white" }} className="bg-accent py-2 px-5 rounded-md">
                    Lire la suite
                  </Link>
                </div>
              </Popup>
            </Marker>
          ))}
    </MapContainer>
  );
}

export default Map;
