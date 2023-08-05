import { Project } from '../models/project';

export class ProjectRepository {
  static projects: Partial<Project>[] = [];

  static save(project: Partial<Project>) {
    ProjectRepository.projects.push(project);
  }

  static findAll(): Partial<Project>[] {
    return ProjectRepository.projects;
  }

  static findById(id: number): Partial<Project> {
    return ProjectRepository.projects[id];
  }

  static addCollaborator(id: number, email: string): Partial<Project> {
    const project: Partial<Project> = this.findById(id);
    project.collaborators = project.collaborators ? project.collaborators : [];
    project.collaborators.push(email);
    return project;
  }

  static doesEmailExists(email: string, list: string[]): boolean {
    if (list?.length > 0) {
      let left = 0,
        right = list.length - 1;
      while (left <= right) {
        if (list[left] === email || list[right] === email) return true;
        left++;
        right--;
      }
    }
    return false;
  }
}
