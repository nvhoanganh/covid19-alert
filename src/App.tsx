import React from 'react';
import { TiCogOutline, TiMap, TiThListOutline } from 'react-icons/ti';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import MyMapComponent from './Map';

function App() {
	return (
		<body className="flex flex-col min-h-screen">
			<header className="text-center p-5 border-b-4">Map</header>
			<main className="flex-grow">
				<div className="p-8">
					<MyMapComponent />
				</div>
			</main>
			<footer>
				<div className="flex justify-center border-t-2">
					<a
						href="https://timkoech.co.ke"
						className="text-gray-702 hover:text-gray-800 text-3xl px-8 bg-gray-300 py-2"
					>
						<TiMap></TiMap>
					</a>
					<a
						href="https://timkoech.co.ke"
						className="text-gray-702 hover:text-gray-800 text-3xl px-8 py-2"
					>
						<TiThListOutline></TiThListOutline>
					</a>
					<a
						href="https://timkoech.co.ke"
						className="text-gray-702 hover:text-gray-800 text-3xl px-8 py-2"
					>
						<TiCogOutline></TiCogOutline>
					</a>
				</div>
			</footer>
		</body>
	);
}
export default App;
