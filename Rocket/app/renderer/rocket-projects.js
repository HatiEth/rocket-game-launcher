import React from "react"

import "common/rocket"
import { ipcRenderer } from "electron";
import { MESSAGES } from "../common/messages";

export default class RocketProjects extends React.Component {
	constructor(props) {
		super(props);

		/**
		 * @type {RocketProjects[]}
		 */
		this.projects = props.Projects;
	}

	_onfocus(e) {
		// console.log(this);
		if (document.hasFocus()) {

			ipcRenderer.send(MESSAGES.LAUNCH_ROCKET, this);
		}
	}

	render() {

		const numProjects = 1.0 / (Math.max(1, this.projects.length));



		const ProjectList = this.projects.map((project) => {
			let styles = {
				width: `${numProjects * 100}%`,

			};
			if (project.isvideo) {
				return (<li key={project.title} onClick={this._onfocus.bind(project)} style={styles} >
					<div className="videocontainer">
						<div className="overlay"></div>
						<video playsInline={true} autoPlay={true} muted loop>
							<source src={project.banner} type="video/webm" />
						</video>

					</div>
				</li>);
			}
			else {
				let innerStyle = {
					'background': `url(${project.banner}) no-repeat center`,
					'backgroundSize': 'auto'
				}
				return (<li key={project.title} onClick={this._onfocus.bind(project)} style={styles} >
					<div className="imagecontainer" >
					<div className="overlay"></div>
						<img src={project.banner} alt="" />
					</div>
				</li>);
			}
		});

		return (<ul className="project-list">
			{ProjectList}
		</ul>);
	}
}
