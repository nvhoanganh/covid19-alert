import React from 'react';
import { TiMap, TiThListOutline, TiCogOutline } from 'react-icons/ti';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink
} from 'react-router-dom';
import MyMapComponent from './Map';

function App() {
	return (
		<Router>
			<nav className="bg-gray-800 p-1 mt-0 fixed w-full z-10 top-0 pb-0">
				<div className="container mx-auto flex flex-wrap items-center">
					<div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
						<span className="text-2xl pl-2">COVID-19 Alert</span>
					</div>
					<div className="flex w-full pt-1 content-center justify-between md:w-1/2 md:justify-end">
						<ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
							<li className="mr-3">
								<NavLink
									activeClassName="border-b-4 border-gray-100"
									className="inline-block py-2 px-4 text-white no-underline"
									to="/map"
								>
									<TiMap className="inline mx-1"></TiMap> Map
								</NavLink>
							</li>
							<li className="mr-3">
								<NavLink
									activeClassName="border-b-4 border-gray-100"
									className="inline-block py-2 px-4 text-white no-underline"
									to="/list"
								>
									<TiThListOutline className="inline mx-1"></TiThListOutline>
									List
								</NavLink>
							</li>
							<li className="mr-3">
								<NavLink
									activeClassName="border-b-4 border-gray-100"
									className="inline-block py-2 px-4 text-white no-underline"
									to="/settings"
								>
									<TiCogOutline className="inline mx-1"></TiCogOutline>
									Settings
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<div
				className="container mx-auto bg-white md:mt-16"
				style={{ marginTop: 88 }}
			>
				<Switch>
					<Route path="/list">
						<p>this is the list</p>
					</Route>
					<Route path="/settings">
						<p>settings</p>
					</Route>
					<Route path={['/map', '/']}>
						<MyMapComponent isMarkerShown></MyMapComponent>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
export default App;
