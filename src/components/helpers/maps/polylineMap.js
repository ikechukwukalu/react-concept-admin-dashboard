import React, { useState, useRef, useCallback } from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Polyline } from "react-google-maps"

function PolylineMap() {
  const [path, setPath] = useState([
    { lat: 52.52549080781086, lng: 13.398118538856465 },
    { lat: 52.48578559055679, lng: 13.36653284549709 },
    { lat: 52.48871246221608, lng: 13.44618372440334 }
  ]);
  
  // Define refs for Polyline instance and listeners
  const PolylineRef = useRef(null);
  const listenersRef = useRef([]);
  
  // Call setPath with new edited path
  const onEdit = useCallback(() => {
    if (PolylineRef.current) {
      const nextPath = PolylineRef.current
        .getPath()
        .getArray()
        .map(latLng => {
          return { lat: latLng.lat(), lng: latLng.lng() };
        });
      setPath(nextPath);
    }
  }, [setPath]);
  
  // Bind refs to current Polyline and listeners
  const onLoad = useCallback(
    Polyline => {
      PolylineRef.current = Polyline;
      const path = Polyline.getPath();
      listenersRef.current.push(
        path.addListener("set_at", onEdit),
        path.addListener("insert_at", onEdit),
        path.addListener("remove_at", onEdit)
      );
    },
    [onEdit]
  );
  
  // Clean up refs
  const onUnmount = useCallback(() => {
    listenersRef.current.forEach(lis => lis.remove());
    PolylineRef.current = null;
  }, []);
  
  console.log("The path state is", path);
  
  const App = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCRDCjoy1Xb4I0trWMUNiZXneCziSGoMl8&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `100%` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )( (props) =>
  <GoogleMap
    mapContainerClassName="App-map"
    center={{ lat: 52.52047739093263, lng: 13.36653284549709 }}
    zoom={12}
    version="weekly"
    on
  >
    <Polyline
      // Make the Polyline editable / draggable
      editable
      draggable
      path={path}
      // Event used when manipulating and adding points
      onMouseUp={onEdit}
      // Event used when dragging the whole Polyline
      onDragEnd={onEdit}
      onLoad={onLoad}
      onUnmount={onUnmount}
    />
  </GoogleMap>
  );

  return <App />
}

export default PolylineMap;