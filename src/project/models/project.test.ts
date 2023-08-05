import { Project } from './project';

describe('project', () => {
  it('should set the name', () => {
    // Arrange
    const projectName = 'Project 1';

    // Act
    const project = new Project(projectName);

    // Assert
    expect(project.name).toBe(projectName);
    expect(project.collaborators).toEqual([]);
  });
});
