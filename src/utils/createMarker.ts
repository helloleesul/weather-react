export const createMarker = (
  temp: number,
  center: { lat: number; lng: number },
  newMap: google.maps.Map,
) => {
  const pinOptions = new google.maps.marker.PinElement({
    scale: 1.5,
    background: "#3774af",
    borderColor: "#ffffff",
    glyph: `${temp?.toFixed()}°`,
  });

  return new google.maps.marker.AdvancedMarkerElement({
    position: center,
    map: newMap,
    content: pinOptions.element,
    title: "나의 위치",
  });
};
