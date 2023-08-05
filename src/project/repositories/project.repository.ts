import { Project } from '../models/project';

export class ProjectRepository {
  static projects: Project[] = [];

  static save(project: Project) {
    ProjectRepository.projects.push(project);
  }

  static findAll(): Project[] {
    return ProjectRepository.projects;
  }

  static findById(id: number): Project {
    return ProjectRepository.projects[id];
  }
}
