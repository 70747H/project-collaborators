export class Project {
  name: string;
  collaborators: string[] = [];

  constructor(name: string, collaborators: string[] = []) {
    this.name = name;
    this.collaborators = collaborators || [];
  }
}
