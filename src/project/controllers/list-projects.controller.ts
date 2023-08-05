import { Request, Response } from 'express';
import { ProjectRepository } from '../repositories/project.repository';

export const listProjectsController = async (req: Request, res: Response) => {
  const projects = ProjectRepository.findAll();
  res.send(projects);
};
