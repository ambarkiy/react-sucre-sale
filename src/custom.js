import { Accueil } from './Accueil';
import { NotFound } from './NotFound';
import { Assiettes, Pizzas, Sandwichs, Tacos } from './Menu';

const MEALS = [
	{
		id: '1',
		img: {
			alt: 'nom de la pizzas',
			src: 'https://www.pizzapai.fr/wp-content/uploads/2019/10/Pizza-indienne-BD-400x400-300x300.jpg'
		},
		title: 'MOUSSAKA',
		ingredients: 'Tomate, fromage, viande hachée, aubergines grillées, tomates fraîches, champignons, olives.',
		prix: '5€,50'
	},
	{
		id: '2',
		img: {
			alt: 'nom de la pizzas',
			src: 'https://www.pizzapai.fr/wp-content/uploads/2019/10/Pizza-indienne-BD-400x400-300x300.jpg'
		},
		title: 'RACLETTE',
		ingredients: 'Tomate, fromage, poulet fumé, émincé de poulet, pommes de terre, fromage à raclette.',
		prix: '5€,50'
	},
	{
		id: '3',
		img: {
			alt: 'nom de la pizzas',
			src: 'https://www.pizzapai.fr/wp-content/uploads/2019/10/Pizza-indienne-BD-400x400-300x300.jpg'
		},
		title: 'FERMIERE',
		ingredients: 'Tomate, fromage, émincé de poulet, pommes de terre, oignons.',
		prix: '5€,50'
	},
	{
		id: '4',
		img: {
			alt: 'TEXAS',
			src: 'https://www.pizzapai.fr/wp-content/uploads/2019/10/Pizza-indienne-BD-400x400-300x300.jpg'
		},
		title: 'TEXAS',
		ingredients: 'Tomate, fromage, chorizo, pepperoni, oignons, olives.',
		prix: '5€,50'
	},
	{
		id: '5',
		img: {
			alt: 'nom de la pizzas',
			src: 'https://www.pizzapai.fr/wp-content/uploads/2019/10/Pizza-indienne-BD-400x400-300x300.jpg'
		},
		title: 'BUFFALO',
		ingredients: 'Tomate, sauce barbecue, fromage, viande hachée, oignons, poivrons.',
		prix: '5€,50'
	},
	{
		id: '6',
		img: {
			alt: 'nom de la pizzas',
			src: 'https://www.pizzapai.fr/wp-content/uploads/2019/10/Pizza-indienne-BD-400x400-300x300.jpg'
		},
		title: 'MIAMI',
		ingredients: 'Tomate, sauce barbecue, fromage, viande hachée, poulet fumé, olives, piments.',
		prix: '5€,50'
	},
	{
		id: '7',
		img: {
			alt: 'nom de la pizzas',
			src: 'https://www.pizzapai.fr/wp-content/uploads/2019/10/Pizza-indienne-BD-400x400-300x300.jpg'
		},
		title: 'CAMPIONE',
		ingredients: 'Tomate, fromage, viande hachée, champignons, oeuf.',
		prix: '5€,50'
	},
	{
		id: '8',
		img: {
			alt: 'nom de la pizzas',
			src: 'https://www.pizzapai.fr/wp-content/uploads/2019/10/Pizza-indienne-BD-400x400-300x300.jpg'
		},
		title: 'ORIENTALE',
		ingredients: 'Tomate, fromage, champignons, merguez, oeuf.',
		prix: '5€,50'
	},
	{
		id: '9',
		img: {
			alt: 'nom de la pizzas',
			src: 'https://www.pizzapai.fr/wp-content/uploads/2019/10/Pizza-indienne-BD-400x400-300x300.jpg'
		},
		title: '4 FROMAGES',
		ingredients: 'Tomate, fromage, provolone, gorgonzola, fromage râpé.',
		prix: '5€,50'
	}
];

const navBrand = { text: 'Sucre Sale', href: '/' };

const navLinks = [
	{ id: 1, order: 1, text: 'ASSIETTES', href: '/assiettes' },
	{ id: 2, order: 1, text: 'PIZZAS', href: '/pizzas' },
	{ id: 3, order: 1, text: 'SANDWICHS', href: '/sandwichs' },
	{ id: 4, order: 1, text: 'TACOS', href: '/tacos' }
];

const NAVIGATION = { navBrand, navLinks };

const siteMap = {
	navLinks: [
		{ id: 1, order: 1, text: 'Assiettes', href: '/assiettes' },
		{ id: 2, order: 2, text: 'Pizzas', href: '/pizzas' },
		{ id: 3, order: 3, text: 'Sandwichs', href: '/sandwichs' },
		{ id: 4, order: 4, text: 'Tacos', href: '/tacos' }
	],
	admLinks: [
		{ id: 1, order: 1, text: 'A propos', href: '/about' },
		{ id: 2, order: 2, text: 'Mentions Légales', href: '/mentions-legales' },
		{ id: 3, order: 2, text: 'CGU', href: '/cgu' }
	]
};

const socialLinks = [
	{
		order: '1',
		name: 'facebook',
		icon: [
			'fab',
			'facebook'
		]
	},
	{
		order: '2',
		name: 'snapchat',
		icon: [
			'fab',
			'snapchat'
		]
	},
	{
		order: '3',
		name: 'instagram',
		icon: [
			'fab',
			'instagram'
		]
	}
];

const adresse = {
	raisonSociale: 'Sucre Sale',
	voieEtNumero: '8 Place des Trois Rois',
	cpCommune: '60180 NOGENT SUR OISE',
	tel: '03 44 53 05 17'
};

const copyright = { year: '2020', creator: 'SIC' };

const FOOTER = { siteMap, socialLinks, adresse, copyright };

const ROUTES = [
	{
		path: '/',
		exact: true,
		component: Accueil
	},
	{
		path: '/assiettes',
		exact: true,
		component: Assiettes
	},
	{
		path: '/pizzas',
		exact: true,
		component: Pizzas
	},
	{
		path: '/sandwichs',
		exact: true,
		component: Sandwichs
	},
	{
		path: '/tacos',
		exact: true,
		component: Tacos
	},
	{
		path: '/*',
		exact: false,
		component: NotFound
	}
];

export { MEALS, NAVIGATION, FOOTER, ROUTES };
