
import React, { useState } from 'react';

import Entry from './entry';
import RocketProjects from './rocket-projects';

import {MESSAGES} from "common/messages"

import 'common/rocket'
import { ipcRenderer } from 'electron';

export default class LandingPage extends React.Component {

	constructor(props) {
		super(props);

		/**
		 * @type {RocketProject[]}
		 */
		const projects = [];
		this.state = { projects }

		ipcRenderer.on(MESSAGES.PROJECTS_LOADED,
			/**
			 * 
			 * @param {*} event 
			 * @param {RocketProject[]} projects 
			 */
			(event, projects) => {
				console.log(projects);
				this.setState({projects: projects});
			}
		);

	}

	render() {
		if (this.state.projects.length > 0) {
			return (
				<RocketProjects Projects={this.state.projects}></RocketProjects>
			)
		}
		else {
			return (
				<div className="hello">
					<Entry/>
				</div>
			)

		}
	}
}