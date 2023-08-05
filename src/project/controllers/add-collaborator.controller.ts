import { Request, Response } from 'express';
import { ProjectRepository } from '../repositories/project.repository';

export const addCollaboratorController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const { email } = req.body;

    const project = ProjectRepository.findById(+id);
    if (!project) return res.status(404).send('Project not found');

    if (!email)
      return res.status(400).send('Collaborator email must be provided');

    if (ProjectRepository.doesEmailExists(email, project.collaborators as []))
      return res.status(400).send('Collaborator email already exists');

    ProjectRepository.addCollaborator(+id, email);

    return res.send(project);
  } catch (error) {
    console.log(error);
  }
};
