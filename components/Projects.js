import ProjectData from '../data/projects.json'

const Projects = () => {
	const projectList = ProjectData.map(function(project, index) {
		let title = project.title;
		let altTag = project.title.toLowerCase() + ' screenshot';
		let dates = project.dates;
		let description = project.description;
		let skills = project.skills;
		let image = project.image;
		let github = project.github;
		let url = project.url;
		return (
			<div key={index} className="project">
				<div className='project__img--container'>
					<img src={image} alt={altTag}/>
					<div className='project__image--overlay'></div>
				</div>
				<div className="project__info">
					<h2>{title}</h2>
					<p>{skills}</p>
					<div>
					<a href={github}>Github</a>
					</div>
					<div>
					<a href={url}>Site</a>
					</div>
				</div>
			</div>
		)
	})

	return (
		<div className='projects'>
			<h1>Portfolio</h1>
			<div className='project__list'>
				{projectList}
			</div>
			<style jsx>{`
	            .projects {
	            	position: relative;
				    top: 12%;
	            }

	            .projects h1 {
	            	text-align: center;
	            }

	        `}</style>
		</div>
	)

}

export default Projects