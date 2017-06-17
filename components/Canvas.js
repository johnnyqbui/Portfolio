import React, { Component } from 'react'
import Brushstroke from '../utils/brushstroke'

export default class extends Component {
	constructor (props) {
		super(props)
	}

	componentDidMount() {
		const height = 150;
		const width = 800;
		const options = {
			width: width,
			height: height,
			color: '#222',
			animation: 'points',
			duration: 5,
		    inkAmount: 4,
		    size: 150,
		    frames: 7,
		    frameAnimation: true,
		    splashing: false,
		    reduceOverflow: 20,
		}
		var bs = new Brushstroke(options);

		function runAnimation() {
		    bs.draw({
		        points: [width/1.38, height / 2.0,
		        		width/2, height / 1.95,
		        		width/3.4, height / 1.88]
		    });
		}
		// Start
		runAnimation();
	}

	render () {
		return (
			<div>
				<canvas className="canvas-brushstroke"/>
				<style jsx>{`
		        	.canvas-brushstroke {
		        		position: absolute;
		        		top: 50%;
		        		left: 50%;
		        		transform: translate(-50%, -50%);
		        	}
		        `}</style>
			</div>
		)

	}
}
