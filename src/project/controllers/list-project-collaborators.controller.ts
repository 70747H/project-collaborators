import { Request, Response } from 'express';
import { ProjectRepository } from '../repositories/project.repository';

export const listProjectCollaboratorsController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const project = ProjectRepository.findById(+id);

  res.send(project.collaborators || []);
};
