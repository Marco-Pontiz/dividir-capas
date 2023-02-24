import Router from 'express';
import dataController from '../controllers/controller.js';

const apiRoutes = Router();

apiRoutes.get('/', dataController.getData);

export default apiRoutes;