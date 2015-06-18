var app = angular.module('portfolio', ['ui.router']);

app.controller('Home', function ($sce) {
	
	this.projectIsActive = false;

	this.selectedProject = {
		'Title': 'replace',
		'Desc': 'replace',
		'Url': 'http://www.theverge.com/'
	};

	this.trust = function(src) {
		return $sce.trustAsResourceUrl(src);
	};

	this.items = {
		'logo': '_images/logo.png',
		'name': 'Austin Woodall',
		'subhead': 'Front End Developer'
	};
	
	this.projects = [
		{
		'Title': 'Project 01',
		'Desc': 'This is the best project ever!',
		'Thumb': 'http://lorempixel.com/output/city-q-c-600-500-9.jpg',
		'Color': '#c44328',
		'Tools': [
			{'tool': 'Angular'},
			{'tool': 'Firebase'},
			{'tool': 'HTML5'}
		],
		'Url': 'http://placehold.it/',
		},
		{
		'Title': 'Project 02',
		'Desc': 'This is the second best project ever!',
		'Thumb': 'http://lorempixel.com/output/city-q-c-600-500-2.jpg',
		'Color': '#0088ce',
		'Tools': [
			{'tool': 'Angular'},
			{'tool': 'Firebase'}
		],
		'Url': 'http://placehold.it/',
		}
	];
});