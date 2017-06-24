import Outer from '../components/Outer-Container'

export default () => (
	<Outer>
		<h1 className='about__header'>About</h1>
		<div className='about'>
			<div className='about__text'>
				<p>I am a freelance/contract <strong>front end web developer</strong> with an affinity for <strong>minimal designs and
				interactivity</strong>. I believe the user experience should be simple, intuitive, and interactive to maximize user experience.
				I love bringing ideas to life using <strong>cutting edge web technologies</strong> and constantly learning new technologies to improve myself.
				My focus is on intuitive UI development, interactivity, and maximizing performance for an amazing user experience.
				<br/><br/>
				When I'm not dabbling with code, I enjoy <strong>traveling and hiking</strong>, exploring new cultures and foods, watching
				documentaries about the cosmos, and occasionally play games.
				I also like to snap some pretty neat <a href='https://www.instagram.com/jqbui/' target='_blank'>
				<strong>photos</strong></a> during my travels.</p>
			</div>
			<div className='about__img'>
				<img src="/static/thatsme-withfilter.jpg"/>
			</div>
		</div>
	</Outer>
)