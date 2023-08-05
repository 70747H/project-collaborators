import { Request, Response } from 'express';
import { listProjectsController } from './list-projects.controller';
import { ProjectRepository } from '../repositories/project.repository';

describe('Controller::listProjects', () => {
  beforeEach(() => {
    ProjectRepository.projects = [];
    const project1 = { name: 'Project 1' };
    ProjectRepository.save(project1);
  });

  it('should return a list of project', () => {
    // Arrange
    let projects = [];
    const req = {} as any as Request;
    const res = { send: (_) => (projects = _) } as any as Response;

    // Act
    listProjectsController(req, res);

    // Assert
    expect(projects.length).toBe(1);
    expect(projects[0].name).toBe('Project 1');
  });
});
