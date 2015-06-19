var app = angular.module('portfolio', ['ui.router']);

app.controller('Home', function ($sce) {
	
	this.projectIsActive = false;

	this.windowSize = 'desktop';

	this.selectedProject = {};

	this.items = {
		'logo': '_images/logo.png',
		'name': 'Austin Woodall',
		'subhead': 'Front End Developer'
	};

	this.next = function (pos) {
		pos ++;
		this.selectedProject = this.projects[pos];
		console.log(pos);
	};

	this.prev = function (pos) {
		pos --;
		this.selectedProject = this.projects[pos];
		console.log(pos);
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
		'Url': $sce.trustAsResourceUrl('http://placehold.it/'),
		'id': 1,
		'pos': 0
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
		'Url': $sce.trustAsResourceUrl('http://getbootstrap.com/'),
		'id': 2,
		'pos': 1
		}
	];
});