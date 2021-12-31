import { Router } from 'express';
import multer from 'multer';

import upload from '@config/upload';
import { CreateUserContoller } from '@modules/accounts/useCases/createUser/CreateUserContoller';
import { ProfileUserContoller } from '@modules/accounts/useCases/profileUser/ProfileUserContoller';
import { UpdateUserAvatarController } from '@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createUserController = new CreateUserContoller();
const updateUserAvatarController = new UpdateUserAvatarController();
const profileUserContoller = new ProfileUserContoller();

const usersRoutes = Router();

const uploadAvatar = multer(upload);

usersRoutes.post('/', createUserController.handle);

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle,
);

usersRoutes.get('/profile', ensureAuthenticated, profileUserContoller.handle);

export { usersRoutes };
