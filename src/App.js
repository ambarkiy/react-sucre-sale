import React from 'react';
import { Navigation } from './Navigation';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './Footer';
import { NAVIGATION, FOOTER, ROUTES } from './custom';
import { Routes } from './Navigation/Routes';
import { Header } from './Header';

function App() {
	const { navLinks, navBrand } = NAVIGATION;
	const { siteMap, socialLinks, adresse, copyright } = FOOTER;
	return (
		<BrowserRouter>
			<Header />
			<Navigation brand={navBrand} navLinks={navLinks} />
			<Routes routes={ROUTES} />
			<Footer
				navLinks={siteMap.navLinks}
				admLinks={siteMap.admLinks}
				socialLinks={socialLinks}
				adresse={adresse}
				copyright={copyright}
			/>
		</BrowserRouter>
	);
}

export default App;

// <FontAwesomeIcon
// icon={'phone'}
// mask={[
// 	'fas',
// 	'circle'
// ]}
// transform='shrink-10'
// size='1x'
// />
