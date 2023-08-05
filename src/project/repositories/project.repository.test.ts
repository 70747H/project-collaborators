import { ProjectRepository } from './project.repository';

describe('Repository::Project', () => {
  beforeEach(() => {
    ProjectRepository.projects = [];
    const project1 = { name: 'Project 1' };
    const project2 = { name: 'Project 2' };
    ProjectRepository.save(project1);
    ProjectRepository.save(project2);
  });

  it('should save a project', () => {
    // Arrange
    const project = { name: 'Project 3' };

    // Act
    ProjectRepository.save(project);

    // Assert
    expect(ProjectRepository.projects.length).toBe(3);
  });

  it('should retrieve all projects', function () {
    // Act
    const projects = ProjectRepository.findAll();

    // Assert
    expect(projects.length).toBe(2);
  });

  it('should retrieve one project by id', function () {
    // Act
    const project = ProjectRepository.findById(0);

    // Assert
    expect(project.name).toBe('Project 1');
  });
});
