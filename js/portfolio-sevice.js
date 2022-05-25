'use strict';
var gProjs;

_createProjs();

// LIST
function getProjsForDisplay() {
	return gProjs;
}

function _createProjs() {
	gProjs = [
		// _createProj(
		// 	'1',
		// 	'ball-board',
		// 	'ball-board',
		// 	'lorem ipsum',
		// 	'ball-board',
		// 	'1606755576523',
		// 	['Matrixes', 'keyboard events'],
		// 	''
		// ),
		// _createProj(
		// 	'2',
		// 	'chess',
		// 	'chess',
		// 	'lorem ipsum',
		// 	'chess',
		// 	'1606755576523',
		// 	['Matrixes', 'keyboard events'],
		// 	''
		// ),
		// _createProj(
		// 	'3',
		// 	'game-of-life',
		// 	'game-of-life',
		// 	'lorem ipsum',
		// 	'game-of-life',
		// 	'1606755576523',
		// 	['Matrixes', 'keyboard events'],
		// 	''
		// ),
		// _createProj(
		// 	'4',
		// 	'in-picture',
		// 	'in-picture',
		// 	'lorem ipsum',
		// 	'in-picture',
		// 	'1606755576523',
		// 	['Matrixes', 'keyboard events'],
		// 	''
		// ),
		// _createProj(
		// 	'5',
		// 	'mines-sweeper',
		// 	'mines-sweeper',
		// 	'lorem ipsum',
		// 	'mines-sweeper',
		// 	'1606755576523',
		// 	['Matrixes', 'keyboard events'],
		// 	''
		// ),
		// _createProj(
		// 	'6',
		// 	'pacman',
		// 	'pacman',
		// 	'lorem ipsum',
		// 	'pacman',
		// 	'1606755576523',
		// 	['Matrixes', 'keyboard events'],
		// 	''
		// ),
		// _createProj(
		// 	'7',
		// 	'touch-nums',
		// 	'touch-nums',
		// 	'lorem ipsum',
		// 	'touch-nums',
		// 	'1606755576523',
		// 	['Matrixes', 'keyboard events'],
		// 	''
		// ),

		_createProj(
			'1',
			'MyPlaces',
			'View most known places',
			'On this app, users can view all places added by users ' +
				'and add new places with their images after authentication. ' +
				'only authenticated user can upload images, update exiting ' +
				'places or delete them. all places can be seen over embedded ' +
				'google Map',
			[
				'Front: React-redux, useContext, hooks',
				'Style: css',
				'Backend: Node.js, Express',
				'DB: Mongoose',
				'App host: Heroku'
			],
			[
				'user authentication, authorization',
				'file upload',
				'use google geolocation api',
				'using redux, useContext, hooks',
				'responsive web design'
			],
			'https://placesss.herokuapp.com'
		),
		_createProj(
			'2',
			'Photogram',
			'An instagram-like App',
			'On this social media app, users can engage with one another ' +
				'online, like/unlike posts, write comments, share ' +
				'posts on facebook, upload images, manage their posts: such as ' +
				'saving to favorites and taging relevant posts',
			[
				'Front: React-redux',
				'Style: Scss',
				'Backend: Node.js, Express',
				'DB: MongoDB',
				'Image host: Cloudinary',
				'App host: Heroku'
			],
			[
				'user authentication',
				'share on facebook',
				'using redux for global state management',
				'responsive web design'
			],
			'https://photogrammmmm.herokuapp.com/'
		),
		_createProj(
			'3',
			'AllIneed',
			'All your favorites in one place',
			'This app incorporates 3 apps in one place: ' +
				'<br>' +
				'<strong>' +
				'Notes app: ' +
				'</strong>' +
				'this extensive app allow users to quickly capture what’s on their mind ' +
				'and get a reminder later at the right place or time. Capture what’s on ' +
				'your mind: Add notes, lists, photos, videos, drawing with or w/o ' +
				'background image and share it with friends and family via email or whatsup ' +
				'User can add color to organize notes which can be reached by a simple search ' +
				'<br>' +
				'<strong>' +
				'Emails app: ' +
				'</strong>' +
				'includes inbox, sent, drafts items which can be sorted/filltered by, ' +
				'key word/ asc/desc order or read/unread messages. user receives notifactions on email ' +
				'sent/deleted/recieved and have the option to reply and compose new emails ' +
				'<br>' +
				'<strong>' +
				'Books app: ' +
				'</strong>' +
				' app presenting the google books (using google api), allows user to ' +
				'search books by keyword or category, read and add reviews',
			[
				'Front: React',
				'Style: CSS',
				'DB: LocalStorage',
				'Media host: Cloudinary',
				'App host: Github'
			],
			[
				'use google calender api',
				'use google books api',
				'collaborate via email or whatsup',
				'pagination',
				'responsive web design'
			],
			'https://gil1103.github.io/AllIneed/'
		),
		_createProj(
			'4',
			'Food-Order-App',
			'Online food ordering app',
			'Allow users order they favorite dishes from the resturant ' +
				'menu. items can be added/deleted from the shopping cart, before filling in the address form',
			[
				'Front: React-context',
				'Style: CSS Module',
				'DB: Firebase',
				'App host: Github'
			],
			['using context for global state management', 'responsive web design'],
			'https://gil1103.github.io/food-order-app/'
		),
		_createProj(
			'5',
			'Watchlist',
			'Arrange your watchlist',
			'In this app one can search his favorite movies and add/remove from his watchlist',
			[
				'Front: React-context',
				'Style: CSS',
				'DB: LocalStorage',
				'App host: Github'
			],
			[
				'using context for global state management',
				'fetching data from an external API (The Movie Database)',
				'responsive web design'
			],
			'https://gil1103.github.io/watchlist/'
		),
		_createProj(
			'6',
			'Shopping-Cart',
			'My shopping cart',
			'Build your favorite shopping-cart',
			[
				'Front: React-redux-toolkit',
				'Style: CSS Module',
				'DB: Firebase',
				'App host: Github'
			],
			[
				'using redux-toolkit(slice) for global state management',
				'fetching data from an external API (The Movie Database)',
				'responsive web design'
			],
			'https://gil1103.github.io/shopping-cart/'
		),
		_createProj(
			'7',
			'Meetups',
			'Best meetups places',
			'Find your prefered meetup place and add some of your own',
			[
				'Front: Next.js',
				'Style: CSS Module',
				'DB: MongoDB',
				'App host: Vercel'
			],
			['using Next.js', 'responsive web design'],
			'https://meetups-nextjs-psi.vercel.app/'
		),
		_createProj(
			'8',
			'Expenses-Chart',
			'Manage your yearly expenses',
			'A visual way to see all your expenses by month/year',
			['Front: React', 'Style: CSS', 'App host: Github'],
			['responsive web design'],
			'https://gil1103.github.io/expenses-chart/'
		),
		_createProj(
			'9',
			'Quotes',
			'Best quotes ever',
			'Get inspired by some famous quotes, read other users comments and add your owns',
			['Front: React', 'Style: CSS Module', 'DB: Firebase', 'App host: Github'],
			[
				'using custom hook (httpReducer)',
				'errors handeling',
				'responsive web design'
			],
			'https://react-http-99f38.web.app/quotes'
		),
		_createProj(
			'10',
			'Minesweeper',
			'Will you find all mines?',
			'The objective of the game is to clear a rectangular board containing hidden ' +
				'"mines" or bombs without detonating any of them, with help from clues about ' +
				'the number of neighbouring mines in each field',
			[
				'Front: Javascript',
				'Style: CSS',
				'DB: LocalStorage',
				'App host: Github'
			],
			['game is supported on mobile as well', 'responsive web design'],
			'https://gil1103.github.io/Minesweeper'
		)
	];
}

function _createProj(id, name, title, desc, techStack, highlights, link) {
	return {
		id,
		name,
		title,
		desc,
		url: `img/proj/${name}-thumbnail.jpg`, //`projs/${title}/index.html`
		techStack,
		highlights,
		link
	};
}

// READ
function getProjById(projId) {
	var proj = gProjs.find(function (proj) {
		return projId === proj.id;
	});
	return proj;
}
