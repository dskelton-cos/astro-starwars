import markerIconRetinaURL from 'leaflet/dist/images/marker-icon-2x.png';
import markerIconURL from 'leaflet/dist/images/marker-icon.png';
import markerShadowURL from 'leaflet/dist/images/marker-shadow.png';

export function setMap(
  mapElement: HTMLElement,
  {
    latitude,
    longitude,
    zoom,
    markerMarkup = '',
  }: {
    latitude: number;
    longitude: number;
    zoom: number;
    markerMarkup?: string;
  }
) {
  (async () => {
    const {
      icon: leafletIcon,
      map: leafletMap,
      marker: leafletMarker,
      tileLayer,
    } = await import('leaflet');

    const markerIcon = leafletIcon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      iconUrl: markerIconURL,
      iconRetinaUrl: markerIconRetinaURL,
      shadowUrl: markerShadowURL,
    });

    const map = leafletMap(mapElement).setView([latitude, longitude], zoom);
    tileLayer(
      'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
  subdomains: 'abcd'
}
    ).addTo(map);

    if (markerMarkup !== '') {
      leafletMarker([latitude, longitude], { icon: markerIcon })
        .bindPopup(markerMarkup)
        .addTo(map);
    } else {
      leafletMarker([latitude, longitude], { icon: markerIcon }).addTo(map);
    }
  })();
}
