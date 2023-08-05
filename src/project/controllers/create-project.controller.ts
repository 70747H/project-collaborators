import { Request, Response } from 'express';
import { Project } from '../models/project';
import { ProjectRepository } from '../repositories/project.repository';

export const createProjectController = async (req: Request, res: Response) => {
  const { name } = req.body;
  const project = new Project(name);
  ProjectRepository.save(project);
  res.send(project);
};
