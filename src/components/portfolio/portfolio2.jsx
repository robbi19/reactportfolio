import React from 'react';
// import Project from '../project/project';

function Portfolio() {
	const projects = [
		{
			name: 'code quiz',
			description:
				'create an application that an employee can use to generate a random password based on criteria they have selected. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write.',
			technologies: [
				'HTML/CSS',
				'JavaScript',
			],
			github: 'https://github.com/robbi19/code-quiz',
			deployed: 'https://robbi19.github.io/code-quiz/',
		},
	
	
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for any city.',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/robbi19/Server-Side-APIs-Challenge-Weather-Dashboard',
			deployed: 'https://robbi19.github.io/Server-Side-APIs-Challenge-Weather-Dashboard/',
		},
  ]
		

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;