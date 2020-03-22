import React from 'react';
import { compose, withProps } from 'recompose';
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from 'react-google-maps';
const apiKey = 'AIzaSyByF-vNIy866s1G-P0aJKcEZsPmbSlgWEU';
const MyMapComponent = compose(
	withProps({
		googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `calc(100vh - 88px)` }} />,
		mapElement: <div style={{ height: `100%` }} />
	}),
	withScriptjs,
	withGoogleMap
)(props => (
	<GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
		{props.isMarkerShown && (
			<Marker position={{ lat: -34.397, lng: 150.644 }} />
		)}
	</GoogleMap>
));

export default MyMapComponent;
