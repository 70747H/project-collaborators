import { Request, Response } from 'express';
import { createProjectController } from './create-project.controller';

describe('Controller::createProject', () => {
  it('should be return the new project', () => {
    // Arrange
    const name = 'Project 1';
    const req = { body: { name } } as any as Request;
    const res = { send: jest.fn() } as any as Response;

    // Act
    createProjectController(req, res);

    // Assert
    expect(res.send).toHaveBeenCalledWith({ name, collaborators: [] });
  });
});
