import { Request, Response } from 'express';
import { listProjectCollaboratorsController } from './list-project-collaborators.controller';
import { ProjectRepository } from '../repositories/project.repository';

describe('Controller::listProjectCollaborators', () => {
  beforeEach(() => {
    ProjectRepository.projects = [];
    const project1 = { name: 'Project 1' };
    ProjectRepository.save(project1);
    ProjectRepository.addCollaborator(0, 'paul_emile@gmail.com');
  });

  it('should return a list of Collaborators of a project', () => {
    // Arrange
    let collaborators = [];
    const email = 'paul_emile@gmail.com';
    const req = { params: { id: 0 } } as any as Request;
    const res = { send: (_) => (collaborators = _) } as any as Response;

    // Act
    listProjectCollaboratorsController(req, res);

    // Assert
    expect(collaborators.length).toBe(1);
    expect(collaborators[0]).toBe('paul_emile@gmail.com');
  });
});
