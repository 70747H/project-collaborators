import { Request, Response } from 'express';
import { addCollaboratorController } from './add-collaborator.controller';
import { ProjectRepository } from '../repositories/project.repository';

describe('Controller::addCollaboratorController', () => {
  beforeEach(() => {
    ProjectRepository.projects = [];
    const project1 = { name: 'Project 1' };
    ProjectRepository.save(project1);
  });

  afterEach(() => {
    ProjectRepository.projects = [];
  });

  it('should be return the existing project with collaborator added', () => {
    // Arrange
    const id = '0';
    const name = 'Project 1';
    const email = 'paul_emile@gmail.com';
    const req = { params: { id }, body: { email } } as any as Request;
    const res = { send: jest.fn() } as any as Response;

    // Act
    addCollaboratorController(req, res);

    // Assert
    expect(res.send).toHaveBeenCalledWith({ name, collaborators: [email] });
  });

  it('should be return Project not found', () => {
    // Arrange
    const id = '1';
    const email = 'paul_emile@gmail.com';
    const req = { params: { id }, body: { email } } as any as Request;
    const res = {
      status: jest.fn(() => res),
      send: jest.fn(),
    } as any as Response;

    // Act
    addCollaboratorController(req, res);

    // Assert
    expect(res.send).toHaveBeenCalledWith('Project not found');
  });

  it('should be return Collaborator email must be provided', () => {
    // Arrange
    const id = '0';
    const req = { params: { id }, body: {} } as any as Request;
    const res = {
      status: jest.fn(() => res),
      send: jest.fn(),
    } as any as Response;

    // Act
    addCollaboratorController(req, res);

    // Assert
    expect(res.send).toHaveBeenCalledWith(
      'Collaborator email must be provided'
    );
  });

  it('should be return Collaborator email already exists', () => {
    // Arrange
    const id = '0';
    const name = 'Project 1';
    const email = 'paul_emile@gmail.com';
    const req = { params: { id }, body: { email } } as any as Request;
    const res = {
      status: jest.fn(() => res),
      send: jest.fn(() => res),
    } as any as Response;

    // Act
    addCollaboratorController(req, res);
    addCollaboratorController(req, res);

    // Assert
    expect(res.send).toBeCalledWith({ name, collaborators: [email] });
    expect(res.send).toHaveBeenLastCalledWith(
      'Collaborator email already exists'
    );
  });
});
