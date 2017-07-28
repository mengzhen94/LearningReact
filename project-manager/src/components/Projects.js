import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        //console.log(project);
        return (
          <ProjectItem key={project.title} project={project} />
        );
      });
    }

    return (
      // We has only one element, it means there is not another div here
      <div className="Projects">
        {projectItems}
      </div>
    );
  }
}

export default Projects;
