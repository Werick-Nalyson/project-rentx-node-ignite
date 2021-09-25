import { Router } from 'express';

import { CreateUserContoller } from '../modules/accounts/useCases/createUser/CreateUserContoller';

const createUserController = new CreateUserContoller();

const usersRoutes = Router();

usersRoutes.post('/', createUserController.handle);

export { usersRoutes };
