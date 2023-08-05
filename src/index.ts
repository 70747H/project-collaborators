import express from 'express';
import bodyParser from 'body-parser';
import { createProjectController } from './project/controllers/create-project.controller';
import { listProjectsController } from './project/controllers/list-projects.controller';
import { addCollaboratorController } from './project/controllers/add-collaborator.controller';
import { listProjectCollaboratorsController } from './project/controllers/list-project-collaborators.controller';

const bootstrap = async () => {
  const app = express();
  app.use(bodyParser.json());
  const port = 3000;

  app.post('/projects', createProjectController);
  app.get('/projects', listProjectsController);
  app.post('/projects/:id/collaborators', addCollaboratorController);
  app.get('/projects/:id/collaborators', listProjectCollaboratorsController);

  app.listen(port, () => {
    console.log(`Api listening at http://localhost:${port}`);
  });
};

bootstrap().then(() => {
  console.log('> Application started');
});
